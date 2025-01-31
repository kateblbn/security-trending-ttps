export type MitreTactic = {
  number: number;
  tactic: string;
  id: string;
  tacticsKey: string;
};

export type MitreTechnique = {
  [x: string]: any;
  name: string;
  id: string;
  tacticKeys: string;
};
export type GroupCategoriesFilter = {
  [x: string]: any,
  categoryName: string,
  taGroup: string,
  techniqueName: string,
  techniqueTactic: string,
  otherNames: String

}