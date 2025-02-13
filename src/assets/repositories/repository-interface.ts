import { TrendingTechnique, MitreTactic, BaselineTechnique, MitreTechnique, NistControl, NistControlApiModel, IsoControl } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
  getBaselineTechniques(): Promise<BaselineTechnique[]>;
  getTrendingTechniques(): Promise<TrendingTechnique[]>;
  getMitreTechnique(guid:string): Promise<MitreTechnique> 
  getNistControls(mitreGuid:string): Promise<NistControlApiModel[]>
  getIsoControls(mitreGuid:string): Promise<IsoControl[]>
}
