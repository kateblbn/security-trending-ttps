import { MitreTechnique, MitreTactic } from "../components/Data";
import { IRepository } from "./repository-interface";

const dataOfTactics: MitreTactic[] = [
  
  {
    id: "TA0006",
    tactic: "Credential Access",
    number: 8,
    tacticsKey: "credential-access",
  },
  {
    id: "TA0004",
    tactic: "Privilege Escalation",
    number: 6,
    tacticsKey: "privilege-escalation",
  },
  {
    id: "TA0003",
    tactic: "Persistence",
    number: 5,
    tacticsKey: "persistence",
  },
  {
    id: "TA0009",
    tactic: "Collection",
    number: 11,
    tacticsKey: "collection",
  },
  {
    id: "TA0002",
    tactic: "Execution",
    number: 4,
    tacticsKey: "execution",
    },
    {
      id: "TA0042",
      tactic: "Resource Development",
      number: 2,
      tacticsKey: "resource-development",
    },
    {
      id: "TA0007",
      tactic: "Discovery",
      number: 9,
      tacticsKey: "discovery",
    },
    {
      id: "TA0043",
      tactic: "Reconnaissance",
      number: 1,
      tacticsKey: "reconnaissance",
    },
    {
      id: "TA0005",
      tactic: "Defense Evasion",
      number: 7,
      tacticsKey: "defense-evasion",
    },
    {
      id: "TA0010",
      tactic: "Exfiltration",
      number: 13,
      tacticsKey: "exfiltration",
    },
    {
      id: "TA0001",
      tactic: "Initial Access",
      number: 3,
      tacticsKey: "initial-access",
    },
    {
      id: "TA0008",
      tactic: "Lateral Movement",
      number: 10,
      tacticsKey: "lateral-movement",
    },
    {
      id: "TA0040",
      tactic: "Impact",
      number: 14,
      tacticsKey: "impact",
    },
    {
      id: "TA0011",
      tactic: "Command and Control",
      number: 12,
      tacticsKey: "command-and-control",
    },
  ];
  
  
  
  // const tactics = ["defense-evasion", "privilege-escalation"];
  
  const tacticBuckets = new Map<string, MitreTechnique[]>();
  
  // for (let tactic of tactics) {
  //   tacticBuckets.set(tactic, []);
  // }

  
const dataOfTechniques: MitreTechnique[] = [
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
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access"
  },
  {
    id: "T1564.001",
    name: "Hidden Files and Directories",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection"
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution"
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access"
  },
  {
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    id: "T1561",
    name: "Disk Wipe",
    tacticKeys: "impact"
  },
  {
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact"
  },
  {
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    id: "T1098",
    name: "Account Manipulation",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance"
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution"
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration"
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development"
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development"
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access"
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance"
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery"
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery"
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance"
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution"
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development"
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access"
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection"
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access"
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery"
  },
  {
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence"
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1550.002",
    name: "Pass the Hash",
    tacticKeys: "defense-evasion, lateral-movement"
  },
  {
    id: "T1222.002",
    name: "Linux and Mac File and Directory Permissions Modification",
    tacticKeys: "defense-evasion"
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection"
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  }
];




const groupedByTactics = dataOfTechniques.reduce( (acc, tech) => {
const splitedTechniques = tech.tacticKeys.split(', ').map(e => e.trim())
splitedTechniques.forEach(tactic => {
  if(!acc[tactic]) {
    acc[tactic] = [];
  } else {
acc[tactic].push(splitedTechniques)
  }
  splitedTechniques.map( e => e)
})

return acc
}, {})
// console.log(groupedByTactics);

// for (let threatActorTechnique of dataOfTechniques) {
//   // console.log(threatActorTechnique.tacticKeys.split(", "));
//   const tactics = threatActorTechnique.tacticKeys.split(", ").concat();
//   console.log(tactics);

//   for (let resTactic of tactics) {
//     // console.log(resTactic);

//     const result = tacticBuckets.set(resTactic, tactics);
//     // console.log(result);
//     // console.log(tactics);
//   }
//   console.log(tacticBuckets);
// }

// console.log(data);
// const techniquesGroup = Object.groupBy(dataOfTechniques, ({ tacticKeys }) => tacticKeys);
// console.log(dataOfTechniques.)


// .reduce( (acc, e) => {
//   if(acc[e] == e) {
//      acc[e].push(tacticBuckets)
//   } else {
//     acc[e] = [e]
//   }
//   return acc

// }));



// console.log(result["defense-evasion, privilege-escalation"]);

export class TestRepository implements IRepository {
  async getTechniques(): Promise<MitreTechnique[]> {
    return dataOfTechniques;
  }
  async getTactics(): Promise<MitreTactic[]> {
    return dataOfTactics;
  }
}