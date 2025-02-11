import "./App.css";
import { useEffect, useState } from "react";
import { MitreTactic, TrendingTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Switch } from "antd";
import FilterBar from "./assets/components/FilterBar";
import Header from "./assets/components/Header";
import { ActorNames } from "./assets/components/FilterBar";

function App() {
  const SELECT_ALL_VALUE = "all";
  const [tactics, setTactics] = useState<MitreTactic[]>();
  const [trendingTechniques, setTechniques] = useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] =
    useState<TrendingTechnique[]>();
  const [selectedCategories, setTaCategoryValue] = useState<string[]>([]); //value from NS = tacticKeys. fe command-and-control
  const [selectedActors, setSelectedActors] = useState<string[]>([]);
  const [button, setButton] = useState<boolean>(false);
  const [toggle, setToggle] = useState(false);
  console.log(trendingTechniques);

  let repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getTrendingTechniques().then((x) => setTechniques(x));
    repo.getBaselineTechniques().then((x) => setBaselineTechniques(x));
  }, []);

  const onChange = (x: boolean) => {
    setToggle(x);
  };
  if (!tactics || !trendingTechniques || !baselineTechniques) {
    return "Loading..";
  }
  let techniques = toggle ? baselineTechniques : trendingTechniques;
  console.log(techniques);

  let filteredTechniques = techniques;
  // filter by category
  if (selectedCategories.length !== 0) {
    filteredTechniques = filteredTechniques.filter((x) =>
      selectedCategories.includes(x.categoryName)
    );
  }

  // filter by actor name
  if (selectedActors.length !== 0) {
    filteredTechniques = filteredTechniques.filter((x) =>
      selectedActors.some((actor) => actor === x.taGroup)
    );
  }

  /// 3. group filtered techniques by tactic
  const tacticsWithTechniques = filteredTechniques.reduce(
    (acc: Map<string, TrendingTechnique[]>, currentTechnique) => {
      const tactics = currentTechnique.techniqueTactics.split(", ");

      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, TrendingTechnique[]>()
  );

  const uniqueCategories = techniques.reduce((acc: string[], current) => {
    if (!acc.includes(current.categoryName)) acc.push(current.categoryName);
    return acc;
  }, []);

  const uniqueActorMainNames = techniques.reduce<ActorNames[]>(
    (acc, current) => {
      const existingActor = acc.find(
        (item) => item.mainName === current.taGroup
      );

      // if we already added this actor, we don't want to add it again
      if (existingActor) return acc;

      if (
        selectedCategories.length === 0 ||
        selectedCategories.includes(current.categoryName)
      ) {
        acc.push({
          mainName: current.taGroup,
          otherNames: current.otherNames,
        });
      }

      return acc;
    },
    []
  );

  console.log(button);

  return (
    <>
      <Header
        title="Telenor"
        subTitle={toggle ? "Baseline TTPs" : "Trending TTPs"}
      />
      <div className="switch-flex">
        <FilterBar
          categoryValues={uniqueCategories}
          actorNames={uniqueActorMainNames}
          onCategoryChange={setTaCategoryValue}
          onActorMainNameChange={setSelectedActors}
          setButton={setButton}
        />
        <Switch onChange={onChange} />
      </div>

      <TechniquesMatrix
        tactics={tactics}
        tacticsWithTechniques={tacticsWithTechniques}
      />
    </>
  );
}

export default App;
