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
    tacticKeys: "credential-access",
  },
  {
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1564.001",
    name: "Hidden Files and Directories",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence",
  },
  {
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access",
  },
  {
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1561",
    name: "Disk Wipe",
    tacticKeys: "impact",
  },
  {
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact",
  },
  {
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access",
  },
  {
    id: "T1098",
    name: "Account Manipulation",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1550.002",
    name: "Pass the Hash",
    tacticKeys: "defense-evasion, lateral-movement",
  },
  {
    id: "T1222.002",
    name: "Linux and Mac File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },

  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1656",
    name: "Impersonation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.002",
    name: "Create Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.003",
    name: "Delete Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1111",
    name: "Multi-Factor Authentication Interception",
    tacticKeys: "credential-access",
  },
  {
    id: "T1621",
    name: "Multi-Factor Authentication Request Generation",
    tacticKeys: "credential-access",
  },
  {
    id: "T1588.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003.003",
    name: "NTDS",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.006",
    name: "DCSync",
    tacticKeys: "credential-access",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1598.004",
    name: "Spearphishing Voice",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1001",
  //   name: "Data Obfuscation",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1070.004",
  //   name: "File Deletion",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1543.003",
  //   name: "Windows Service",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1572",
  //   name: "Protocol Tunneling",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.004",
  //   name: "DNS",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1018",
  //   name: "Remote System Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1584",
  //   name: "Compromise Infrastructure",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1546.008",
  //   name: "Accessibility Features",
  //   tacticKeys: "privilege-escalation, persistence",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1550.002",
  //   name: "Pass the Hash",
  //   tacticKeys: "defense-evasion, lateral-movement",
  // },
  // {
  //   id: "T1222.002",
  //   name: "Linux and Mac File and Directory Permissions Modification",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },

  // {
  //   id: "T1591.004",
  //   name: "Identify Roles",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1656",
  //   name: "Impersonation",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.002",
  //   name: "Create Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.003",
  //   name: "Delete Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1111",
  //   name: "Multi-Factor Authentication Interception",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1621",
  //   name: "Multi-Factor Authentication Request Generation",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1588.001",
  //   name: "Malware",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003.003",
  //   name: "NTDS",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1003.006",
  //   name: "DCSync",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1069.002",
  //   name: "Domain Groups",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1598.004",
  //   name: "Spearphishing Voice",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1090",
  //   name: "Proxy",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1001",
  //   name: "Data Obfuscation",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1070.004",
  //   name: "File Deletion",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1543.003",
  //   name: "Windows Service",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1572",
  //   name: "Protocol Tunneling",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.004",
  //   name: "DNS",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1018",
  //   name: "Remote System Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1584",
  //   name: "Compromise Infrastructure",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1546.008",
  //   name: "Accessibility Features",
  //   tacticKeys: "privilege-escalation, persistence",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1550.002",
  //   name: "Pass the Hash",
  //   tacticKeys: "defense-evasion, lateral-movement",
  // },
  // {
  //   id: "T1222.002",
  //   name: "Linux and Mac File and Directory Permissions Modification",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },

  // {
  //   id: "T1591.004",
  //   name: "Identify Roles",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1656",
  //   name: "Impersonation",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.002",
  //   name: "Create Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.003",
  //   name: "Delete Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1111",
  //   name: "Multi-Factor Authentication Interception",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1621",
  //   name: "Multi-Factor Authentication Request Generation",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1588.001",
  //   name: "Malware",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003.003",
  //   name: "NTDS",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1003.006",
  //   name: "DCSync",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1069.002",
  //   name: "Domain Groups",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1598.004",
  //   name: "Spearphishing Voice",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1090",
  //   name: "Proxy",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1550.002",
    name: "Pass the Hash",
    tacticKeys: "defense-evasion, lateral-movement",
  },
  {
    id: "T1222.002",
    name: "Linux and Mac File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },

  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1656",
    name: "Impersonation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.002",
    name: "Create Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.003",
    name: "Delete Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1111",
    name: "Multi-Factor Authentication Interception",
    tacticKeys: "credential-access",
  },
  {
    id: "T1621",
    name: "Multi-Factor Authentication Request Generation",
    tacticKeys: "credential-access",
  },
  {
    id: "T1588.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003.003",
    name: "NTDS",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.006",
    name: "DCSync",
    tacticKeys: "credential-access",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1598.004",
    name: "Spearphishing Voice",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1597.002",
    name: "Purchase Technical Data",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1593.003",
    name: "Code Repositories",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access",
  },
  {
    id: "T1552.008",
    name: "Chat Messages",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.004",
    name: "Cloud Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1583.006",
    name: "Web Services",
    tacticKeys: "resource-development",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1059.007",
    name: "JavaScript",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1203",
    name: "Exploitation for Client Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1210",
    name: "Exploitation of Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1559.001",
    name: "Component Object Model",
    tacticKeys: "execution",
  },
  {
    id: "T1559.002",
    name: "Dynamic Data Exchange",
    tacticKeys: "execution",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
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
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
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
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
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
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
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
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
];

const groupedByTactics = dataOfTechniques.reduce((acc, tech) => {
  const splitedTechniques = tech.tacticKeys.split(", ").map((e) => e.trim());
  splitedTechniques.forEach((tactic) => {
    if (!acc[tactic]) {
      acc[tactic] = [];
    } else {
      acc[tactic].push(splitedTechniques);
    }
    splitedTechniques.map((e) => e);
  });

  return acc;
}, {});

export class TestRepository implements IRepository {
  async getTechniques(): Promise<MitreTechnique[]> {
    return dataOfTechniques;
  }
  async getTactics(): Promise<MitreTactic[]> {
    return dataOfTactics;
  }
}
