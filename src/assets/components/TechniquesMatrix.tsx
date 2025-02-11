import { MitreTactic, TrendingTechnique } from "./Data";
import { TechniqueColumn } from "./TechniqueColumn";
import { KillChainHeaderItem } from "./KillChainHeaderItem";
import "./TechniquesMatrix.css";

export function TechniquesMatrix({
  tacticsWithTechniques,
  tactics,
}: {
  tacticsWithTechniques: Map<string, TrendingTechnique[]>;
  tactics: MitreTactic[];
}) {
  tactics.sort((a, b) => a.number - b.number);

  return (
    <div className="container">
      <div className="header-technique">
        {tactics.map((tactic) => {
          const techniques = tacticsWithTechniques.get(tactic.tacticsKey) ?? [];
          return (
            <div className="header-techniques-wrapper" key={tactic.id}>
              <KillChainHeaderItem
                number={tactic.number}
                tactic={tactic.tactic}
                id={tactic.id}
              />
              <span className="line"></span>
              <div className="technique-column">
                {techniques.map((technique) => (
                  <TechniqueColumn
                    name={technique.techniqueName}
                    key={technique.techniqueTactics}
                    count={technique.techniqueName.length}
                    id={tactic.id}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
