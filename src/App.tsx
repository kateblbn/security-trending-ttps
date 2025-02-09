import "./App.css";
import { useEffect, useState } from "react";
import {
  BaselineTechnique,
  MitreTactic,
  TrendingTechnique,
} from "./assets/components/Data";
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
  const [techniques, setTechniques] = useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] =
    useState<TrendingTechnique[]>();
  const [taCategoryValue, setTaCategoryValue] = useState<string[]>([]); //value from NS = tacticKeys. fe command-and-control
  console.log(taCategoryValue); // [{label: 'Nation-State (Others)', value: 'Nation-State (Others)'}, ... ]
  const [taNameValue, setTaNameValue] = useState([]);
  const [taOtherNameValue, setTaOtherName] = useState([]); //selected UNC94 (Mandiant) from filterBar
  const [allNames, setAllNames] = useState<string[]>([]); //selected UNC94 (Mandiant) from filterBar

  console.log(allNames);

  const [toggle, setToggle] = useState(false);

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
  if (!tactics || !techniques || !baselineTechniques) {
    return "Loading..";
  }

  /// 1. filter techniques by threat category if selected

  let filteredByCategory: TrendingTechnique[];

  if (taCategoryValue.length == 0 || taCategoryValue.includes(SELECT_ALL_VALUE))
    filteredByCategory = techniques;
  else
    filteredByCategory = techniques.filter((tech) =>
      // console.log(tech);

      taCategoryValue.some((x) => tech.categoryName == x)
    );

  /// 2. filter techniques by threat actor if selected
  let filteredByActor: TrendingTechnique[];

  if (taNameValue.length == 0 || taNameValue.includes(SELECT_ALL_VALUE))
    filteredByActor = filteredByCategory;
  else
    filteredByActor = filteredByCategory.filter((tech) =>
      taNameValue.some((x) => tech.taGroup == x)
    );
  // console.log(filteredByActor);

  let filteredByOther: TrendingTechnique[];

  if (
    taOtherNameValue.length == 0 ||
    taOtherNameValue.includes(SELECT_ALL_VALUE)
  )
    filteredByOther = filteredByActor;
  else
    filteredByOther = filteredByActor.filter((tech) =>
      taOtherNameValue.some((x) => tech.otherNames === x)
    );

  /// 3. group filtered techniques by tactic
  const tacticsWithTechniques = filteredByOther.reduce(
    (acc: Map<string, TrendingTechnique[]>, currentTechnique) => {
      const tactics = currentTechnique.techniqueTactics.split(", ");
      // console.log(tactics); //['initial-access']

      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, TrendingTechnique[]>() //new array with techniques inside tatics
  );

  // console.log(filteredByOther);

  const uniqueCategories = techniques.reduce((acc: string[], current) => {
    if (!acc.includes(current.categoryName)) acc.push(current.categoryName);

    return acc;
  }, []);

  // let newArray = [];

  const uniqueActorMainNames = filteredByOther.reduce<ActorNames[]>(
    (acc, current) => {
      const existingActor = acc.find( item => item.mainName === current.taGroup)
  if(existingActor) {
    if(!existingActor.otherNames.includes(current.otherNames)) {
      existingActor.otherNames.push(current.otherNames)
    } 
  } else {
    acc.push( {
      mainName: current.taGroup,
      otherNames: [current.otherNames]
    })
  }
        return acc;
    },
    []
  );
  console.log(uniqueActorMainNames);


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
          onActorMainNameChange={setTaNameValue}
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
