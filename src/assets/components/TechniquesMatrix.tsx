import { BaselineTechnique, MitreTactic} from "./Data";
import { KillChainHeaderItem } from "./KillChainHeaderItem";
import TechniqueItem from "./TechniqueItem";
import "./TechniquesMatrix.css";

export function TechniquesMatrix({
  tacticsWithTechniques,
  tactics,
}: {
  tacticsWithTechniques: Map<string, BaselineTechnique[]>;
  tactics: MitreTactic[];
}) {
  tactics.sort((a, b) => a.number - b.number);

  return (
    <div className="container">
      <div className="header-technique">
        {tactics.map((tactic) => {
          const techniques = tacticsWithTechniques.get(tactic.tacticsKey) ?? [];
          const groupedByMitreId = Map.groupBy(techniques, x => x.technique.esa_mitreid)
          const sortedByInstances = Array.from(groupedByMitreId).sort((a, b) => {
            const [aMitreId, aOccurences] = a
            const [bMitreId, bOccurences] = b
            return bOccurences.length - aOccurences.length
          })
          return (
            <div className="header-techniques-wrapper" key={tactic.id}>
              <KillChainHeaderItem
                number={tactic.number}
                tactic={tactic.tactic}
                id={tactic.id}
              />
              <span className="line"></span>
              <div className="technique-column">
                {sortedByInstances.map(([mitreId, instances]) => (
                  <TechniqueItem
                    name={instances[0].technique.esa_name}
                    key={mitreId}
                    count={instances.length}
                    id={mitreId}
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
