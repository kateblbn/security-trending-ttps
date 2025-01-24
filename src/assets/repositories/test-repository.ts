import { MitreTechnique } from "../components/Data";
import { IRepository } from "./repository-interface";

const tactics = ["defense-evasion", "privilege-escalation"];

const tacticBuckets = new Map<string, MitreTechnique[]>();

for (let tactic of tactics) {
  tacticBuckets.set(tactic, []);
}

const data: MitreTechnique[] = [
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
];

for (let threatActorTechnique of data) {
  // console.log(threatActorTechnique.tacticKeys.split(", "));
  const tactics = threatActorTechnique.tacticKeys.split(", ");
  console.log(tactics);

  for (let resTactic of tactics) {
    // console.log(resTactic);

    const result = console.log(tacticBuckets.set(resTactic, []));
  }
}

console.log(tacticBuckets.entries());

// console.log(data);
const result = Object.groupBy(data, ({ tacticKeys }) => tacticKeys);

// console.log(result["defense-evasion, privilege-escalation"]);

export class TestRepository implements IRepository {
  async getTechniques(): Promise<MitreTechnique[]> {
    return data;
  }
}
// export class TestRepository implements IRepository {
//   async getTechniques(): Promise<Mitre[]>
//   return data
// }

// const data: MitreTechnique[] = [
//   {
//     number: 1,
//     tactic: "Reconnaissance",
//     id: "TA0043",
//     subTechnique: {
//         name: "aa",
//         id: "abc"
//     }
//   },
//   {
//     number: 2,
//     tactic: "Resource Development",
//     id: "TA0042",
//   },
//   {
//     number: 3,
//     tactic: "Initial Access",
//     id: "TA0001",
//   },
//   {
//     number: 4,
//     tactic: "Execution",
//     id: "TA0002",
//   },
//   {
//     number: 5,
//     tactic: "Persistence",
//     id: "TA0003",
//   },
//   {
//     number: 6,
//     tactic: "Privilege Escalation",
//     id: "TA0004",
//   },
//   {
//     number: 7,
//     tactic: "Defense Evasion",
//     id: "TA0005",
//   },
//   {
//     number: 8,
//     tactic: "Credential Access",
//     id: "TA0006",
//   },
//   {
//     number: 9,
//     tactic: "Discovery",
//     id: "TA0007",
//   },
//   {
//     number: 10,
//     tactic: "Lateral Movement",
//     id: "TA0008",
//   },
//   {
//     number: 11,
//     tactic: "Collection",
//     id: "TA0009",
//   },
//   {
//     number: 12,
//     tactic: "Command and Control",
//     id: "TA0011",
//   },
//   {
//     number: 13,
//     tactic: "Exfiltration",
//     id: "TA0010",
//   },
//   {
//     number: 14,
//     tactic: "Impact",
//     id: "TA0040",
//   },
// ];
