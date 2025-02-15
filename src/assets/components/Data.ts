export type MitreTactic = {
  number: number;
  tactic: string;
  id: string;
  tacticsKey: string;
};

export type MitreMainTechnique = {
  esa_mitreid: string;
  esa_name: string;
};

export type MitreTechnique = {
  "@odata.etag": string;
  esa_deprecated: boolean;
  esa_description: string;
  esa_url: string;
  esa_datasources: string;
  esa_tactics: string;
  esa_name: string;
  esa_mitreenterpriseid: string;
  esa_platforms: string;
  esa_mitreid: string;
};

export type BaselineTechnique = {
  "@odata.etag": string;
  technique: {
    esa_mitreenterpriseid: string;
    esa_mitreid: string;
    esa_name: string;
    esa_tactics: string;
    esa_issubtechnique: boolean;
    esa_deprecated: boolean;
  };
  taGroup: {
    esa_name: string;
    esa_othernames: string;
    category: {
      esa_name: string;
    };
  };
};

export type TrendingTechnique = {
  esa_eventdate: Date;
  esa_articletitle: string;
  esa_articlesummary: string;
  esa_articlelink: string;
  esa_target: string;
} & BaselineTechnique;

export type MaturityModelControl = {
  "@odata.etag": string;
  esa_telenormaturitymodelid: string;
  esa_controlid: string;
  esa_controlname: string;
  esa_chapter: string;
  esa_index: string;
};

export type MaturityModelControlApiModel = {
  mmControl: MaturityModelControl;
};

export type IsoControl = {
  "@odata.etag": string;
  esa_iso270012022id: string;
  esa_controlid: string;
  esa_controlname: string;
  esa_domain: string;
};

export type IsoControlApiModel = {
  isoControl: IsoControl;
};

export type NistControl = {
  "@odata.etag": string;
  esa_nist80053id: string;
  esa_controlid: string;
  esa_controlname: string;
};

export type NistControlApiModel = {
  nistControl: NistControl;
};

export function mapNestedKeys<T extends Record<string, any>>(
  obj: Record<string, any>,
  dateKeys?: string[]
): T {
  const result: any = {};

  for (const key in obj) {
    const value = obj[key];
    const parts = key.split(".");
    let current: any = result;

    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) {
        current[parts[i]] = {}; // Create nested object if missing
      }
      current = current[parts[i]];
    }

    const lastKey = parts[parts.length - 1];

    // If the corresponding type in typeRef is Date, convert value to Date
    if (dateKeys && dateKeys.includes(key)) {
      current[lastKey] = new Date(value);
    } else {
      current[lastKey] = value;
    }
  }

  return result;
}

// export type BaselineTechnique = {
//   [x: string]: any;
//   name: string;
//   id: string;
//   tacticKeys: string;
// };
