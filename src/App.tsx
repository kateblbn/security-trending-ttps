import "./App.css";
import { useEffect, useState } from "react";
import { MitreTactic, MitreTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrixBaseline } from "./assets/components/TechniquesMatrixBaseline";
import { TestRepository } from "./assets/repositories/test-repository";
import { Button, Tooltip } from "antd";

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>([]);
  const [techniques, setTechniques] = useState<MitreTechnique[]>([]);

  let repo = import.meta.env.DEV
    ? new TestRepository()
    : new XrmRepository(window.parent.Xrm);
  // repo = new XrmRepository(window.parent.Xrm);
  // console.log(repo);

  useEffect(() => {
    repo.getTactics().then((x) => setTactics(x));
    repo.getTechniques().then((x) => setTechniques(x));
  }, []);

  return (
    <>
      <TechniquesMatrixBaseline tactics={tactics} techniques={techniques} />
    </>
  );
}

let a = "2";
let b = "2";
console.log(a + b);

export default App;
