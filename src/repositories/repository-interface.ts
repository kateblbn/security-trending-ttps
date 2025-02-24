import {
  TrendingTechnique,
  MitreTactic,
  BaselineTechnique,
  MitreTechnique,
  NistControlApiModel,
  MaturityModelControlApiModel,
  IsoControlApiModel,
  MitreMainTechnique,
} from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
  getBaselineTechniques(): Promise<BaselineTechnique[]>;
  getTrendingTechniques(): Promise<TrendingTechnique[]>;
  getMitreTechnique(guid: string): Promise<MitreTechnique>;
  getMainMitreTechniques(): Promise<MitreMainTechnique[]>;
  getNistControls(mitreGuid: string): Promise<NistControlApiModel[]>;
  getIsoControls(mitreGuid: string): Promise<IsoControlApiModel[]>;
  getMaturityModelControls(
    mitreGuid: string
  ): Promise<MaturityModelControlApiModel[]>;
}
