export type MitreTactic = {
  number: number;
  tactic: string;
  id: string;
  tacticsKey: string;
};

export type TrendingTechnique = {
  // [x: string]: any;
  techniqueId: string;
  categoryName: string,
  taGroup: string,
  techniqueName: string,
  techniqueTactics: string,
  otherNames: string


};
export type BaselineTechnique = {
  [x: string]: any;
  name: string;
  id: string;
  tacticKeys: string;
};
