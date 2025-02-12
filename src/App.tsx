import "./App.css";
import { useEffect, useState } from "react";
import { BaselineTechnique, MitreTactic, TrendingTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Switch } from "antd";
import FilterBar from "./assets/components/FilterBar";
import Header from "./assets/components/Header";
import { ActorNames } from "./assets/components/FilterBar";
import TrendingModal from "./assets/components/popup/TrendingModal";

function App() {
  const SELECT_ALL_VALUE = "all";
  const [tactics, setTactics] = useState<MitreTactic[]>();
  const [trendingTechniques, setTrendingTechniques] = useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] =
    useState<BaselineTechnique[]>();
  const [selectedCategories, setTaCategoryValue] = useState<string[]>([]); //value from NS = tacticKeys. fe command-and-control
  const [selectedActors, setSelectedActors] = useState<string[]>([]);
  const [button, setButton] = useState<boolean>(false);
  const [isBaselineView, setIsBaselineView] = useState(false);
  const [selectedMitreId, setSelectedMitreId] = useState<string|undefined>()
  console.log(trendingTechniques);

  const repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getTrendingTechniques().then((x) => setTrendingTechniques(x));
    repo.getBaselineTechniques().then((x) => setBaselineTechniques(x));
  }, []);

  function onToggleChange(x: boolean){
    setIsBaselineView(x);
  };


  if (!tactics || !trendingTechniques || !baselineTechniques) {
    return "Loading..";
  }
  let techniques = isBaselineView ? baselineTechniques : trendingTechniques;

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
    if (!acc.includes(current.taGroup.category.esa_name)) acc.push(current.taGroup.category.esa_name);
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

  let modal = null
  if (selectedMitreId){
    if (isBaselineView){

    }
    else{
      modal = <TrendingModal 
        repository={repo}
        occurences={(filteredTechniques as TrendingTechnique[])
          .filter(x => x.technique.esa_mitreid === selectedMitreId)}
        onClose={() => setSelectedMitreId(null)}
        />
    }
  }

  return (
    <>
      <Header
        title=""
        subTitle={isBaselineView ? "Baseline TTPs" : "Trending TTPs"}
      />
      <div className="switch-flex">
        <FilterBar
          categoryValues={uniqueCategories}
          actorNames={uniqueActorMainNames}
          onCategoryChange={setTaCategoryValue}
          onActorMainNameChange={setSelectedActors}
          setButton={setButton}
        />
        <Switch onChange={onToggleChange} />
      </div>

      <TechniquesMatrix
        tactics={tactics}
        tacticsWithTechniques={tacticsWithTechniques}
        onTechniqueClick={setSelectedMitreId}
      />

      {modal}
    </>
  );
}

export default App;
