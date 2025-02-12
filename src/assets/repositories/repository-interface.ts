import { TrendingTechnique, MitreTactic, BaselineTechnique, MitreTechnique } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
  getBaselineTechniques(): Promise<BaselineTechnique[]>;
  getTrendingTechniques(): Promise<TrendingTechnique[]>;
  getMitreTechnique(guid:string): Promise<MitreTechnique> 
}
