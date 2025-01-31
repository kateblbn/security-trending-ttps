import "./App.css";
import { useEffect, useState } from "react";
import { GroupCategoriesFilter, MitreTactic, MitreTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Switch, Tooltip } from "antd";
import FilterBar from "./assets/components/Header/FilterBar";

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>([]);
  const [taCategory, settaCategory] = useState<GroupCategoriesFilter[]>([]);
  console.log(taCategory);
  

  const [techniquesBaseline, setTechniquesBaseline] = useState<
    MitreTechnique[]
  >([]);
  const [techniquesTrending, setTechniquesTrending] = useState<
    MitreTechnique[]
  >([]);
  const [toggle, setToggle] = useState(false);

  let repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);
  // repo = new XrmRepository(window.parent.Xrm);
  // console.log(repo);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getBaselineTechniques().then((x) => setTechniquesBaseline(x));
    repo.getTechniquesMatrixTrending().then((x) => setTechniquesTrending(x));
    repo.getFilteredCategoryGroup().then( x => settaCategory(x))
  }, []);

  const onChange = (x: boolean) => {
    setToggle(x);
  };

  return (
    <>
      <FilterBar categoryName={taCategory}/>
      <Switch onChange={onChange} />
      <TechniquesMatrix
        tactics={tactics}
        techniques={toggle ? techniquesBaseline : techniquesTrending}
      />
    </>
  );
}

export default App;
