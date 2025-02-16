import "./App.css";
import { useEffect, useState } from "react";
import {
  BaselineTechnique,
  MitreMainTechnique,
  MitreTactic,
  TrendingTechnique,
} from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, ConfigProvider, Flex, Switch, Tooltip } from "antd";
import FilterBar from "./assets/components/FilterBar";
import Header from "./assets/components/Header";
import { ActorNames } from "./assets/components/FilterBar";
import TrendingModal from "./assets/components/popup/TrendingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MonthRangeSlider, {
  MonthRange,
} from "./assets/components/MonthRangeSlider";
import BaselineModal from "./assets/components/popup/BaselineModal";

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>();
  const [trendingTechniques, setTrendingTechniques] =
    useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] =
    useState<BaselineTechnique[]>();
  const [mainTechniques, setMainTechniques] = useState<MitreMainTechnique[]>();
  const [selectedCategories, setTaCategoryValue] = useState<string[]>([]); //value from NS = tacticKeys. fe command-and-control
  const [selectedActors, setSelectedActors] = useState<string[]>([]);
  const [isBaselineView, setIsBaselineView] = useState(false);
  const [selectedMitreId, setSelectedMitreId] = useState<string | undefined>();
  const [monthRange, setMonthRange] = useState<MonthRange>();

  const repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getTrendingTechniques().then((x) => setTrendingTechniques(x));
    repo.getBaselineTechniques().then((x) => setBaselineTechniques(x));
    repo.getMainMitreTechniques().then((x) => setMainTechniques(x));
  }, []);

  function onToggleChange(isBaseline: boolean) {
    if (isBaseline) setMonthRange(undefined);
    setIsBaselineView(isBaseline);
  }

  if (
    !tactics ||
    !trendingTechniques ||
    !baselineTechniques ||
    !mainTechniques
  ) {
    return "Loading..";
  }

  const trendingTechniquesFilteredByMonthRange = monthRange
    ? trendingTechniques.filter(
        (x) =>
          x.esa_eventdate >= monthRange.minDate &&
          x.esa_eventdate <= monthRange.maxDate
      )
    : trendingTechniques;

  let techniques = isBaselineView
    ? baselineTechniques
    : trendingTechniquesFilteredByMonthRange;

  let filteredTechniques = techniques;

  // filter by category
  if (selectedCategories.length !== 0) {
    filteredTechniques = filteredTechniques.filter((x) =>
      selectedCategories.includes(x.taGroup.category.esa_name)
    );
  }

  // filter by actor name
  if (selectedActors.length !== 0) {
    filteredTechniques = filteredTechniques.filter((x) =>
      selectedActors.some((actor) => actor === x.taGroup.esa_name)
    );
  }

  // Add parent technique name to subtechniques
  filteredTechniques = filteredTechniques.map((tech) => {
    if (tech.technique.esa_issubtechnique) {
      const parentId = tech.technique.esa_mitreid.substring(
        0,
        tech.technique.esa_mitreid.indexOf(".")
      );
      const parent = mainTechniques.find((x) => x.esa_mitreid === parentId);
      const newName = `${parent.esa_name}: ${tech.technique.esa_name}`;
      const techniqueWithNewName = { ...tech.technique, esa_name: newName };
      return { ...tech, technique: techniqueWithNewName };
    }
    return tech;
  });

  /// 3. group filtered techniques by tactic
  const tacticsWithTechniques = filteredTechniques.reduce(
    (acc: Map<string, BaselineTechnique[]>, currentTechnique) => {
      const tactics = currentTechnique.technique.esa_tactics.split(", ");

      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, BaselineTechnique[]>()
  );

  const uniqueCategories = techniques.reduce((acc: string[], current) => {
    if (!acc.includes(current.taGroup.category.esa_name))
      acc.push(current.taGroup.category.esa_name);
    return acc;
  }, []);

  const uniqueActorMainNames = techniques.reduce<ActorNames[]>(
    (acc, current) => {
      const existingActor = acc.find(
        (item) => item.mainName === current.taGroup.esa_name
      );

      // if we already added this actor, we don't want to add it again
      if (existingActor) return acc;

      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(current.taGroup.category.esa_name)
      ) {
        acc.push({
          mainName: current.taGroup.esa_name,
          otherNames: current.taGroup.esa_othernames,
        });
      }

      return acc;
    },
    []
  );

  let modal = null;
  if (selectedMitreId) {
    if (isBaselineView) {
      modal = (
        <BaselineModal
          repository={repo}
          occurences={filteredTechniques.filter(
            (x) => x.technique.esa_mitreid === selectedMitreId
          )}
          onClose={() => setSelectedMitreId(null)}
        />
      );
    } else {
      modal = (
        <TrendingModal
          repository={repo}
          occurences={(filteredTechniques as TrendingTechnique[]).filter(
            (x) => x.technique.esa_mitreid === selectedMitreId
          )}
          onClose={() => setSelectedMitreId(null)}
        />
      );
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            // colorPrimary:"#00C8FF",
          },
        },
      }}
    >
      <Header title={isBaselineView ? "Baseline TTPs" : "Trending TTPs"}>
        <div className="switch-group">
          <Tooltip title={trendingTooltip}>
            {" "}
            <FontAwesomeIcon icon={faCircleInfo} />
          </Tooltip>
          <h4>Trending</h4>
          <Switch onChange={onToggleChange} />
          <h4>Baseline</h4>
          <Tooltip title={baselineTooltip}>
            <FontAwesomeIcon icon={faCircleInfo} />
          </Tooltip>
        </div>
      </Header>
      <div className="filters-flex">
        <FilterBar
          categoryValues={uniqueCategories}
          actorNames={uniqueActorMainNames}
          onCategoryChange={setTaCategoryValue}
          onActorMainNameChange={setSelectedActors}
        />
        {!isBaselineView && (
          <MonthRangeSlider
            data={trendingTechniques.map((x) => x.esa_eventdate)}
            onChange={setMonthRange}
          />
        )}
      </div>
      <TechniquesMatrix
        tactics={tactics}
        tacticsWithTechniques={tacticsWithTechniques}
        onTechniqueClick={setSelectedMitreId}
      />

      {modal}
    </ConfigProvider>
  );
}

export default App;

const trendingTooltip = "Based on known events";
const baselineTooltip =
  "Unique combinations of threat actors and their techniques";
