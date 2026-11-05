/**
 * CodeFest '26 Organizing Committee
 * Source: [CODEFEST] Committee Details sheet + Proposal UTP CodeFest'26 (org chart).
 * Photos live in /public/committee/<photo>.jpg (360×480 portrait crops).
 * Leave `photo` empty to show an initials avatar instead.
 */

export type Member = { name: string; role: string; photo?: string };
export type CommitteeGroup = { id: string; label: string; members: Member[] };

export const advisors: Member[] = [
  { name: "Tham Qi Lien", role: "Student Advisor", photo: "tham-qi-lien" },
];

export const highCommittee: Member[] = [
  { name: "Kelvin Law Yun Hong", role: "Project Director", photo: "kelvin-law" },
  { name: "Muhammad Akmal Rafiuddin bin Mohd Rizal", role: "Assistant Project Director", photo: "akmal-rafiuddin" },
  { name: "Chen Va Liant", role: "Secretary", photo: "chen-va-liant" },
  { name: "Geoffrey Lee Jin Yau", role: "Vice Secretary", photo: "geoffrey-lee" },
  { name: "Nicholas Ling Bing Zhi", role: "Treasurer", photo: "nicholas-ling" },
];

const HOD = "Head of Department";
const AHOD = "Assistant Head of Department";
const MEMBER = "Committee Member";

export const departments: CommitteeGroup[] = [
  {
    id: "tech",
    label: "Technical & Adjudication",
    members: [
      { name: "Shaene L Kesh", role: HOD, photo: "shaene-kesh" },
      { name: "Iman Najihah binti Zainol Azhar", role: AHOD, photo: "iman-najihah" },
      { name: "Maisha Raiyena Mahiru", role: MEMBER, photo: "maisha-mahiru" },
      { name: "Qurratu Nur Fayyadhah binti Ahmad Mawaridi", role: MEMBER, photo: "qurratu" },
      { name: "Muhammad Faris bin Alfian", role: MEMBER, photo: "faris-alfian" },
    ],
  },
  {
    id: "cnp",
    label: "Ceremony & Protocol",
    members: [
      { name: "Khor Wei Fung", role: HOD, photo: "khor-wei-fung" },
      { name: "Eng Jin Xuan", role: AHOD, photo: "eng-jin-xuan" },
      { name: "Janarthen A/L Maniyarasu", role: MEMBER, photo: "janarthen" },
      { name: "Hareedev A/L Mahendran", role: MEMBER, photo: "hareedev" },
      { name: "Dahlia binti Mohd Nazari", role: MEMBER, photo: "dahlia" },
    ],
  },
  {
    id: "logistics",
    label: "Logistics",
    members: [
      { name: "Nor Fatin Zulaikha binti Shahrizal", role: HOD, photo: "nor-fatin" },
      { name: "Jaydern Seling Jalong", role: AHOD, photo: "jaydern-seling" },
      { name: "Nik Nurqistina binti Mohammad Izani", role: MEMBER, photo: "nik-nurqistina" },
      { name: "Puteri Nurin Syahirah binti Mahazan", role: MEMBER, photo: "puteri-nurin" },
      { name: "Faiq Nuruddin bin Abdul Ajim", role: MEMBER, photo: "faiq-nuruddin" },
    ],
  },
  {
    id: "media",
    label: "Media & Promotion",
    members: [
      { name: "Ong Kai Xin", role: HOD, photo: "ong-kai-xin" },
      { name: "Muhammad Faris Najmi bin Roslan", role: AHOD, photo: "faris-najmi" },
      { name: "Isyraf Adli bin Rizal", role: MEMBER, photo: "isyraf-adli" },
      { name: "Ananda Adiputra", role: MEMBER, photo: "ananda-adiputra" },
      { name: "Kee Loke Ying", role: MEMBER, photo: "kee-loke-ying" },
      { name: "Estherina Ong", role: MEMBER, photo: "estherina-ong" },
    ],
  },
  {
    id: "pr",
    label: "Public Relations",
    members: [
      { name: "Dzikra Ahmad Rizaldi Nurfadillah", role: HOD, photo: "dzikra" },
      { name: "Daryl Gabriel Kouju", role: AHOD, photo: "daryl-kouju" },
      { name: "Evelyn Teng Wen Xuan", role: MEMBER, photo: "evelyn-teng" },
      { name: "Nurdarwina Safiah binti Aswadimanor", role: MEMBER, photo: "nurdarwina" },
      { name: "Alya Natasha binti Zahruddin", role: MEMBER, photo: "alya-natasha" },
    ],
  },
  {
    id: "sponsorship",
    label: "Sponsorship",
    members: [
      { name: "Isaac Lok Cheng-Jie", role: HOD, photo: "isaac-lok" },
      { name: "Jovianne Chan Yieng Chi", role: AHOD, photo: "jovianne-chan" },
      { name: "Muhammad Aqil bin Muhamad Amran", role: MEMBER, photo: "aqil-amran" },
      { name: "Shanchanaa Subramaniam", role: MEMBER, photo: "shanchanaa" },
      { name: "Nik Muhammad Aqil bin Nik Salimi", role: MEMBER, photo: "nik-aqil" },
      { name: "Nur Aqilah binti Roslan", role: MEMBER, photo: "nur-aqilah" },
      { name: "Aleesya Azhariyah binti Azhar", role: MEMBER, photo: "aleesya" },
      { name: "Danish Darwisy bin Ahmad Adzhar", role: MEMBER, photo: "danish-darwisy" },
    ],
  },
];
