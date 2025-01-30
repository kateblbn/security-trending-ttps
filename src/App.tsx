import "./App.css";
import { useEffect, useState } from "react";
import { MitreTactic, MitreTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Switch, Tooltip } from "antd";
import Header from './assets/components/Header/Header';

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>([]);
  const [techniquesBaseline, setTechniquesBaseline] = useState<
    MitreTechnique[]
  >([]);
  const [techniquesTrending, setTechniquesTrending] = useState<
    MitreTechnique[]
  >([]);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  let repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);
  // repo = new XrmRepository(window.parent.Xrm);
  // console.log(repo);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getBaselineTechniques().then((x) => setTechniquesBaseline(x));
    repo.getTechniquesMatrixTrending().then((x) => setTechniquesTrending(x));
  }, []);

  const onChange = (x: boolean) => {
    setToggle(x);
  };

  return (
    <>
    <Header/>
      <Switch onChange={onChange} />
      <TechniquesMatrix
        tactics={tactics}
        techniques={toggle ? techniquesBaseline : techniquesTrending}
      />
    </>
  );
}

export default App;
