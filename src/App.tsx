import "./App.css";
import { useEffect, useState } from "react";
import {
  GroupCategoriesFilter,
  MitreTactic,
  MitreTechnique,
} from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Switch } from "antd";
import FilterBar from "./assets/components/FilterBar";
import Header from "./assets/components/Header";

function App() {
  const SELECT_ALL_VALUE = "all";
  const [tactics, setTactics] = useState<MitreTactic[]>([]);
  const [techniques, setTechniques] = useState<MitreTechnique[]>([]);
  const [taCategory, setTaCategory] = useState<GroupCategoriesFilter[]>([]);
  
  
  const [taCategoryValue, setTaCategoryValue] = useState(SELECT_ALL_VALUE); //value from NS = tacticKeys. fe command-and-control
  // console.log(taCategoryValue);
  
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
    repo.getBaselineTechniques().then((x) => setTechniques(x));
    repo.getTechniquesMatrixTrending().then((x) => setTechniques(x));
    repo.getFilteredCategoryGroup().then((x) => setTaCategory(x));
  }, []);

  const onChange = (x: boolean) => {
    setToggle(x);
  };
  // console.log(taCategory);

  /// 1. filter techniques by threat category if selected
  let filteredByCategory;

  if (taCategoryValue == SELECT_ALL_VALUE) filteredByCategory = taCategory;
  else
    filteredByCategory = taCategory.filter(
      (tech) => {
        tech.categoryName === taCategoryValue 
      }
    );

  // console.log(filteredByCategory);

  /// 2. filter techniques by threat actor if selected
  let filteredByActor;

  if (taNameValue === SELECT_ALL_VALUE) filteredByActor = filteredByCategory;
  else
    filteredByActor = filteredByCategory.filter(
      (tech) => tech.taGroup === taNameValue
    );
  console.log(filteredByActor);

  let filteredByOther 

  if ( taOtherNameValue == SELECT_ALL_VALUE) filteredByOther = filteredByActor
  else 
  filteredByOther = filteredByActor.filter( tech => tech.otherNames === taOtherNameValue)
console.log(filteredByOther);



  // tech.otherNames === taOtherNameValue
  /// 3. group filtered techniques by tactic
  const tacticsWithTechniques = filteredByOther.reduce(
    (acc: Map<string, GroupCategoriesFilter[]>, currentTechnique) => {
      // console.log(acc);
// console.log(currentTechnique);

      const tactics = currentTechnique.techniqueTactic.split(", ");
      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, GroupCategoriesFilter[]>()
  );

  // console.log(taCategoryValue);

  const filteredTechniques = techniques.filter((technique) => {
    if (taCategoryValue) {
      if (Array.isArray(technique.tacticKeys)) {
        return technique.tacticKeys.includes(taCategoryValue);
      } else if (typeof technique.tacticKeys === "string") {
        return technique.tacticKeys.split(", ").includes(taCategoryValue);
      }
    }
    return true;
  });
  return (
    <>
      <Header
        title="Telenor"
        subTitle={toggle ? "Baseline TTPs" : "Trending TTPs"}
      />
      <div className="switch-flex">
        <FilterBar
          categoryName={taCategory}
          setTaCategoryValue={setTaCategoryValue}
          setTaNameValue={setTaNameValue}
          setTaOtherName={setTaOtherName}
        />
        <Switch onChange={onChange} />
      </div>

      <TechniquesMatrix
        tactics={tactics}
        techniques={filteredTechniques}
        taCategoryValue={taCategoryValue}
        taNameValue={taNameValue}
        taOtherNameValue={taOtherNameValue}
        tacticsWithTechniques={tacticsWithTechniques}
      />
    </>
  );
}

export default App;
