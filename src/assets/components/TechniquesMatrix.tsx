import { MitreTactic, MitreTechnique } from "./Data";
import { TechniqueColumn } from "./TechniqueColumn";
import { KillChainHeaderItem } from "./KillChainHeaderItem";
import "./TechniquesMatrix.css";
import { useState } from "react";

export function TechniquesMatrix({
  tactics,
  techniques,
}: {
  tactics: MitreTactic[];
  techniques: MitreTechnique[];
}) {
  tactics.sort((a, b) => a.number - b.number);

  return (
    <div className="container">
      <div className="header-technique">
        {tactics.map((tactic) => {
          // console.log(techniques);

          const relatedTechniques = techniques.filter((technique) => {
            const techniqueList = technique["tacticKeys"];
            if (techniqueList) {
              return techniqueList.split(", ").includes(tactic["tacticsKey"]);
            }
            return false;
          });
          // console.log(relatedTechniques);
          let techReduce = relatedTechniques.reduce((acc, item) => {
            if (!acc[item.id]) {
              // console.log(acc[item.id]);
              acc[item.id] = [];
            }
            acc[item.id].push(item);
            return acc;
          }, {});
          // console.log(techReduce);

          const ReducedTechniques = () => {
            const sortedTechniques =  Object.entries(techReduce).sort(
              (a, b) =>  (b[1] as unknown[]).length - (a[1] as unknown[]).length 
            );
            // console.log(sortedTechniques);
            
            console.log(Object.entries(techReduce));
            const entries = sortedTechniques.map(
              ([key, techniques]) => {
                if (techniques && Array.isArray(techniques)) {
                  // console.log(techniques);

                  // console.log(techniques.length);
                  const uniqueTechniques = techniques.filter(
                    (technique, index, self) => {
                      // console.log(technique);
                      return (
                        index === self.findIndex((t) => t.id === technique.id)
                      );
                    }
                  );
                  return uniqueTechniques.map((technique) => (
                    <TechniqueColumn
                      key={technique.id}
                      id={technique.id}
                      name={technique.name}
                      count={techniques.length}
                    />
                  ));
                } else {
                  console.log("No techniques found for key:", key);
                  return null;
                }
              }
            );
            return <div>{entries}</div>;
          };

          return (
            <div className="header-techniques-wrapper" key={tactic.id}>
              <KillChainHeaderItem
                number={tactic.number}
                tactic={tactic.tactic}
                id={tactic.id}
              />

              <span className="line"></span>
              <div className="technique-column">
                <ReducedTechniques />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
