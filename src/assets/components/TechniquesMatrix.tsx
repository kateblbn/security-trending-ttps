import { MitreTactic, MitreTechnique } from "./Data";
import { TechniqueColumn } from "./TechniqueColumn";
import { KillChainHeaderItem } from "./KillChainHeaderItem";
import "./TechniquesMatrix.css";

export function TechniquesMatrix({
  tactics,
  techniques,
}: {
  tactics: MitreTactic[];
  techniques: MitreTechnique[];
}) {
  return (
    <div className="container">
      <div className="header-technique">
        {tactics.map((tactic) => {
          console.log(tactic);
          console.log(techniques);

          const relatedTechniques = techniques.filter((technique) => {
            const tacticList = technique["tacticKeys"];
            if (tacticList) {
              return tacticList.split(", ").includes(tactic["tacticsKey"]);
            }
            return false;
          });

          return (
            <div className="header-techniques-wrapper" key={tactic.id}>
              <KillChainHeaderItem
                number={tactic.number}
                tactic={tactic.tactic}
                id={tactic.id}
              />

              <span className="line"></span>
              {relatedTechniques.length > 0 && (
                <div className="technique-column">
                  {relatedTechniques.map((technique) => (
                    <TechniqueColumn
                      key={technique.id}
                      id={technique.id}
                      name={technique.name}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
