import { MitreTechnique, MitreTactic } from "../components/Data";
import { IRepository } from "./repository-interface";

export class XrmRepository implements IRepository {
  private webApi: Xrm.WebApi;

  constructor(xrm: Xrm.XrmStatic) {
    this.webApi = xrm.WebApi;
  }
  async getTactics(): Promise<MitreTactic[]> {
    const fetchXml: string = `
      <fetch>
        <entity name='esa_mitretactics'>
          <attribute name='esa_id' />
          <attribute name='esa_name' />
          <attribute name='esa_number' />
          <attribute name='esa_keyname' /> 
        </entity>
      </fetch>`;

    const res: Xrm.RetrieveMultipleResult =
      await this.webApi.retrieveMultipleRecords(
        "esa_mitretactics",
        `?fetchXml=${encodeURIComponent(fetchXml)}`
      );

    return res.entities.map((x) => ({
      id: x["esa_id"] as string,
      tactic: x["esa_name"] as string,
      number: x["esa_number"] as number,
      tacticsKey: x["esa_keyname"] as string,
    }));
  }

  async getTechniques(): Promise<MitreTechnique[]> {
    const fetchXml: string = `
    <fetch>
	    <entity name='esa_threatactorttps'>
        <link-entity name='esa_mitreenterprise' from='esa_mitreenterpriseid' to='esa_mitreid' alias='technique'>
        <attribute name='esa_mitreid' />
        <attribute name='esa_name' />
  			<attribute name='esa_tactics' />
	  	</link-entity>
  	</entity>
  </fetch>`;

    const resTechniques: Xrm.RetrieveMultipleResult =
      await this.webApi.retrieveMultipleRecords(
        "esa_threatactorttps",
        `?fetchXml=${encodeURIComponent(fetchXml)}`
      );

    return resTechniques.entities.map((x) => ({
      id: x["technique.esa_mitreid"] as string,
      name: x["technique.esa_name"] as string,
      tacticKeys: x["technique.esa_tactics"] as string,
    }));
  }
}
