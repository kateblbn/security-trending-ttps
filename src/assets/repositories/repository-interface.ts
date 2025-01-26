import { MitreTechnique, MitreTactic } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
}
export interface IRepository {
  getTechniques(): Promise<MitreTechnique[]>;
}
