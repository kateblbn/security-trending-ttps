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

function App() {
  const SELECT_ALL_VALUE = "all";
  const [tactics, setTactics] = useState<MitreTactic[]>();
  const [techniques, setTechniques] = useState<TrendingTechnique[]>();
  const [baselineTechniques, setBaselineTechniques] = useState<TrendingTechnique[]>();


  const [taCategoryValue, setTaCategoryValue] = useState(SELECT_ALL_VALUE); //value from NS = tacticKeys. fe command-and-control
  console.log(taCategoryValue);

  const [taNameValue, setTaNameValue] = useState(SELECT_ALL_VALUE);
  const [taOtherNameValue, setTaOtherName] = useState(SELECT_ALL_VALUE); //selected UNC94 (Mandiant) from filterBar
  // console.log(taOtherNameValue, taNameValue);
  console.log(taCategoryValue);

  const [toggle, setToggle] = useState(false);

  let repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getTrendingTechniques().then((x) => setTechniques(x));
    repo.getBaselineTechniques().then((x) => setBaselineTechniques(x));
  ;
  }, []);

  const onChange = (x: boolean) => {
    setToggle(x);
  };
if (!tactics || !techniques || !baselineTechniques) {
  return "Loading.."
} 

  // console.log(taCategory);
  /// 1. filter techniques by threat category if selected
  let filteredByCategory;

  if (taCategoryValue == SELECT_ALL_VALUE) filteredByCategory = techniques;
  else
    filteredByCategory = techniques.filter((tech) => {
      console.log(tech.categoryName);

     return tech.categoryName == taCategoryValue;
    });

  console.log(filteredByCategory);
  
  console.log(taCategoryValue);


  /// 2. filter techniques by threat actor if selected
  let filteredByActor: TrendingTechnique[];

  if (taNameValue == SELECT_ALL_VALUE) filteredByActor = filteredByCategory;
  else
    filteredByActor = filteredByCategory.filter(
      (tech) => tech.taGroup == taNameValue
    );
  console.log(filteredByActor);

  let filteredByOther: TrendingTechnique[]; 

  if (taOtherNameValue == SELECT_ALL_VALUE) filteredByOther = filteredByActor;
  else
    filteredByOther = filteredByActor.filter(
      (tech) => tech.otherNames === taOtherNameValue
    );
  console.log(typeof filteredByOther);

  // tech.otherNames === taOtherNameValue
  /// 3. group filtered techniques by tactic
  const tacticsWithTechniques = filteredByOther.reduce(
    (acc: Map<string, TrendingTechnique[]>, currentTechnique) => {
      // console.log(acc);
      // console.log(currentTechnique);

      const tactics = currentTechnique.techniqueTactics.split(", ");
      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, TrendingTechnique[]>()
  );

  // console.log(taCategoryValue);

  const uniqueCategories = filteredByOther.reduce((acc: string[], current) => {
    if (!acc.includes(current.categoryName)) acc.push(current.categoryName);
    return acc;
  }, []);
  const uniqueActorMainNames = filteredByOther.reduce(
    (acc: string[], current) => {
      if (!acc.includes(current.taGroup)) acc.push(current.taGroup);
      return acc;
    },
    []
  );
  const uniqueActorOtherNames = filteredByOther.reduce(
    (acc: string[], current) => {
      if (!acc.includes(current.otherNames)) acc.push(current.otherNames);
      return acc;
    },
    []
  );

  return (
    <>
      <Header
        title="Telenor"
        subTitle={toggle ? "Baseline TTPs" : "Trending TTPs"}
      />
      <div className="switch-flex">
        <FilterBar
          categoryValues={uniqueCategories}
          actorMainNames={uniqueActorMainNames}
          actorOtherNames={uniqueActorOtherNames}
          onCategoryChange={setTaCategoryValue}
          onActorMainNameChange={setTaNameValue}
          onActorOtherNameChange={setTaOtherName}
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
