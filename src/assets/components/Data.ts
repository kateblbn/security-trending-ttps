export type MitreTactic = {
  number: number;
  tactic: string;
  id: string;
  tacticsKey: string;
};
export type BaselineTechnique = {
  "@odata.etag": string;
  // ActorNames: string[]
  technique: {
    esa_mitreid: string;
    esa_name: string;
    esa_tactics: string;
  };
  taGroup: {
    esa_name: string;
    esa_othernames: string
    category: {
      esa_name: string;
    };
  };
}

export type TrendingTechnique = {
  esa_eventdate: Date,
  esa_articletitle: string,
  esa_articlesummary: string,
  esa_articlelink: string,
  esa_target: string
} & BaselineTechnique



export function mapNestedKeys<T extends Record<string, any>>(obj: Record<string, any>, typeRef: T): T {
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
    if (getNestedType(typeRef, parts) === Date && typeof value === "string") {
      current[lastKey] = new Date(value);
    } else {
      current[lastKey] = value;
    }
  }

  return result;
}

// Helper function to get nested type from type reference
function getNestedType<T>(typeRef: T, path: string[]): any {
  return path.reduce((acc, key) => acc?.[key], typeRef);
}

// export type BaselineTechnique = {
//   [x: string]: any;
//   name: string;
//   id: string;
//   tacticKeys: string;
// };
