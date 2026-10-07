import { OfficerItem, ReportItem } from '../types';

export const COUNCIL_INFO = {
  name: 'College of Teacher Education Council',
  shortName: 'CTEC',
  university: 'Batangas State University',
  universityTagline: 'The National Engineering University',
  campus: 'ARASOF-Nasugbu Campus',
  campusAddress: 'R. Martinez St., Brgy. Bucana, Nasugbu, Batangas, Philippines 4231',
  email: 'ctecouncil.nasugbu@g.batstate-u.edu.ph',
  telephone: '+63 43 416 0350 local 206',
  website: 'http://www.batstate-u.edu.ph',
  classification: 'Socio-Civic / Academic / Service-Oriented (College-Based Student Organization)',
  yearFounded: 2001,
  currentAcademicYear: '2026–2027',
  totalStudentsEnrolled: 1078,
  
  philosophy: `The College of Teacher Education Council (CTEC) conceives the essential nature of individual's potential and competency through productive leadership and learner-centered environment that can commend a way for personal growth, development and capabilities of every individual for sustainable progress that follows the campus and university's administration.`,
  
  vision: `An organization dedicated to supporting the university and community for lifelong learners by engaging them in various exertions to reach their greatest potential and opportunities to excel.`,
  
  mission: `We aim to lead, serve and develop a sense of responsibility where needs of the students are acknowledged, concerted and fulfilled.`,
  
  goals: `The College of Teacher Education Council intends to create aspirational values to develop leaders and students fostering a nature of perseverance, continually learning for improvements and seeking benevolence to help others, and commitment to support the school and society.`,
  
  objectives: [
    'To cultivate a focused ability in every situation, opportunities and deal with the students and teachers in the College of Teacher Education;',
    'To strengthen the dedication and commitment to fulfill the needs of the students by helping them in service and help in the implementation of universities policies, rules and regulations as a vital step as worthy leaders;',
    'To be an inspiration by values through believing others potential and provides resources such as activities, plans and projects to help them valued and cared for;',
    'To make informed decisions through clear communication, accepting guidance and supervision, and open mind to receive valuable information in the Supreme Student Council and other organizations in the university;',
    'To embody assurance for the university and the community that duty and service contribute a mindset driven by purpose and focused on outcomes for the future;',
    'To implement rightful execution leadership skills where any settled rules and plans are equally performed for managing and controlling power; and',
    'To continually seek new opportunities for growth and endeavor to create an organization that truthfully serves its people.'
  ]
};

export const ENROLLMENT_BREAKDOWN = [
  { program: 'Bachelor of Elementary Education (BEEd)', count: 241 },
  { program: 'Bachelor of Physical Education (BPEd)', count: 139 },
  { program: 'BSEd Major in English', count: 219 },
  { program: 'BSEd Major in Filipino', count: 178 },
  { program: 'BSEd Major in Mathematics', count: 86 },
  { program: 'BSEd Major in Sciences', count: 95 },
  { program: 'BSEd Major in Social Studies', count: 120 }
];

export const SUB_ORGANIZATIONS = [
  {
    acronym: 'AIMSS',
    name: 'Alliance on Integrated Mathematics and Sciences Students',
    desc: 'Program-based student organization for Mathematics and Sciences education majors.'
  },
  {
    acronym: 'ALFEM',
    name: 'Academic League of Filipino and English Majors',
    desc: 'Program-based student organization representing language and literature teacher candidates.'
  },
  {
    acronym: 'LEAPS',
    name: 'Leaders of Elementary Aspiring Pedagogues Students',
    desc: 'Program-based student organization catering to Bachelor of Elementary Education students.'
  },
  {
    acronym: 'SPESSS',
    name: 'Society of Physical Education and Social Studies Students',
    desc: 'Program-based student organization representing Physical Education and Social Studies majors.'
  }
];

export const EXECUTIVE_OFFICERS: OfficerItem[] = [
  { name: 'Prince Eljohn L. Ayo', position: 'President', course: 'BSEd Filipino', roleType: 'executive' },
  { name: 'Juji Arah G. Salanguit', position: 'Vice President', course: 'BSEd Sciences', roleType: 'executive' },
  { name: 'Shane Carmelle R. Cabesas', position: 'Secretary', course: 'BSEd Mathematics', roleType: 'executive' },
  { name: 'Ronald F. Rivera Jr.', position: 'Treasurer', course: 'BSEd Mathematics', roleType: 'executive' },
  { name: 'Roland F. Rivera', position: 'Auditor', course: 'BSEd Mathematics', roleType: 'executive' },
  { name: 'Joshua D. Clepez', position: 'Public Information Officer (P.I.O.)', course: 'BPEd', roleType: 'executive' },
  { name: 'Nolien F. Villegas', position: 'Business Manager', course: 'BSEd Mathematics', roleType: 'executive' },
  { name: 'Asst. Prof. Michael John V. Francisco', position: 'Faculty Adviser', course: 'Faculty Member', roleType: 'adviser' }
];

export const COMMITTEES = [
  {
    name: 'Academic and Non-Academic Committee',
    head: 'Jamaica Leslie D. De Los Reyes',
    headCourse: 'BSEd Mathematics',
    members: [
      { name: 'Kenji A. Hernandez', course: 'BSEd Mathematics' },
      { name: 'Nelche L. Sante', course: 'BSEd Social Studies' }
    ],
    duties: 'Organizes academic reviews, peer tutoring programs, and educational development activities for CTE students.'
  },
  {
    name: 'Internal and External Relations Committee',
    head: 'Lester V. Noche',
    headCourse: 'BSEd English',
    members: [
      { name: 'Kirstein Andrew M. Canlas', course: 'BSEd English' },
      { name: 'Kianna Jane R. Aquino', course: 'BSEd Filipino' }
    ],
    duties: 'Manages inter-organization coordination, student communications, and stakeholder partnerships.'
  },
  {
    name: 'Disaster Risk Reduction and Management Committee',
    head: 'Rodimple C. Silipinin',
    headCourse: 'BSEd Social Studies',
    members: [
      { name: 'Jan Gabriel I. Cargado', course: 'BPEd' },
      { name: 'Jhayzon S. Borja', course: 'BSEd Mathematics' },
      { name: 'Alzedric B. De Castro', course: 'BSEd Social Studies' }
    ],
    duties: 'Promotes emergency preparedness, student safety, and proactive campus risk reduction.'
  },
  {
    name: 'Sustainable Development Goals Committee',
    head: 'Kaye Chelle M. Casanova',
    headCourse: 'BPEd',
    members: [
      { name: 'Zabina Rein C. Seña', course: 'BPEd' },
      { name: 'Jemuel A. Diaz', course: 'BPEd' }
    ],
    duties: 'Implements initiatives supporting quality education, environmental sustainability, and health wellness.'
  },
  {
    name: 'Media and Information Technology Committee',
    head: 'Danica G. Bustamante',
    headCourse: 'BSEd Social Studies',
    members: [
      { name: 'Romel L. Alquiza', course: 'BSEd Mathematics' },
      { name: 'Arvin B. Custodio', course: 'BSEd Social Studies' }
    ],
    duties: 'Oversees official council publications, announcements, event documentation, and digital channels.'
  }
];

export const HISTORY_SUMMARY = [
  {
    period: '2001 — Founding Era',
    title: 'Establishment of the Council',
    content: 'The College of Teacher Education Council rose to prominence in 2001 under the guidance of pioneering advisers Asst. Prof. Casimira O. Del Mundo and Mrs. Emeteria A. R. Digno, with Prof. Fortunata G. Tiangco serving as Dean. The first elected president was Ms. Edna P. Ermita (AY 2001–2002). A historic early achievement was the construction of the CTE Function Room through joint efforts of CTE students, faculty, and the elementary PTA.'
  },
  {
    period: '2008–2016 — Growth and Recognition',
    title: 'Advisory Continuity and Recognition',
    content: 'Following Asst. Prof. Del Mundo\'s advisory leadership until 2008, the council was guided by dedicated advisers including Asst. Prof. Celia J. Nolasco, Ms. Simeona Bauyon, Asst. Prof. Leolanda A. Balilla, and Asst. Prof. Gliceria R. Quizon. Under the student leadership of Ms. Irene Andino and Ms. Michaela Rose B. Rivera, the CTEC was recognized as the university\'s Best Student Organization.'
  },
  {
    period: '2016–2022 — Resilience and New Initiatives',
    title: 'Leadership Transitions & Pandemic Response',
    content: 'Leadership continued through presidents Joshua Kim T. Escalona, Roland Renzo A. Bathan, Karen Yoshinaga, and Yvan Enicame. Through the challenges of the COVID-19 pandemic, the council continuously served teacher education students under the guidance of adviser Mr. Marvin E. Rosel. Re-elected President Ms. Ivy D. Mitra led the successful transition back to face-to-face modalities in AY 2021–2023.'
  },
  {
    period: '2023–2026 — Flagship Traditions & Expansion',
    title: 'Sub-Organizations & Historic Milestones',
    content: 'Under President Marlou C. Jonson (AY 2023–2024), the council launched the first-ever CTE Henyo and expanded the CTE Day and Night tradition. In AY 2024–2025, President Mikaella Faith F. Diño pioneered the College of Teacher Education\'s first Pinning and Candle Lighting Ceremonies for pre-service teachers. In AY 2025–2026, President Roland F. Rivera spearheaded the official recognition of four program-based student organizations (AIMSS, ALFEM, LEAPS, and SPESSS).'
  },
  {
    period: '2026–2027 — Present Term',
    title: 'Current Administration',
    content: 'For Academic Year 2026–2027, the council is led by President Prince Eljohn L. Ayo, with Asst. Prof. Michael John V. Francisco serving as Faculty Adviser. The council continues its commitment to transparent student service, academic support, and community engagement for 1,078 future teachers.'
  }
];

export const INITIAL_ACCOMPLISHMENT_REPORTS: ReportItem[] = [
  {
    id: 'ar-2026-2027',
    type: 'accomplishment',
    title: 'Accomplishment Report',
    academicYear: '2026–2027',
    term: 'First Semester',
    fileName: 'CTEC_Accomplishment_Report_2026-2027.pdf',
    fileUrl: '/reports/accomplishment/CTEC_Accomplishment_Report_2026-2027.pdf',
    fileSize: '14 KB',
    datePublished: 'August 2026',
    status: 'Official',
    description: 'Official accomplishment report documenting first-semester programs, including the Turn-Over Ceremonies, Pencil of Hope LET outreach, Freshmen Orientation, Pananaliksik research seminar, and Teachers\' Day activities.',
    highlights: [
      'Turn-Over Ceremony of Key Responsibility',
      'Pencil of Hope for Future Teachers (LET Exam Support)',
      'CTE Freshmen Orientation for 241 new students',
      'PANANALIKSIK: Academic Research Strategies Seminar',
      'Tanda ng Apresasyon World Teachers\' Day interactive tribute'
    ],
    signatories: [
      'Shane Carmelle R. Cabesas (Secretary)',
      'Prince Eljohn L. Ayo (President)',
      'Asst. Prof. Michael John V. Francisco (Faculty Adviser)'
    ]
  },
  {
    id: 'ar-2025-2026',
    type: 'accomplishment',
    title: 'CTEC Accomplishment Report',
    academicYear: '2025–2026',
    term: 'Official Document Archive (Historical AY 2025–2026)',
    fileName: 'CTEC_Accomplishment_Report_2025-2026.pdf',
    fileUrl: '/reports/accomplishment/CTEC_Accomplishment_Report_2025-2026.pdf',
    fileSize: '8 KB',
    datePublished: 'July 2026',
    status: 'Official',
    description: 'Official Document Archive — College of Teacher Education Council. Historical accomplishment report documenting initiatives and projects completed during Academic Year 2025–2026 under the past-term council administration.',
    highlights: [
      'Official recognition of 4 Program Sub-Organizations (AIMSS, ALFEM, LEAPS, SPESSS)',
      'Pinning and Candle Lighting Ceremonies for practicum interns',
      'CTE Henyo Inter-Major Academic Competition',
      'CTE Day and Night Fellowship'
    ],
    signatories: [
      'Roland F. Rivera (Past Council President, AY 2025–2026 Term)',
      'Marvin E. Rosel (Past Faculty Adviser, AY 2025–2026 Term)'
    ]
  }
];

export const INITIAL_FINANCIAL_REPORTS: ReportItem[] = [
  {
    id: 'fr-2026-2027',
    type: 'financial',
    title: 'Financial Report',
    academicYear: '2026–2027',
    term: 'Revolving Fund Declaration (First Semester)',
    fileName: 'CTEC_Financial_Report_2026-2027.pdf',
    fileUrl: '/reports/financial/CTEC_Financial_Report_2026-2027.pdf',
    fileSize: '9 KB',
    datePublished: 'August 1, 2026',
    status: 'Official',
    description: 'Official declaration of the organization\'s revolving fund submitted to the Office of Student Organization (Attachment F). Verifies the remaining balance of Php 51,500.85 carried forward from the preceding term.',
    highlights: [
      'Remaining Revolving Fund: Php 51,500.85',
      'Receivables / Uncollected Dues: Php 0.00',
      'Total Starting Balance: Php 51,500.85',
      'Authorized membership fee collection: Php 50.00 per semester (Php 100.00/yr)'
    ],
    signatories: [
      'Ronald F. Rivera Jr. (Treasurer)',
      'Roland F. Rivera (Auditor)',
      'Prince Eljohn L. Ayo (President)',
      'Asst. Prof. Michael John V. Francisco (Adviser)'
    ]
  },
  {
    id: 'fr-2025-2026',
    type: 'financial',
    title: 'Financial Report',
    academicYear: '2025–2026',
    term: 'Year-End Financial Liquidation',
    fileName: 'CTEC_Financial_Report_2025-2026.pdf',
    fileUrl: '/reports/financial/CTEC_Financial_Report_2025-2026.pdf',
    fileSize: '8 KB',
    datePublished: 'June 2026',
    status: 'Official',
    description: 'Audited year-end financial statement and liquidation for AY 2025–2026 verifying collections, activity expenditures, and audited revolving fund balance of Php 51,500.85.',
    highlights: [
      'Beginning Fund Balance: Php 48,220.00',
      'Total Membership Collections: Php 98,400.00',
      'Total Project Disbursements: Php 95,119.15',
      'Ending Cash Balance Forwarded: Php 51,500.85'
    ],
    signatories: [
      'Arabella Juliana D. Capadosa (Auditor AY 2025–2026)',
      'Roland F. Rivera (President AY 2025–2026)'
    ]
  }
];
