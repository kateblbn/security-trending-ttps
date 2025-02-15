import {
  BaselineTechnique,
  IsoControl,
  IsoControlApiModel,
  mapNestedKeys,
  MaturityModelControlApiModel,
  MitreTactic,
  MitreTechnique,
  NistControl,
  NistControlApiModel,
  TrendingTechnique,
} from "../components/Data";
import { IRepository } from "./repository-interface";

export class XrmRepository implements IRepository {
  private webApi: Xrm.WebApi;

  constructor(xrm: Xrm.XrmStatic) {
    this.webApi = xrm.WebApi;
  }

  async getMaturityModelControls(
    mitreGuid: string
  ): Promise<MaturityModelControlApiModel[]> {
    const fetchXml = `
      <fetch>
        <entity name='esa_nisttomitre'>
          <filter>
            <condition attribute='esa_mitreid' operator='eq' value='${mitreGuid}' />
          </filter>
          <link-entity name='esa_nist80053' from='esa_nist80053id' to='esa_nistcontrolid' intersect='true'>          
            <link-entity name='esa_isotonist' from='esa_nistcontrolid' to='esa_nist80053id' intersect='true'>
              <link-entity name='esa_iso270012022' from='esa_iso270012022id' to='esa_isocontrolid' intersect='true'>
                <link-entity name='esa_mmtoiso' to='esa_iso270012022id' from='esa_isocontrolid' intersect='true'>
                  <link-entity name='esa_telenormaturitymodel' from='esa_telenormaturitymodelid' to='esa_mmcontrolid' alias='mmControl' >
                    <attribute name='esa_telenormaturitymodelid' />
                    <attribute name='esa_controlid' />
                    <attribute name='esa_controlname' />
                    <attribute name='esa_chapter' />
                    <attribute name='esa_index' />
                  </link-entity>
                </link-entity>
              </link-entity>
            </link-entity>
          </link-entity>
          </entity>
      </fetch>
    `;
    const res = await this.webApi.retrieveMultipleRecords(
      "esa_nisttomitre",
      `?fetchXml=${encodeURIComponent(fetchXml)}`
    );

    return res.entities.map((x) => mapNestedKeys(x));
  }
  async getIsoControls(mitreGuid: string): Promise<IsoControlApiModel[]> {
    const fetchXml = `
      <fetch>
        <entity name='esa_nisttomitre'>
          <filter>
            <condition attribute='esa_mitreid' operator='eq' value='${mitreGuid}' />
          </filter>
          <link-entity name='esa_nist80053' from='esa_nist80053id' to='esa_nistcontrolid' intersect='true'>          
            <link-entity name='esa_isotonist' from='esa_nistcontrolid' to='esa_nist80053id' intersect='true'>
              <link-entity name='esa_iso270012022' from='esa_iso270012022id' to='esa_isocontrolid' alias='isoControl'>
                <attribute name='esa_iso270012022id' />
                <attribute name='esa_controlid' />
                <attribute name='esa_controlname' />
                <attribute name='esa_domain' />
              </link-entity>
            </link-entity>
          </link-entity>
          </entity>
      </fetch>
    `;
    const res = await this.webApi.retrieveMultipleRecords(
      "esa_nisttomitre",
      `?fetchXml=${encodeURIComponent(fetchXml)}`
    );

    return res.entities.map((x) => mapNestedKeys(x));
  }

  async getNistControls(mitreGuid: string): Promise<NistControlApiModel[]> {
    const fetchXml = `
      <fetch>
      <entity name='esa_nisttomitre'>
        <filter>
          <condition attribute='esa_mitreid' operator='eq' value='${mitreGuid}' />
        </filter>
        <link-entity name='esa_nist80053' from='esa_nist80053id' to='esa_nistcontrolid' alias='nistControl'>
          <attribute name='esa_controlid' />
          <attribute name='esa_controlname' />
          <attribute name='esa_nist80053id' />
          </link-entity>
        </entity>
      </fetch>
    `;
    const res = await this.webApi.retrieveMultipleRecords(
      "esa_nisttomitre",
      `?fetchXml=${encodeURIComponent(fetchXml)}`
    );

    return res.entities.map((x) => mapNestedKeys(x));
  }

  async getMitreTechnique(guid: string): Promise<MitreTechnique> {
    const options =
      "?$select=esa_mitreid, esa_name, esa_description, esa_deprecated, esa_url, esa_datasources, esa_tactics, esa_platforms";

    const res = await this.webApi.retrieveRecord(
      "esa_mitreenterprise",
      guid,
      options
    );

    return mapNestedKeys(res);
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

  async getBaselineTechniques(): Promise<BaselineTechnique[]> {
    const fetchXml: string = `
    <fetch>
	    <entity name='esa_threatactorttps'>
        <link-entity name="esa_mitreenterprise" from="esa_mitreenterpriseid" to="esa_mitreid" alias="technique">
          <attribute name="esa_mitreenterpriseid" />
          <attribute name="esa_mitreid" />
          <attribute name="esa_name" />
          <attribute name="esa_tactics" />
        </link-entity>
        <link-entity name="esa_threatactorgroup" from="esa_threatactorgroupid" to="esa_tagroup" alias="taGroup">
            <attribute name="esa_name" />
            <attribute name="esa_othernames" />
            <link-entity name="esa_threatactorcategory" from="esa_threatactorcategoryid" to="esa_threatactorcategory" alias="taGroup.category">
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

    return resTechniques.entities.map((x) => mapNestedKeys(x));
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
         <attribute name="esa_eventdate" />
         <attribute name="esa_articletitle" />
         <attribute name="esa_articlesummary" />
         <attribute name="esa_articlelink" />
         <attribute name="esa_target" />
        <link-entity name="esa_mitreenterprise" from="esa_mitreenterpriseid" to="esa_ttp" alias="technique">
          <attribute name="esa_mitreenterpriseid" />
          <attribute name="esa_mitreid" />
          <attribute name="esa_name" />
          <attribute name="esa_tactics" />
        </link-entity>
        <link-entity name="esa_threatactorgroup" from="esa_threatactorgroupid" to="esa_tagroup" alias="taGroup">
            <attribute name="esa_name" />
            <attribute name="esa_othernames" />
            <link-entity name="esa_threatactorcategory" from="esa_threatactorcategoryid" to="esa_threatactorcategory" alias="taGroup.category">
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
    return res.entities.map((x) => mapNestedKeys(x, ["esa_eventdate"]));
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
