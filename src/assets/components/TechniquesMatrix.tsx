import { GroupCategoriesFilter, MitreTactic, MitreTechnique } from "./Data";
import { TechniqueColumn } from "./TechniqueColumn";
import { KillChainHeaderItem } from "./KillChainHeaderItem";
import "./TechniquesMatrix.css";
import TechniqueItem from "./TechniqueItem";

export function TechniquesMatrix({
  tacticsWithTechniques,
  tactics,
  techniques,
  taCategory,
  taCategoryValue,
  taNameValue,
  taOtherNameValue,
}: {
  tacticsWithTechniques: Map<string, GroupCategoriesFilter[]>;
  tactics: MitreTactic[];
  techniques: MitreTechnique[];
  taCategory?: string;
  taCategoryValue: string;
  taNameValue: any;
  taOtherNameValue: any;
}) {
  tactics.sort((a, b) => a.number - b.number);
  // console.log(tacticsWithTechniques);

  return (
    <div className="container">
      <div className="header-technique">
        {tactics.map((tactic) => {
          const techniques = tacticsWithTechniques.get(tactic.tacticsKey) ?? [];
          // console.log(techniques);

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
                    key={technique.categoryName}
                    count={tactic.number}
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
