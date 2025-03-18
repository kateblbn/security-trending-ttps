import "./App.css";
import { useEffect, useState } from "react";
import {
  BaselineTechnique,
  MitreMainTechnique,
  MitreTactic,
  TrendingTechnique,
} from "./components/Data";
import { XrmRepository } from "./repositories/xrm-repository";
import { TechniquesMatrix } from "./components/TechniquesMatrix";
import { TestRepository } from "./repositories/test-repository";
import { Button, ConfigProvider, Flex, Spin, Switch, Tooltip } from "antd";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import { ActorNames } from "./components/FilterBar";
import TrendingModal from "./components/popup/TrendingModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import MonthRangeSlider, { MonthRange } from "./components/MonthRangeSlider";
import BaselineModal from "./components/popup/BaselineModal";
import {
  getFilteredTechniquesByActors,
  getFilteredTechniquesByCategories,
  getParentTechniquesToSubtechniques,
  getTacticsReducedWithTechniques,
  getUniqueActorMainNames,
  getUniqueCategoriesByExistingActor,
} from "./utils";
import SwitchToggle from "./components/SwitchToggle";

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>();
  const [trendingTechniques, setTrendingTechniques] =
    useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] =
    useState<BaselineTechnique[]>();
  const [mainTechniques, setMainTechniques] = useState<MitreMainTechnique[]>();
  const [selectedCategories, setTaCategoryValue] = useState<string[]>([]);
  const [selectedActors, setSelectedActors] = useState<string[]>([]);
  const [isTrendingView, setIsTrendingView] = useState(true);
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

  if (
    !tactics ||
    !trendingTechniques ||
    !baselineTechniques ||
    !mainTechniques
  ) {
    return <Spin fullscreen />;
  }

  const trendingTechniquesFilteredByMonthRange = monthRange
    ? trendingTechniques.filter(
        (x) =>
          x.esa_eventdate >= monthRange.minDate &&
          x.esa_eventdate <= monthRange.maxDate
      )
    : trendingTechniques;

  let techniques = isTrendingView
    ? trendingTechniquesFilteredByMonthRange
    : baselineTechniques;

  let filteredTechniques = techniques;

  filteredTechniques = getFilteredTechniquesByActors(
    selectedActors,
    filteredTechniques
  );

  filteredTechniques = getFilteredTechniquesByCategories(
    selectedCategories,
    filteredTechniques
  );

  filteredTechniques = getParentTechniquesToSubtechniques(
    filteredTechniques,
    mainTechniques
  );

  const tacticsWithTechniques =
    getTacticsReducedWithTechniques(filteredTechniques);

  const uniqueCategories = getUniqueCategoriesByExistingActor(techniques);

  const uniqueActorMainNames = getUniqueActorMainNames(
    techniques,
    selectedCategories
  );
  console.log(uniqueActorMainNames);

  let modal = null;
  if (selectedMitreId) {
    if (isTrendingView) {
      modal = (
        <TrendingModal
          repository={repo}
          occurences={(filteredTechniques as TrendingTechnique[]).filter(
            (x) => x.technique.esa_mitreid === selectedMitreId
          )}
          onClose={() => setSelectedMitreId(null)}
        />
      );
    } else {
      modal = (
        <BaselineModal
          repository={repo}
          occurences={filteredTechniques.filter(
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
            handleBg: "#00C8FF ",
          },
        },
      }}
    >
      <Header title={isTrendingView ? "Trending TTPs" : "Baseline TTPs"}>
        <SwitchToggle
          isTrendingView={isTrendingView}
          setIsTrendingView={setIsTrendingView}
          setMonthRange={setMonthRange}
        />
      </Header>
      <div className="filters-flex">
        <FilterBar
          categoryValues={uniqueCategories}
          actorNames={uniqueActorMainNames}
          onCategoryChange={setTaCategoryValue}
          onActorMainNameChange={setSelectedActors}
        />
        {isTrendingView && (
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
