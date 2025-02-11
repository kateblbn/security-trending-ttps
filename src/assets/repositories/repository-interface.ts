import { TrendingTechnique, MitreTactic, BaselineTechnique } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
}
export interface IRepository {
  getBaselineTechniques(): Promise<BaselineTechnique[]>;
}
export interface IRepository {
  getTrendingTechniques(): Promise<TrendingTechnique[]>;
}
