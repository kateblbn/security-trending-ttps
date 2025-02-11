import {  MitreTactic, TrendingTechnique } from "../components/Data";
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

  async getBaselineTechniques(): Promise<TrendingTechnique[]> {
    const fetchXml: string = `
    <fetch>
	    <entity name='esa_threatactorttps'>
        <link-entity name="esa_mitreenterprise" from="esa_mitreenterpriseid" to="esa_mitreid" alias="technique">
          <attribute name="esa_mitreid" />
          <attribute name="esa_name" />
          <attribute name="esa_tactics" />
        </link-entity>
        <link-entity name="esa_threatactorgroup" from="esa_threatactorgroupid" to="esa_tagroup" alias="taGroup">
            <attribute name="esa_name" />
            <attribute name="esa_othernames" />
            <link-entity name="esa_threatactorcategory" from="esa_threatactorcategoryid" to="esa_threatactorcategory" alias="category">
            <attribute name="esa_name" />
            </link-entity>
          </link-entity>
  	</entity>
  </fetch>`;

    const resTechniques: Xrm.RetrieveMultipleResult =
      await this.webApi.retrieveMultipleRecords(
        "esa_threatactorttps",
        `?fetchXml=${encodeURIComponent(fetchXml)}`
      );

      return resTechniques.entities.map((x) => ({
        techniqueId: x["technique.esa_mitreid"] as string,
        categoryName: x["category.esa_name"],
        taGroup: x["taGroup.esa_name"],
        techniqueName: x["technique.esa_name"],
        techniqueTactics: x["technique.esa_tactics"],
        otherNames: x["taGroup.esa_othernames"],
      }));
    }
  // {
  //   "@odata.etag": "W/\"16473250\"",
  //   "esa_dynamicthreatactorttpsid": "7cf0f591-ed70-ef11-a670-000d3a664cf5",
  //   "technique.esa_mitreid": "T1204",
  //   "technique.esa_name": "User Execution",
  //   "technique.esa_tactics": "execution",
  //   "taGroup.esa_name": "Kimsuky (NK)",
  //   "taGroup.esa_othernames": "Velvet Chollima  (CrowdStrike)",
  //   "category.esa_name": "Nation-State (Others)"
  // },
  
  async getTrendingTechniques(): Promise<TrendingTechnique[]> {
    const fetchXml: string = `
      <fetch>
        <entity name="esa_dynamicthreatactorttps">
        <link-entity name="esa_mitreenterprise" from="esa_mitreenterpriseid" to="esa_ttp" alias="technique">
          <attribute name="esa_mitreid" />
          <attribute name="esa_name" />
          <attribute name="esa_tactics" />
        </link-entity>
        <link-entity name="esa_threatactorgroup" from="esa_threatactorgroupid" to="esa_tagroup" alias="taGroup">
            <attribute name="esa_name" />
            <attribute name="esa_othernames" />
            <link-entity name="esa_threatactorcategory" from="esa_threatactorcategoryid" to="esa_threatactorcategory" alias="category">
            <attribute name="esa_name" />
            </link-entity>
          </link-entity>
        </entity>
      </fetch>
    `;

    const res: Xrm.RetrieveMultipleResult =
      await this.webApi.retrieveMultipleRecords(
        "esa_dynamicthreatactorttps",
        `?fetchXml=${encodeURIComponent(fetchXml)}`
      );
    return res.entities.map((x) => ({
      techniqueId: x["technique.esa_mitreid"] as string,
      categoryName: x["category.esa_name"],
      taGroup: x["taGroup.esa_name"],
      techniqueName: x["technique.esa_name"],
      techniqueTactics: x["technique.esa_tactics"],
      otherNames: x["taGroup.esa_othernames"],
    }));
  }
}

// getTechniquesMatrixTrending and getTechniquesMatrixTrending = give more data from getFilteredCategoryGroup like

/* <link-entity name="esa_threatactorgroup" from="esa_threatactorgroupid" to="esa_tagroup" alias="taGroup">
          <attribute name="esa_name" />
					<attribute name="esa_othernames" />
          <link-entity name="esa_threatactorcategory" from="esa_threatactorcategoryid" to="esa_threatactorcategory" alias="category">
          <attribute name="esa_name" />
          </link-entity>
        </link-entity>
        
        */
