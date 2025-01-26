import "./App.css";
import { useEffect, useState } from "react";
import { MitreTactic, MitreTechnique } from "./assets/components/Data";
import { XrmRepository } from "./assets/repositories/xrm-repository";
import { TechniquesMatrix } from "./assets/components/TechniquesMatrix";
import { TestRepository } from './assets/repositories/test-repository';

function App() {
  const [tactics, setTactics] = useState<MitreTactic[]>([]);
  const [techniques, setTechniques] = useState<MitreTechnique[]>([]);

  let repo = import.meta.env.DEV ? new TestRepository() : new XrmRepository(window.parent.Xrm);
  // repo = new XrmRepository(window.parent.Xrm);
// console.log(repo);

  useEffect(() => {
     repo.getTactics().then((x) => setTactics(x));
    repo.getTechniques().then((x) => setTechniques(x));
  }, []);

  return (
    <>
      <TechniquesMatrix tactics={tactics} techniques={techniques} />
    </>
  );
}

export default App;
