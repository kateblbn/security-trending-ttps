import { BaselineTechnique, MitreMainTechnique } from "./components/Data";
import { ActorNames } from "./components/FilterBar";

// filter by actor name
export function getFilteredTechniquesByActors(
  selectedActors: string[],
  filteredTechniques: BaselineTechnique[]
) {
  if (selectedActors.length !== 0) {
    filteredTechniques = filteredTechniques.filter((x) =>
      selectedActors.some((actor) => actor === x.taGroup.esa_name)
    );
  }
  return filteredTechniques;
}

// filter by category
export function getFilteredTechniquesByCategories(
  selectedCategories: string[],
  filteredTechniques: BaselineTechnique[]
) {
  if (selectedCategories.length !== 0) {
    return (filteredTechniques = filteredTechniques.filter((x) =>
      selectedCategories.includes(x.taGroup.category.esa_name)
    ));
  }
  return filteredTechniques;
}

// Add parent technique name to subtechniques
export function getParentTechniquesToSubtechniques(
  filteredTechniques: BaselineTechnique[],
  mainTechniques: MitreMainTechnique[]
) {
  filteredTechniques = filteredTechniques.map((tech) => {
    if (tech.technique.esa_issubtechnique) {
      const parentId = tech.technique.esa_mitreid.substring(
        0,
        tech.technique.esa_mitreid.indexOf(".")
      );
      const parent = mainTechniques.find((x) => x.esa_mitreid === parentId);
      const newName = `${parent.esa_name}: ${tech.technique.esa_name}`;
      const techniqueWithNewName = { ...tech.technique, esa_name: newName };
      return { ...tech, technique: techniqueWithNewName };
    }
    return tech;
  });
  return filteredTechniques;
}

/// 3. group filtered techniques by tactic
export function getTacticsReducedWithTechniques(
  filteredTechniques: BaselineTechnique[]
) {
  return filteredTechniques.reduce(
    (acc: Map<string, BaselineTechnique[]>, currentTechnique) => {
      const tactics = currentTechnique.technique.esa_tactics.split(", ");

      for (let tactic of tactics) {
        if (acc.has(tactic)) acc.get(tactic).push(currentTechnique);
        else acc.set(tactic, [currentTechnique]);
      }
      return acc;
    },
    new Map<string, BaselineTechnique[]>()
  );
}

export function getUniqueCategoriesByExistingActor(
  techniques: BaselineTechnique[]
) {
  return techniques.reduce((acc: string[], current) => {
    if (!acc.includes(current.taGroup.category.esa_name))
      acc.push(current.taGroup.category.esa_name);
    return acc;
  }, []);
}

export function getUniqueActorMainNames(
  techniques: BaselineTechnique[],
  selectedCategories: string[]
) {
  return techniques.reduce<ActorNames[]>((acc, current) => {
    const existingActor = acc.find(
      (item) => item.mainName === current.taGroup.esa_name
    );

    // if we already added this actor, we don't want to add it again
    if (existingActor) return acc;

    if (
      selectedCategories.length === 0 ||
      selectedCategories.includes(current.taGroup.category.esa_name)
    ) {
      acc.push({
        mainName: current.taGroup.esa_name,
        otherNames: current.taGroup.esa_othernames,
      });
    }

    return acc;
  }, []);
}
