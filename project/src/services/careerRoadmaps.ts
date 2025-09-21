import { CareerRoadmap } from '../types';

export const careerRoadmaps: Record<string, CareerRoadmap> = {
  'Software Developer': {
    startingPoint: 'Degree in CS/IT or coding bootcamp + 2–3 personal projects.',
    requiredSkills: ['Java/Python/JS', 'data structures & algorithms', 'Git', 'design patterns', 'REST APIs'],
    keyMilestones: [
      'Ship 3 portfolio apps (one with CI/CD).',
      'Pass coding interviews.',
      'Land junior role; complete feature end-to-end.',
      'Own module, mentor interns.',
      'Architect a microservice.'
    ],
    timeline: '0–2 yrs junior, 2–5 mid, 5+ senior/architect.',
    resources: ['LeetCode', 'Clean Code', 'System Design Primer'],
    endGoal: 'Senior Engineer → Tech Lead / Architect.'
  },
  'Web Developer': {
    startingPoint: 'HTML/CSS/JS basics + 2 static websites deployed.',
    requiredSkills: ['JavaScript frameworks (React/Vue)', 'Node.js', 'REST/GraphQL APIs', 'DBs'],
    keyMilestones: [
      'Build dynamic website.',
      'Create full-stack project.',
      'Freelance/volunteer sites.',
      'Land junior role; own UI/API.',
      'Scale app & optimize performance.'
    ],
    timeline: '6–12 mo junior, 2–4 mid, 5+ senior.',
    resources: ['MDN', 'freeCodeCamp', 'Odin Project'],
    endGoal: 'Senior Web Dev → Engineering Manager.'
  },
  'Mobile App Developer': {
    startingPoint: 'Choose Android (Java/Kotlin), iOS (Swift), or Flutter/React Native.',
    requiredSkills: ['SDKs', 'UI frameworks', 'APIs', 'SQLite', 'push notifications'],
    keyMilestones: [
      'Publish simple app.',
      'Build app with login + DB.',
      'Freelance side project.',
      'Land job; ship production feature.',
      'CI/CD for mobile apps.'
    ],
    timeline: '1–2 yrs junior, 3–5 mid, 5+ lead.',
    resources: ['Android/iOS docs', 'Flutter.dev'],
    endGoal: 'Senior Mobile Engineer → Mobile Lead / Indie App Founder.'
  },
  'Data Analyst': {
    startingPoint: 'Excel + SQL basics + 1 dataset project.',
    requiredSkills: ['SQL', 'Python/R', 'Tableau/Power BI', 'statistics'],
    keyMilestones: [
      'Build dashboards.',
      'Publish analysis projects.',
      'Land role; deliver business KPI report.',
      'Own department dashboards.',
      'Mentor juniors.'
    ],
    timeline: '6–12 mo entry, 2–4 mid, 5+ senior.',
    resources: ['Google Data Analytics Cert', 'Kaggle'],
    endGoal: 'Senior Analyst → Analytics Manager.'
  },
  'Data Scientist': {
    startingPoint: 'Math/stats + Python + 1 ML project.',
    requiredSkills: ['ML libraries', 'stats', 'feature engineering', 'ML pipelines'],
    keyMilestones: [
      'Publish ML projects.',
      'Join Kaggle competitions.',
      'Land role; deploy predictive model.',
      'Own ML pipeline.',
      'Lead ML initiative.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['fast.ai', 'Coursera ML', 'Hands-On ML'],
    endGoal: 'Senior Data Scientist → ML Lead / Research Scientist.'
  },
  'Machine Learning Engineer': {
    startingPoint: 'Python + math/stats + ML basics.',
    requiredSkills: ['TensorFlow/PyTorch', 'deployment (Docker, Kubernetes)', 'cloud ML'],
    keyMilestones: [
      'Build ML pipeline.',
      'Contribute to MLOps.',
      'Land role; ship model to prod.',
      'Optimize performance.',
      'Architect ML systems.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['TensorFlow docs', 'MLOps courses'],
    endGoal: 'Senior ML Engineer → AI Systems Architect.'
  },
  'AI Researcher': {
    startingPoint: 'MSc/PhD + research projects.',
    requiredSkills: ['Deep learning', 'NLP', 'reinforcement learning', 'academic writing'],
    keyMilestones: [
      'Publish research paper.',
      'Collaborate in open-source.',
      'Join lab/industry research.',
      'Publish novel benchmark.',
      'Lead AI lab.'
    ],
    timeline: '3–6 yrs PhD, 2–4 postdoc, 5+ researcher.',
    resources: ['arXiv', 'NeurIPS papers'],
    endGoal: 'AI Research Scientist → Lab Director / Professor.'
  },
  'Cybersecurity Analyst': {
    startingPoint: 'IT basics + CompTIA Security+.',
    requiredSkills: ['Firewalls', 'SIEM', 'malware analysis', 'Linux', 'networking'],
    keyMilestones: [
      'Pass Security+/CEH.',
      'Perform vuln scans.',
      'Land SOC analyst role.',
      'Respond to incidents.',
      'Lead blue team.'
    ],
    timeline: '6–12 mo entry, 2–4 mid, 5+ senior.',
    resources: ['TryHackMe', 'HackTheBox'],
    endGoal: 'Senior Analyst → Threat Hunter / Security Manager.'
  },
  'Information Security Engineer': {
    startingPoint: 'Analyst experience + security cert.',
    requiredSkills: ['Encryption', 'IAM', 'secure design', 'DevSecOps'],
    keyMilestones: [
      'Harden systems.',
      'Design secure architectures.',
      'Land engineer role.',
      'Lead audits.',
      'Architect enterprise security.'
    ],
    timeline: '2–3 yrs analyst → engineer, 5–7 senior.',
    resources: ['CISSP', 'NIST', 'OWASP'],
    endGoal: 'Senior InfoSec Engineer → CISO.'
  },
  'Network Administrator': {
    startingPoint: 'CompTIA Network+ or CCNA.',
    requiredSkills: ['Routing', 'switching', 'firewalls', 'VPNs'],
    keyMilestones: [
      'Build home lab.',
      'Pass CCNA.',
      'Land admin role.',
      'Manage enterprise network.',
      'Lead cloud migration.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['Cisco Packet Tracer', 'GNS3'],
    endGoal: 'Senior Network Engineer → Architect.'
  },
  'Cloud Engineer': {
    startingPoint: 'Networking + Linux + one cloud platform (AWS/Azure/GCP).',
    requiredSkills: ['Virtualization', 'containers', 'Terraform', 'CI/CD'],
    keyMilestones: [
      'Earn AWS/Azure Associate cert.',
      'Deploy apps on cloud.',
      'Land role; manage infra.',
      'Automate scaling.',
      'Lead migration.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['Cloud provider docs', 'Terraform'],
    endGoal: 'Senior Cloud Engineer → Solutions Architect.'
  },
  'Cloud Solutions Architect': {
    startingPoint: '3–5 yrs cloud engineering.',
    requiredSkills: ['Cloud infra design', 'microservices', 'networking', 'cost optimization'],
    keyMilestones: [
      'Earn AWS/Azure Architect cert.',
      'Design scalable systems.',
      'Land architect role.',
      'Lead enterprise migration.',
      'Mentor engineers.'
    ],
    timeline: '5–7 yrs exp.',
    resources: ['AWS Well-Architected', 'Azure Architecture Center'],
    endGoal: 'Principal Architect → CTO/Cloud Strategist.'
  },
  'Database Administrator': {
    startingPoint: 'SQL + DB fundamentals.',
    requiredSkills: ['SQL Server/MySQL/Oracle', 'backups', 'replication', 'tuning'],
    keyMilestones: [
      'Pass SQL cert.',
      'Manage small DB.',
      'Land DBA role.',
      'Optimize queries.',
      'Lead enterprise DB migrations.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['SQLZoo', 'PostgreSQL docs'],
    endGoal: 'Senior DBA → Data Architect.'
  },
  'Systems Analyst': {
    startingPoint: 'IT/CS degree + basic systems knowledge.',
    requiredSkills: ['Requirements gathering', 'UML', 'databases', 'project mgmt'],
    keyMilestones: [
      'Shadow analyst.',
      'Document requirements.',
      'Land role; write system specs.',
      'Lead cross-team requirements.',
      'Architect workflows.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['BABOK Guide', 'UML diagrams'],
    endGoal: 'Senior Analyst → Business Systems Architect.'
  },
  'UI/UX Designer': {
    startingPoint: 'Portfolio of mockups in Figma/Sketch.',
    requiredSkills: ['Wireframing', 'prototyping', 'usability', 'accessibility'],
    keyMilestones: [
      'Create mockups.',
      'Conduct usability tests.',
      'Land junior designer role.',
      'Redesign flows in prod apps.',
      'Lead UX strategy.'
    ],
    timeline: '6–12 mo entry, 2–4 mid, 5+ lead.',
    resources: ['Don’t Make Me Think', 'Nielsen Norman Group'],
    endGoal: 'Senior UX Designer → Design Director.'
  },
  'Game Developer': {
    startingPoint: 'C++/C# basics + Unity/Unreal.',
    requiredSkills: ['Game engines', 'graphics', 'physics', 'shaders', 'AI'],
    keyMilestones: [
      'Build 2D game.',
      'Build 3D game.',
      'Land indie/freelance role.',
      'Ship game in studio.',
      'Lead dev team.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ lead.',
    resources: ['Unity Learn', 'Unreal Docs', 'Game Programming Patterns'],
    endGoal: 'Lead Game Dev → Game Director.'
  },
  'IT Support Specialist': {
    startingPoint: 'CompTIA A+ or basic IT troubleshooting.',
    requiredSkills: ['OS', 'hardware', 'networking basics', 'helpdesk tools'],
    keyMilestones: [
      'Pass A+.',
      'Land helpdesk role.',
      'Resolve tickets.',
      'Specialize (networking/cloud).',
      'Mentor support team.'
    ],
    timeline: '6–12 mo entry, 2–4 mid.',
    resources: ['CompTIA A+', 'ITIL basics'],
    endGoal: 'Senior IT Support → SysAdmin or Cloud.'
  },
  'DevOps Engineer': {
    startingPoint: 'Software dev/sysadmin background.',
    requiredSkills: ['CI/CD', 'Docker', 'Kubernetes', 'Terraform', 'monitoring'],
    keyMilestones: [
      'Automate build pipeline.',
      'Deploy apps with Docker.',
      'Land role; manage CI/CD.',
      'Optimize infra scaling.',
      'Lead DevOps culture.'
    ],
    timeline: '2–3 yrs entry, 5+ senior.',
    resources: ['Kelsey Hightower’s Kubernetes', 'Terraform docs'],
    endGoal: 'Senior DevOps Engineer → SRE/Platform Architect.'
  },
  'Software Tester / QA Engineer': {
    startingPoint: 'IT background + test case writing.',
    requiredSkills: ['Manual testing', 'Selenium', 'API testing', 'CI/CD'],
    keyMilestones: [
      'Write test cases.',
      'Automate regression suite.',
      'Land QA role.',
      'Own testing pipeline.',
      'Lead QA automation strategy.'
    ],
    timeline: '6–12 mo entry, 2–4 mid, 5+ senior.',
    resources: ['Ministry of Testing', 'Selenium docs'],
    endGoal: 'Senior QA Engineer → QA Manager.'
  },
  'Blockchain Developer': {
    startingPoint: 'Strong dev skills + crypto basics.',
    requiredSkills: ['Solidity', 'Ethereum', 'smart contracts', 'cryptography'],
    keyMilestones: [
      'Write simple smart contract.',
      'Deploy dApp.',
      'Contribute to open-source.',
      'Land blockchain dev role.',
      'Architect DeFi/NFT projects.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['Solidity docs', 'Ethereum.org', 'CryptoZombies'],
    endGoal: 'Senior Blockchain Dev → Web3 Architect.'
  },
  'Front-End Developer': {
    startingPoint: 'HTML/CSS/JS basics + portfolio of 2 websites.',
    requiredSkills: ['React/Vue/Angular', 'responsive design', 'accessibility', 'Webpack', 'testing'],
    keyMilestones: [
      'Build interactive UI project.',
      'Deploy site with responsive design.',
      'Land junior front-end role.',
      'Own UI components, optimize performance.',
      'Lead front-end architecture.'
    ],
    timeline: '6–12 mo entry, 2–4 mid, 5+ senior.',
    resources: ['MDN', 'FrontendMentor.io', 'React docs'],
    endGoal: 'Senior Front-End Dev → UI Architect.'
  },
  'Back-End Developer': {
    startingPoint: 'Basic programming (Java, Python, Go, Node.js).',
    requiredSkills: ['Databases', 'APIs', 'authentication', 'scaling'],
    keyMilestones: [
      'Build REST API.',
      'Add auth + DB integration.',
      'Land back-end role.',
      'Optimize queries, caching.',
      'Architect distributed systems.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['Postgres docs', 'System Design Primer'],
    endGoal: 'Senior Back-End Dev → Systems Architect.'
  },
  'Full-Stack Developer': {
    startingPoint: 'Front-end + back-end basics + one deployed app.',
    requiredSkills: ['React/Angular + Node/Django + SQL/NoSQL'],
    keyMilestones: [
      'Deploy full-stack app.',
      'Land full-stack role.',
      'Own features end-to-end.',
      'Mentor juniors, lead cross-stack projects.',
      'Architect full-stack platform.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid, 5+ senior.',
    resources: ['The Odin Project', 'MERN stack guides'],
    endGoal: 'Senior Full-Stack → Tech Lead.'
  },
  'AI Ethics Specialist': {
    startingPoint: 'CS/Philosophy/Sociology + AI basics.',
    requiredSkills: ['AI principles', 'fairness', 'bias detection', 'policy'],
    keyMilestones: [
      'Study ethical frameworks.',
      'Publish article/case study.',
      'Join AI ethics team.',
      'Audit ML models for bias.',
      'Shape AI policy in orgs.'
    ],
    timeline: '2–4 yrs entry, 5+ senior.',
    resources: ['IEEE AI Ethics', 'Partnership on AI'],
    endGoal: 'Senior Ethics Specialist → AI Policy Advisor.'
  },
  'Penetration Tester': {
    startingPoint: 'Networking + Security+ or CEH.',
    requiredSkills: ['Kali Linux', 'Metasploit', 'Burp Suite', 'exploit dev'],
    keyMilestones: [
      'Practice on HackTheBox/CTFs.',
      'Get OSCP.',
      'Land pentest role.',
      'Perform red team engagements.',
      'Lead pentest team.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['Offensive Security OSCP', 'HackTheBox'],
    endGoal: 'Senior Pentester → Red Team Lead.'
  },
  'IT Auditor': {
    startingPoint: 'Accounting/IT + CISA cert.',
    requiredSkills: ['Risk frameworks', 'compliance', 'ITGCs'],
    keyMilestones: [
      'Shadow audits.',
      'Pass CISA.',
      'Land IT auditor role.',
      'Lead audit engagements.',
      'Advise governance strategy.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['ISACA CISA', 'NIST guidelines'],
    endGoal: 'Senior IT Auditor → Risk Manager.'
  },
  'Big Data Engineer': {
    startingPoint: 'SQL + Python/Java + Hadoop basics.',
    requiredSkills: ['Spark', 'Kafka', 'ETL', 'cloud data pipelines'],
    keyMilestones: [
      'Build ETL pipeline.',
      'Process datasets with Spark.',
      'Land data engineer role.',
      'Optimize pipelines at scale.',
      'Architect data lake/warehouse.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['Databricks', 'Hadoop docs'],
    endGoal: 'Senior Data Engineer → Big Data Architect.'
  },
  'IoT Engineer': {
    startingPoint: 'Embedded systems/CS + Arduino/Raspberry Pi projects.',
    requiredSkills: ['C/C++', 'MQTT', 'sensors', 'cloud IoT'],
    keyMilestones: [
      'Build IoT prototype.',
      'Deploy device → cloud.',
      'Land IoT engineer role.',
      'Optimize device networks.',
      'Architect IoT platform.'
    ],
    timeline: '2–3 yrs entry, 5+ senior.',
    resources: ['AWS IoT', 'Arduino docs'],
    endGoal: 'Senior IoT Engineer → IoT Architect.'
  },
  'AR/VR Developer': {
    startingPoint: 'Unity/Unreal basics + C#/C++.',
    requiredSkills: ['3D graphics', 'VR SDKs (Oculus, ARKit)', 'shaders'],
    keyMilestones: [
      'Build AR/VR demo.',
      'Publish prototype.',
      'Land AR/VR role.',
      'Ship commercial app/game.',
      'Lead XR dev team.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['Unity XR Toolkit', 'ARCore docs'],
    endGoal: 'Senior AR/VR Dev → XR Studio Lead.'
  },
  'Automation Engineer': {
    startingPoint: 'CS/EE background + scripting (Python, Bash).',
    requiredSkills: ['CI/CD', 'robotics process automation (RPA)', 'PLCs'],
    keyMilestones: [
      'Automate simple workflow.',
      'Implement RPA.',
      'Land automation role.',
      'Scale automation pipelines.',
      'Lead enterprise automation strategy.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['UiPath', 'Ansible docs'],
    endGoal: 'Senior Automation Engineer → RPA Architect.'
  },
  'Mechanical Engineer': {
    startingPoint: 'BEng/BS in Mechanical Engineering.',
    requiredSkills: ['Thermodynamics', 'CAD', 'mechanics', 'FEA'],
    keyMilestones: [
      'Complete internships.',
      'Pass FE exam.',
      'Land mechanical engineer role.',
      'Lead product design.',
      'Earn PE license.'
    ],
    timeline: '4 yr degree + 2–5 yrs.',
    resources: ['Shigley’s Mechanical Design', 'SolidWorks'],
    endGoal: 'PE Mechanical Engineer → Lead Designer.'
  },
  'Electrical Engineer': {
    startingPoint: 'BEng/BS EE.',
    requiredSkills: ['Circuits', 'electronics', 'power systems', 'embedded'],
    keyMilestones: [
      'Labs/internships.',
      'Pass FE.',
      'Land EE role.',
      'Design circuits/PCB.',
      'Earn PE license.'
    ],
    timeline: '4 yr degree + 2–5 yrs.',
    resources: ['Sedra/Smith Microelectronics', 'MATLAB'],
    endGoal: 'PE EE → Senior Engineer.'
  },
  'Civil Engineer': {
    startingPoint: 'BEng/BS Civil.',
    requiredSkills: ['Structures', 'geotech', 'hydraulics', 'surveying'],
    keyMilestones: [
      'Pass FE.',
      'Internships in construction.',
      'Land role; design site works.',
      'Earn PE.',
      'Lead civil projects.'
    ],
    timeline: '4 yr degree + 4+ yrs exp.',
    resources: ['Civil Engineering Handbook', 'AutoCAD Civil 3D'],
    endGoal: 'Licensed Civil Engineer → Project Manager.'
  },
  'Structural Engineer': {
    startingPoint: 'Civil eng degree + focus on structures.',
    requiredSkills: ['Strength of materials', 'structural analysis', 'steel/concrete design'],
    keyMilestones: [
      'Work on structural projects.',
      'Pass FE/PE.',
      'Land structural role.',
      'Sign off building designs.',
      'Lead structural team.'
    ],
    timeline: '4–6 yrs.',
    resources: ['Structural Analysis by Hibbeler'],
    endGoal: 'Licensed Structural Engineer → Principal Engineer.'
  },
  'Robotics Engineer': {
    startingPoint: 'Mech/EE/CS degree.',
    requiredSkills: ['Control systems', 'robotics frameworks (ROS)', 'kinematics', 'AI'],
    keyMilestones: [
      'Build robot prototype.',
      'Contribute to ROS.',
      'Land robotics role.',
      'Design industrial robot.',
      'Lead robotics team.'
    ],
    timeline: '2–4 yrs entry, 5+ senior.',
    resources: ['ROS Wiki', 'Modern Robotics book'],
    endGoal: 'Senior Robotics Engineer → Robotics Lead.'
  },
  'Mechatronics Engineer': {
    startingPoint: 'Mechatronics/EE degree.',
    requiredSkills: ['Sensors', 'actuators', 'microcontrollers', 'automation'],
    keyMilestones: [
      'Build embedded project.',
      'Land role in automation.',
      'Integrate mechanical+electrical systems.',
      'Lead product line.'
    ],
    timeline: '2–4 yrs entry.',
    resources: ['Arduino', 'PLC courses'],
    endGoal: 'Senior Mechatronics Engineer → Product Lead.'
  },
  'CAD Designer': {
    startingPoint: 'CAD certification or ME/Civil degree.',
    requiredSkills: ['AutoCAD', 'SolidWorks', 'drafting standards'],
    keyMilestones: [
      'Draft 2D/3D models.',
      'Freelance CAD projects.',
      'Land CAD designer role.',
      'Optimize designs for manufacturing.',
      'Lead CAD team.'
    ],
    timeline: '1–2 yrs entry, 3–5 mid.',
    resources: ['AutoDesk', 'SolidWorks tutorials'],
    endGoal: 'Senior CAD Designer → Design Manager.'
  },
  'Automotive Engineer': {
    startingPoint: 'ME/Automotive Eng degree.',
    requiredSkills: ['Engines', 'vehicle dynamics', 'CAD', 'manufacturing'],
    keyMilestones: [
      'Internship in automotive firm.',
      'Land junior role.',
      'Design subsystems.',
      'Lead vehicle projects.'
    ],
    timeline: '4–6 yrs.',
    resources: ['Bosch Automotive Handbook'],
    endGoal: 'Senior Auto Engineer → Lead Engineer.'
  },
  'Aerospace Engineer': {
    startingPoint: 'Aerospace/ME degree.',
    requiredSkills: ['Aerodynamics', 'propulsion', 'structures', 'CAD'],
    keyMilestones: [
      'Internship with aerospace firm.',
      'Land role; design components.',
      'Work on flight systems.',
      'Earn PE/lead team.'
    ],
    timeline: '4–6 yrs.',
    resources: ['Anderson’s Aerodynamics', 'NASA resources'],
    endGoal: 'Senior Aerospace Engineer → Project Lead.'
  },
  'Industrial Engineer': {
    startingPoint: 'IE degree.',
    requiredSkills: ['Operations research', 'lean manufacturing', 'logistics'],
    keyMilestones: [
      'Internship in plant.',
      'Land role; optimize workflows.',
      'Lead cost reduction projects.',
      'Manage production systems.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Maynard’s IE Handbook'],
    endGoal: 'Senior IE → Operations Manager.'
  },
  'Environmental Engineer': {
    startingPoint: 'Civil/Env Eng degree.',
    requiredSkills: ['Water treatment', 'waste mgmt', 'regulations'],
    keyMilestones: [
      'Internship in environmental projects.',
      'Land role; conduct impact assessments.',
      'Earn PE.',
      'Lead environmental programs.'
    ],
    timeline: '4–6 yrs.',
    resources: ['Environmental Engineering textbook (Masters)'],
    endGoal: 'Senior Env Engineer → Sustainability Director.'
  },
  'Petroleum Engineer': {
    startingPoint: 'Petroleum/ME degree.',
    requiredSkills: ['Drilling', 'reservoir', 'production'],
    keyMilestones: [
      'Field internships.',
      'Land junior role.',
      'Optimize wells.',
      'Lead drilling ops.'
    ],
    timeline: '4–7 yrs.',
    resources: ['Petroleum Production Engineering by Guo'],
    endGoal: 'Senior Petroleum Engineer → Field Manager.'
  },
  'Marine Engineer': {
    startingPoint: 'ME/Marine Eng degree.',
    requiredSkills: ['Naval architecture', 'propulsion', 'hydraulics'],
    keyMilestones: [
      'Internship in shipyards.',
      'Land marine role.',
      'Design ship systems.',
      'Lead marine projects.'
    ],
    timeline: '4–6 yrs.',
    resources: ['Principles of Naval Architecture'],
    endGoal: 'Senior Marine Engineer → Chief Engineer.'
  },
  'Renewable Energy Engineer': {
    startingPoint: 'EE/ME/Env Eng degree.',
    requiredSkills: ['Solar', 'wind', 'energy systems', 'grid integration'],
    keyMilestones: [
      'Renewable projects internship.',
      'Land role; design solar/wind.',
      'Certify renewable systems.',
      'Lead energy projects.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Renewable Energy Systems book'],
    endGoal: 'Senior Renewable Engineer → Energy Director.'
  },
  'Geotechnical Engineer': {
    startingPoint: 'Civil Eng degree + geotech focus.',
    requiredSkills: ['Soil mechanics', 'foundation', 'slope stability'],
    keyMilestones: [
      'Soil lab projects.',
      'Land geotech role.',
      'Design foundations.',
      'Lead geotech investigations.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Principles of Geotechnical Engineering'],
    endGoal: 'Senior Geotech → Principal Engineer.'
  },
  'Construction Manager': {
    startingPoint: 'Civil Eng/Construction Mgmt degree.',
    requiredSkills: ['Project mgmt', 'scheduling', 'contracts'],
    keyMilestones: [
      'Intern as site engineer.',
      'PMP/CM cert.',
      'Land CM role.',
      'Manage mid-size projects.',
      'Lead mega projects.'
    ],
    timeline: '3–5 yrs entry.',
    resources: ['PMI PMBOK'],
    endGoal: 'Senior CM → Project Director.'
  },
  'HVAC Engineer': {
    startingPoint: 'ME degree.',
    requiredSkills: ['Thermo', 'fluid dynamics', 'HVAC design software'],
    keyMilestones: [
      'Internship in HVAC.',
      'Land HVAC role.',
      'Design HVAC systems.',
      'Lead building MEP.'
    ],
    timeline: '2–5 yrs.',
    resources: ['ASHRAE Handbook'],
    endGoal: 'Senior HVAC Engineer → MEP Manager.'
  },
  'Quality Assurance Engineer': {
    startingPoint: 'Eng degree + QA basics.',
    requiredSkills: ['Testing methods', 'Six Sigma', 'ISO'],
    keyMilestones: [
      'Cert in QA/Six Sigma.',
      'Land QA role.',
      'Audit production lines.',
      'Lead QA systems.'
    ],
    timeline: '2–4 yrs.',
    resources: ['ASQ resources'],
    endGoal: 'Senior QA Engineer → QA Manager.'
  },
  'Mining Engineer': {
    startingPoint: 'Mining Eng degree.',
    requiredSkills: ['Mineral processing', 'geology', 'safety'],
    keyMilestones: [
      'Field internships.',
      'Land mining role.',
      'Design mining ops.',
      'Lead exploration projects.'
    ],
    timeline: '4–7 yrs.',
    resources: ['Intro to Mining Engineering'],
    endGoal: 'Senior Mining Engineer → Mine Manager.'
  },
  'Surveyor': {
    startingPoint: 'Surveying/Geomatics degree.',
    requiredSkills: ['GIS', 'GPS', 'AutoCAD', 'land laws'],
    keyMilestones: [
      'Field surveys.',
      'Pass licensure.',
      'Land surveyor role.',
      'Certify property boundaries.',
      'Lead survey teams.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Surveying Principles and Applications'],
    endGoal: 'Licensed Surveyor → Survey Manager.'
  },
  'Graphic Designer': {
    startingPoint: 'Portfolio in Photoshop/Illustrator.',
    requiredSkills: ['Design principles', 'typography', 'branding'],
    keyMilestones: [
      'Freelance logos/posters.',
      'Land junior designer role.',
      'Own brand projects.',
      'Lead campaigns.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['Canva', 'Behance'],
    endGoal: 'Senior Designer → Art Director.'
  },
  'Illustrator': {
    startingPoint: 'Drawing/illustration portfolio.',
    requiredSkills: ['Photoshop', 'Illustrator', 'Procreate'],
    keyMilestones: [
      'Freelance illustration.',
      'Land role in publishing/ads.',
      'Publish illustrated book.',
      'Lead illustration projects.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['Skillshare art classes'],
    endGoal: 'Senior Illustrator → Creative Lead.'
  },
  'Video Editor': {
    startingPoint: 'Portfolio in Premiere/Final Cut.',
    requiredSkills: ['Editing', 'storytelling', 'color grading'],
    keyMilestones: [
      'Edit short films.',
      'Freelance gigs.',
      'Land editor role.',
      'Edit commercials/movies.',
      'Lead editing team.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['Adobe Premiere tutorials'],
    endGoal: 'Senior Editor → Post-Production Lead.'
  },
  'Animator': {
    startingPoint: 'Animation degree/portfolio.',
    requiredSkills: ['2D/3D animation', 'Blender/Maya'],
    keyMilestones: [
      'Create short animation.',
      'Freelance gigs.',
      'Land animator role.',
      'Animate for films/games.',
      'Lead animation team.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Animation Mentor'],
    endGoal: 'Senior Animator → Animation Director.'
  },
  '3D Artist': {
    startingPoint: 'Portfolio in Blender/Maya.',
    requiredSkills: ['Modeling', 'texturing', 'rendering'],
    keyMilestones: [
      'Create 3D models.',
      'Freelance/indie game assets.',
      'Land 3D artist role.',
      'Build environments/characters.',
      'Lead 3D art team.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['CGCookie', 'ArtStation'],
    endGoal: 'Senior 3D Artist → Art Director.'
  },
  'Photographer': {
    startingPoint: 'DSLR + basic portfolio.',
    requiredSkills: ['Composition', 'lighting', 'editing'],
    keyMilestones: [
      'Shoot events.',
      'Freelance gigs.',
      'Land agency role.',
      'Specialize (fashion, weddings, nature).',
      'Publish book/exhibit.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['Digital Photography School'],
    endGoal: 'Senior Photographer → Studio Owner.'
  },
  'Photo Editor': {
    startingPoint: 'Photoshop/Lightroom basics.',
    requiredSkills: ['Retouching', 'color grading', 'RAW processing'],
    keyMilestones: [
      'Edit sample shoots.',
      'Freelance gigs.',
      'Land editor role.',
      'Edit for magazines.',
      'Lead photo editing.'
    ],
    timeline: '1–2 yrs entry.',
    resources: ['Photoshop tutorials'],
    endGoal: 'Senior Editor → Art Director.'
  },
  'Film Director': {
    startingPoint: 'Film school or indie short films.',
    requiredSkills: ['Storytelling', 'directing', 'cinematography'],
    keyMilestones: [
      'Shoot short films.',
      'Submit to festivals.',
      'Land assistant director role.',
      'Direct feature film.',
      'Lead major productions.'
    ],
    timeline: '5–10 yrs.',
    resources: ['Film Directing Shot by Shot'],
    endGoal: 'Director → Producer/Studio Head.'
  },
  'Sound Engineer': {
    startingPoint: 'Audio eng degree or DAW skills.',
    requiredSkills: ['Mixing', 'mastering', 'acoustics', 'Pro Tools'],
    keyMilestones: [
      'Mix demo tracks.',
      'Freelance gigs.',
      'Land studio role.',
      'Engineer live shows.',
      'Lead sound dept.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Recording Engineer’s Handbook'],
    endGoal: 'Senior Sound Engineer → Producer.'
  },
  'Music Producer': {
    startingPoint: 'DAW basics (Ableton, Logic).',
    requiredSkills: ['Composition', 'mixing', 'sampling'],
    keyMilestones: [
      'Produce demo tracks.',
      'Release indie music.',
      'Land producer role.',
      'Collaborate with artists.',
      'Produce albums.'
    ],
    timeline: '3–7 yrs.',
    resources: ['Coursera music production'],
    endGoal: 'Producer → Label Owner.'
  },
  'Content Creator': {
    startingPoint: 'Niche selection + basic camera/mic setup.',
    requiredSkills: ['Storytelling', 'video editing', 'SEO', 'audience engagement'],
    keyMilestones: [
      'Create 10+ videos/posts.',
      'Build small audience (1k subs).',
      'Land sponsorships.',
      'Scale content production.',
      'Manage team & brand deals.'
    ],
    timeline: '1–3 yrs growth, 3–5+ scaling.',
    resources: ['YouTube Creator Academy', 'TikTok guides'],
    endGoal: 'Full-time Creator → Media Entrepreneur.'
  },
  'Motion Graphics Designer': {
    startingPoint: 'Portfolio with After Effects basics.',
    requiredSkills: ['Animation principles', 'typography', 'VFX', '3D motion'],
    keyMilestones: [
      'Freelance short projects.',
      'Land agency role.',
      'Animate for ads/films.',
      'Lead motion design projects.'
    ],
    timeline: '2–4 yrs.',
    resources: ['School of Motion', 'AE tutorials'],
    endGoal: 'Senior Motion Designer → Creative Director.'
  },
  'Art Director': {
    startingPoint: 'Design portfolio + 3–5 yrs experience.',
    requiredSkills: ['Branding', 'design leadership', 'creative vision'],
    keyMilestones: [
      'Work as designer/illustrator.',
      'Lead small campaigns.',
      'Land art director role.',
      'Manage full creative teams.'
    ],
    timeline: '5–8 yrs.',
    resources: ['AIGA design leadership'],
    endGoal: 'Art Director → Creative Director.'
  },
  'Fashion Designer': {
    startingPoint: 'Fashion school or strong portfolio.',
    requiredSkills: ['Sketching', 'textiles', 'pattern making', 'CAD'],
    keyMilestones: [
      'Design small collection.',
      'Work with boutique brand.',
      'Show at fashion week.',
      'Lead own label.'
    ],
    timeline: '3–7 yrs.',
    resources: ['Vogue Business', 'Draping textbooks'],
    endGoal: 'Lead Designer → Brand Founder.'
  },
  'Interior Designer': {
    startingPoint: 'Interior design degree or certification.',
    requiredSkills: ['CAD', 'color theory', 'materials', 'building codes'],
    keyMilestones: [
      'Internship with design firm.',
      'Build client portfolio.',
      'Land designer role.',
      'Lead projects for commercial/residential.',
      'Start design studio.'
    ],
    timeline: '3–6 yrs.',
    resources: ['NCIDQ prep', 'Houzz'],
    endGoal: 'Senior Designer → Studio Owner.'
  },
  'Copywriter': {
    startingPoint: 'Writing samples/blog.',
    requiredSkills: ['Marketing psychology', 'SEO', 'ad copy', 'editing'],
    keyMilestones: [
      'Freelance small gigs.',
      'Land agency role.',
      'Write for big campaigns.',
      'Specialize (tech, brand).',
      'Lead copy team.'
    ],
    timeline: '1–3 yrs entry, 5+ senior.',
    resources: ['Copyhackers', 'Ogilvy on Advertising'],
    endGoal: 'Senior Copywriter → Creative Director.'
  },
  'Journalist': {
    startingPoint: 'Journalism degree/blog portfolio.',
    requiredSkills: ['Reporting', 'ethics', 'interviews', 'AP style'],
    keyMilestones: [
      'Publish freelance articles.',
      'Land reporter role.',
      'Cover major stories.',
      'Specialize in beats.',
      'Become editor/anchor.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Columbia Journalism Review'],
    endGoal: 'Senior Journalist → Editor-in-Chief.'
  },
  'Editor (Publishing)': {
    startingPoint: 'English/Lit degree + proofreading experience.',
    requiredSkills: ['Editing', 'grammar', 'publishing workflows'],
    keyMilestones: [
      'Freelance editing.',
      'Land assistant editor role.',
      'Edit books/articles.',
      'Manage authors/projects.',
      'Lead publishing division.'
    ],
    timeline: '3–6 yrs.',
    resources: ['Chicago Manual of Style'],
    endGoal: 'Senior Editor → Publishing Director.'
  },
  'Podcaster': {
    startingPoint: 'Niche idea + mic + recording software.',
    requiredSkills: ['Storytelling', 'audio editing', 'audience growth'],
    keyMilestones: [
      'Publish 10+ episodes.',
      'Grow to 1k listeners.',
      'Land sponsorship.',
      'Scale production team.',
      'Expand into media company.'
    ],
    timeline: '1–3 yrs to monetize.',
    resources: ['Podcasting guides', 'Audacity/Reaper'],
    endGoal: 'Podcaster → Media Brand Owner.'
  },
  'Voice Actor': {
    startingPoint: 'Acting/voice training + demo reel.',
    requiredSkills: ['Voice control', 'audio editing', 'character acting'],
    keyMilestones: [
      'Record demo.',
      'Freelance on Fiverr/ACX.',
      'Land agency role.',
      'Voice for games/films.',
      'Lead projects or start studio.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Voice Acting for Dummies'],
    endGoal: 'Senior Voice Actor → Studio Founder.'
  },
  'Scriptwriter': {
    startingPoint: 'Portfolio of scripts.',
    requiredSkills: ['Screenwriting format', 'storytelling', 'pitching'],
    keyMilestones: [
      'Write short films/plays.',
      'Submit to contests.',
      'Land staff writer role.',
      'Sell feature script.',
      'Become showrunner.'
    ],
    timeline: '3–7 yrs.',
    resources: ['Save the Cat', 'ScreenCraft'],
    endGoal: 'Senior Writer → Head Writer/Showrunner.'
  },
  'Creative Director': {
    startingPoint: '5–10 yrs in design/ads/media.',
    requiredSkills: ['Leadership', 'strategy', 'design/branding mastery'],
    keyMilestones: [
      'Lead major campaigns.',
      'Manage multidisciplinary teams.',
      'Shape brand strategy.'
    ],
    timeline: '8–12 yrs.',
    resources: ['Creative Leadership books'],
    endGoal: 'Creative Director → CCO/Agency Founder.'
  },
  'Digital Marketer': {
    startingPoint: 'Marketing cert or Google Ads cert.',
    requiredSkills: ['SEO', 'PPC', 'analytics', 'email', 'social media'],
    keyMilestones: [
      'Manage small campaigns.',
      'Land digital marketer role.',
      'Optimize campaigns.',
      'Lead marketing strategy.'
    ],
    timeline: '1–3 yrs entry.',
    resources: ['HubSpot', 'Google Analytics Academy'],
    endGoal: 'Senior Digital Marketer → Marketing Manager.'
  },
  'SEO Specialist': {
    startingPoint: 'Basic website/blog.',
    requiredSkills: ['Keyword research', 'on-page SEO', 'backlinks', 'analytics'],
    keyMilestones: [
      'Optimize own blog.',
      'Freelance SEO work.',
      'Land SEO role.',
      'Rank large websites.',
      'Lead SEO team.'
    ],
    timeline: '1–3 yrs.',
    resources: ['Moz', 'Ahrefs blog'],
    endGoal: 'Senior SEO → SEO Director.'
  },
  'PPC Campaign Manager': {
    startingPoint: 'Google Ads certification.',
    requiredSkills: ['PPC strategy', 'copywriting', 'A/B testing'],
    keyMilestones: [
      'Run small ad campaigns.',
      'Freelance PPC projects.',
      'Land PPC manager role.',
      'Manage big ad budgets.',
      'Lead paid media team.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Google Skillshop'],
    endGoal: 'Senior PPC → Paid Media Director.'
  },
  'Social Media Manager': {
    startingPoint: 'Create content for brand/personal account.',
    requiredSkills: ['Platforms', 'engagement', 'analytics', 'community'],
    keyMilestones: [
      'Grow small accounts.',
      'Land social media role.',
      'Run multi-platform campaigns.',
      'Lead brand’s social strategy.'
    ],
    timeline: '1–3 yrs.',
    resources: ['Hootsuite Academy'],
    endGoal: 'Senior Manager → Head of Social.'
  },
  'Marketing Analyst': {
    startingPoint: 'Stats/marketing degree + SQL/Excel.',
    requiredSkills: ['Data analysis', 'BI tools', 'attribution models'],
    keyMilestones: [
      'Build dashboards.',
      'Land analyst role.',
      'Support campaign optimization.',
      'Lead data-driven strategy.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Google Data Studio', 'Tableau'],
    endGoal: 'Senior Analyst → Marketing Strategist.'
  },
  'CRM Specialist': {
    startingPoint: 'CRM certification (Salesforce, HubSpot).',
    requiredSkills: ['CRM setup', 'workflows', 'customer segmentation'],
    keyMilestones: [
      'Configure CRM for SMEs.',
      'Land CRM role.',
      'Automate workflows.',
      'Lead CRM strategy.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Salesforce Trailhead'],
    endGoal: 'CRM Specialist → CRM Manager.'
  },
  'Sales Executive': {
    startingPoint: 'Strong communication skills + sales internship.',
    requiredSkills: ['CRM tools', 'negotiation', 'lead gen'],
    keyMilestones: [
      'Close small deals.',
      'Land sales exec role.',
      'Hit sales quotas.',
      'Lead regional accounts.'
    ],
    timeline: '1–3 yrs.',
    resources: ['Spin Selling', 'LinkedIn Sales courses'],
    endGoal: 'Senior Sales Exec → Sales Manager.'
  },
  'Business Development Manager': {
    startingPoint: 'Sales/marketing background.',
    requiredSkills: ['Market research', 'partnerships', 'strategy'],
    keyMilestones: [
      'Build partnerships.',
      'Land BDM role.',
      'Grow accounts.',
      'Lead expansion strategies.'
    ],
    timeline: '3–6 yrs.',
    resources: ['HBR business development'],
    endGoal: 'Senior BDM → VP Business Dev.'
  },
  'Market Researcher': {
    startingPoint: 'Stats/marketing background.',
    requiredSkills: ['Surveys', 'data analysis', 'competitive intelligence'],
    keyMilestones: [
      'Conduct surveys.',
      'Land researcher role.',
      'Deliver market insights.',
      'Lead research strategy.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Nielsen', 'Qualtrics'],
    endGoal: 'Senior Researcher → Research Director.'
  },
  'Product Manager': {
    startingPoint: 'Tech/business background + side project.',
    requiredSkills: ['Agile', 'product lifecycle', 'UX', 'data'],
    keyMilestones: [
      'Launch MVP.',
      'Land associate PM role.',
      'Own product features.',
      'Lead product line.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Marty Cagan’s Inspired', 'PM courses'],
    endGoal: 'Senior PM → VP Product.'
  },
  'Entrepreneur': {
    startingPoint: 'Business idea + MVP.',
    requiredSkills: ['Sales', 'fundraising', 'operations', 'marketing'],
    keyMilestones: [
      'Launch startup.',
      'Raise capital.',
      'Build product-market fit.',
      'Scale company.'
    ],
    timeline: '3–10 yrs.',
    resources: ['Y Combinator startup school'],
    endGoal: 'Startup Founder → CEO.'
  },
  'Startup Founder': {
    startingPoint: 'Problem-solving idea.',
    requiredSkills: ['Lean startup', 'pitching', 'leadership'],
    keyMilestones: [
      'Validate idea.',
      'Build team.',
      'Raise seed funding.',
      'Scale business.'
    ],
    timeline: '2–7 yrs.',
    resources: ['Lean Startup book'],
    endGoal: 'Founder → Scale-up CEO.'
  },
  'Brand Manager': {
    startingPoint: 'Marketing degree + brand internship.',
    requiredSkills: ['Branding', 'campaigns', 'consumer behavior'],
    keyMilestones: [
      'Manage small brand lines.',
      'Land brand manager role.',
      'Lead rebranding.',
      'Grow brand equity.'
    ],
    timeline: '3–6 yrs.',
    resources: ['Kotler’s Marketing Mgmt'],
    endGoal: 'Senior Brand Manager → Marketing Director.'
  },
  'Advertising Specialist': {
    startingPoint: 'Marketing/ads degree.',
    requiredSkills: ['Creative strategy', 'media buying', 'ad tools'],
    keyMilestones: [
      'Run small ad campaigns.',
      'Land ad specialist role.',
      'Manage cross-channel campaigns.',
      'Lead brand advertising.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Google Ads', 'Ad Age'],
    endGoal: 'Senior Specialist → Ad Director.'
  },
  'E-commerce Specialist': {
    startingPoint: 'Shopify/Amazon store setup.',
    requiredSkills: ['SEO', 'logistics', 'digital ads', 'CRO'],
    keyMilestones: [
      'Launch online store.',
      'Land e-commerce role.',
      'Optimize funnel.',
      'Lead multi-platform sales.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Shopify Academy'],
    endGoal: 'Senior E-com → E-commerce Manager.'
  },
  'Affiliate Marketing Manager': {
    startingPoint: 'Affiliate network basics.',
    requiredSkills: ['Partnerships', 'analytics', 'PPC', 'content'],
    keyMilestones: [
      'Manage small affiliate programs.',
      'Land affiliate role.',
      'Grow partnerships.',
      'Lead affiliate strategy.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Affiliate marketing blogs'],
    endGoal: 'Senior Affiliate Manager → Partnership Director.'
  },
  'Public Relations Specialist': {
    startingPoint: 'PR/communications degree.',
    requiredSkills: ['Media relations', 'writing', 'crisis mgmt'],
    keyMilestones: [
      'Draft press releases.',
      'Land PR role.',
      'Manage brand PR.',
      'Lead campaigns.'
    ],
    timeline: '2–5 yrs.',
    resources: ['PRSA resources'],
    endGoal: 'Senior PR → PR Director.'
  },
  'Event Manager': {
    startingPoint: 'Hospitality/management background.',
    requiredSkills: ['Event planning', 'budgeting', 'vendor mgmt'],
    keyMilestones: [
      'Manage small events.',
      'Land event manager role.',
      'Lead large conferences.',
      'Scale to international events.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Eventbrite Academy'],
    endGoal: 'Senior Event Manager → Director of Events.'
  },
  'Business Analyst': {
    startingPoint: 'Business/IT background + SQL/Excel.',
    requiredSkills: ['Requirements gathering', 'modeling', 'BI tools'],
    keyMilestones: [
      'Document requirements.',
      'Land BA role.',
      'Lead process improvements.',
      'Drive digital transformation.'
    ],
    timeline: '2–5 yrs.',
    resources: ['IIBA BABOK'],
    endGoal: 'Senior BA → Product Owner.'
  },
  'Financial Analyst': {
    startingPoint: 'Finance/accounting degree.',
    requiredSkills: ['Excel', 'financial modeling', 'valuation'],
    keyMilestones: [
      'Build models.',
      'Land analyst role.',
      'Cover industry/firm.',
      'Lead investment analysis.'
    ],
    timeline: '2–4 yrs.',
    resources: ['CFA prep', 'Wall Street Prep'],
    endGoal: 'Senior Analyst → Finance Manager.'
  },
  'Investment Banker': {
    startingPoint: 'Finance degree + internship.',
    requiredSkills: ['M&A', 'IPOs', 'modeling', 'Excel'],
    keyMilestones: [
      'Internship → analyst role.',
      'Work 2–3 yrs, move to associate.',
      'Lead deals.',
      'Become VP/MD.'
    ],
    timeline: '5–10 yrs.',
    resources: ['Breaking Into Wall Street'],
    endGoal: 'Managing Director → Partner.'
  },
  'Account Manager': {
    startingPoint: 'Sales/marketing background.',
    requiredSkills: ['Client relations', 'CRM', 'upselling'],
    keyMilestones: [
      'Manage small accounts.',
      'Land AM role.',
      'Grow client revenue.',
      'Lead strategic accounts.'
    ],
    timeline: '2–5 yrs.',
    resources: ['HubSpot CRM'],
    endGoal: 'Senior AM → Account Director.'
  },
  'Operations Manager': {
    startingPoint: 'Business/IE background.',
    requiredSkills: ['Process optimization', 'supply chain', 'KPIs'],
    keyMilestones: [
      'Land ops analyst role.',
      'Manage small team.',
      'Lead operations strategy.'
    ],
    timeline: '3–6 yrs.',
    resources: ['Operations Mgmt books'],
    endGoal: 'Senior Ops → COO.'
  },
  'Supply Chain Analyst': {
    startingPoint: 'Logistics/IE degree.',
    requiredSkills: ['ERP', 'forecasting', 'optimization'],
    keyMilestones: [
      'Build supply dashboards.',
      'Land analyst role.',
      'Optimize logistics.',
      'Lead supply strategy.'
    ],
    timeline: '2–4 yrs.',
    resources: ['APICS CSCP'],
    endGoal: 'Senior Analyst → Supply Chain Manager.'
  },
  'Paralegal': {
    startingPoint: 'Paralegal cert or law degree.',
    requiredSkills: ['Legal research', 'drafting', 'case mgmt'],
    keyMilestones: [
      'Intern in law firm.',
      'Land paralegal role.',
      'Manage case files.',
      'Lead paralegal team.'
    ],
    timeline: '2–4 yrs.',
    resources: ['NALA cert'],
    endGoal: 'Senior Paralegal → Legal Ops Manager.'
  },
  'Legal Researcher': {
    startingPoint: 'Law background.',
    requiredSkills: ['Legal databases', 'statutes', 'writing'],
    keyMilestones: [
      'Research briefs.',
      'Land researcher role.',
      'Publish legal memos.',
      'Lead legal knowledge mgmt.'
    ],
    timeline: '2–4 yrs.',
    resources: ['Westlaw', 'LexisNexis'],
    endGoal: 'Senior Researcher → Legal Counsel.'
  },
  'Compliance Officer': {
    startingPoint: 'Law/finance degree + compliance cert.',
    requiredSkills: ['Regulations', 'audits', 'risk mgmt'],
    keyMilestones: [
      'Work in compliance support.',
      'Land officer role.',
      'Lead audits.',
      'Manage compliance dept.'
    ],
    timeline: '3–6 yrs.',
    resources: ['ACAMS', 'SCCE'],
    endGoal: 'Senior Compliance Officer → CCO.'
  },
  'Litigation Support Specialist': {
    startingPoint: 'IT + law background.',
    requiredSkills: ['E-discovery', 'case mgmt tools'],
    keyMilestones: [
      'Work with legal tech.',
      'Land support role.',
      'Manage data for litigation.',
      'Lead litigation support team.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Relativity', 'ACEDS'],
    endGoal: 'Senior Specialist → Litigation Manager.'
  },
  'Corporate Lawyer Assistant': {
    startingPoint: 'Law/paralegal degree.',
    requiredSkills: ['Corporate law basics', 'contracts'],
    keyMilestones: [
      'Support M&A deals.',
      'Land assistant role.',
      'Draft contracts.',
      'Lead legal support.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Law firm guides'],
    endGoal: 'Senior Assistant → Paralegal Lead.'
  },
  'Medical Coder': {
    startingPoint: 'Healthcare cert (CPC).',
    requiredSkills: ['ICD-10', 'CPT', 'billing'],
    keyMilestones: [
      'Pass coding cert.',
      'Land coder role.',
      'Process claims.',
      'Lead coding team.'
    ],
    timeline: '1–3 yrs.',
    resources: ['AAPC CPC'],
    endGoal: 'Senior Coder → Coding Supervisor.'
  },
  'Nurse': {
    startingPoint: 'Nursing degree (BSN/ADN).',
    requiredSkills: ['Patient care', 'pharmacology', 'critical care'],
    keyMilestones: [
      'Pass NCLEX.',
      'Land RN role.',
      'Specialize (ICU, pediatrics).',
      'Lead nursing unit.'
    ],
    timeline: '3–6 yrs.',
    resources: ['NCLEX prep', 'ANA'],
    endGoal: 'RN → Nurse Practitioner/Manager.'
  },
  'Clinical Research Associate': {
    startingPoint: 'Life sciences degree.',
    requiredSkills: ['GCP', 'clinical trials', 'regulatory'],
    keyMilestones: [
      'Work in trial support.',
      'Land CRA role.',
      'Monitor trials.',
      'Lead studies.'
    ],
    timeline: '2–5 yrs.',
    resources: ['SOCRA', 'ACRP'],
    endGoal: 'Senior CRA → Clinical Project Manager.'
  },
  'Pharmacologist': {
    startingPoint: 'Pharmacy/PhD pharmacology.',
    requiredSkills: ['Drug mechanisms', 'toxicology', 'lab research'],
    keyMilestones: [
      'Work in pharma research.',
      'Publish findings.',
      'Lead drug trials.',
      'Manage R&D team.'
    ],
    timeline: '5–10 yrs.',
    resources: ['PubMed', 'ACS'],
    endGoal: 'Senior Pharmacologist → Research Director.'
  },
  'Surgical Assistant': {
    startingPoint: 'Surgical tech program.',
    requiredSkills: ['Anatomy', 'sterile techniques'],
    keyMilestones: [
      'Cert exam (NBSTSA).',
      'Land assistant role.',
      'Assist in major surgeries.',
      'Lead surgical team support.'
    ],
    timeline: '2–4 yrs.',
    resources: ['AST guides'],
    endGoal: 'Senior Assistant → OR Supervisor.'
  },
  'Radiology Technician': {
    startingPoint: 'Radiology degree/cert.',
    requiredSkills: ['Imaging equipment', 'anatomy'],
    keyMilestones: [
      'Pass ARRT exam.',
      'Land tech role.',
      'Specialize (MRI/CT).',
      'Lead imaging dept.'
    ],
    timeline: '2–4 yrs.',
    resources: ['ARRT'],
    endGoal: 'Senior Tech → Imaging Manager.'
  },
  'Public Health Specialist': {
    startingPoint: 'MPH degree.',
    requiredSkills: ['Epidemiology', 'health policy', 'biostats'],
    keyMilestones: [
      'Work in NGO/government.',
      'Lead public health projects.',
      'Influence health policy.'
    ],
    timeline: '3–6 yrs.',
    resources: ['WHO', 'CDC'],
    endGoal: 'Senior Specialist → Public Health Director.'
  },
  'Medical Records Specialist': {
    startingPoint: 'HIM degree/cert.',
    requiredSkills: ['EHR systems', 'HIPAA'],
    keyMilestones: [
      'Land records role.',
      'Manage patient data.',
      'Lead HIM dept.'
    ],
    timeline: '2–5 yrs.',
    resources: ['AHIMA'],
    endGoal: 'Senior Specialist → HIM Manager.'
  },
  'Emergency Medical Technician (EMT)': {
    startingPoint: 'EMT-Basic cert.',
    requiredSkills: ['First aid', 'trauma response'],
    keyMilestones: [
      'Pass NREMT.',
      'Land EMT role.',
      'Progress to paramedic.',
      'Lead EMT unit.'
    ],
    timeline: '1–3 yrs.',
    resources: ['EMS guides'],
    endGoal: 'EMT → Paramedic Supervisor.'
  },
  'Healthcare Administrator': {
    startingPoint: 'MHA/MBA healthcare.',
    requiredSkills: ['Hospital ops', 'budgeting', 'HR'],
    keyMilestones: [
      'Land admin role.',
      'Manage dept.',
      'Lead hospital strategy.'
    ],
    timeline: '5–10 yrs.',
    resources: ['ACHE'],
    endGoal: 'Senior Admin → Hospital CEO.'
  },
  'Physician Assistant': {
    startingPoint: 'PA program + cert.',
    requiredSkills: ['Clinical medicine', 'diagnosis', 'treatment'],
    keyMilestones: [
      'Pass PANCE.',
      'Land PA role.',
      'Specialize (surgery, ER).',
      'Lead PA team.'
    ],
    timeline: '3–6 yrs.',
    resources: ['AAPA'],
    endGoal: 'Senior PA → Lead Clinician.'
  },
  'Lab Technician': {
    startingPoint: 'Lab science degree.',
    requiredSkills: ['Lab equipment', 'procedures'],
    keyMilestones: [
      'Land tech role.',
      'Specialize (hematology, microbiology).',
      'Lead lab unit.'
    ],
    timeline: '2–5 yrs.',
    resources: ['ASCP'],
    endGoal: 'Senior Tech → Lab Manager.'
  },
  'Biostatistician': {
    startingPoint: 'Stats/biostats degree.',
    requiredSkills: ['R', 'SAS', 'epidemiology'],
    keyMilestones: [
      'Analyze trial data.',
      'Land biostat role.',
      'Publish findings.',
      'Lead biostatistics dept.'
    ],
    timeline: '3–6 yrs.',
    resources: ['Coursera biostats'],
    endGoal: 'Senior Biostatistician → Director.'
  },
  'Occupational Therapist': {
    startingPoint: 'OT degree + licensure.',
    requiredSkills: ['Therapy techniques', 'anatomy'],
    keyMilestones: [
      'Land OT role.',
      'Specialize (pediatrics, rehab).',
      'Lead therapy programs.'
    ],
    timeline: '3–6 yrs.',
    resources: ['AOTA'],
    endGoal: 'Senior OT → Therapy Director.'
  },
  'Physical Therapist': {
    startingPoint: 'DPT degree.',
    requiredSkills: ['Musculoskeletal rehab', 'exercise therapy'],
    keyMilestones: [
      'Pass NPTE.',
      'Land PT role.',
      'Specialize (sports, neuro).',
      'Lead clinic.'
    ],
    timeline: '3–7 yrs.',
    resources: ['APTA'],
    endGoal: 'Senior PT → Clinic Owner.'
  },
  'Dentist': {
    startingPoint: 'Dental degree (DDS/DMD).',
    requiredSkills: ['Anatomy', 'prosthodontics', 'surgery'],
    keyMilestones: [
      'Pass dental board.',
      'Land associate dentist role.',
      'Build patient base.',
      'Open private practice.'
    ],
    timeline: '5–10 yrs.',
    resources: ['ADA'],
    endGoal: 'Dentist → Clinic Owner.'
  },
  'Veterinarian': {
    startingPoint: 'DVM degree.',
    requiredSkills: ['Animal medicine', 'surgery'],
    keyMilestones: [
      'Pass NAVLE.',
      'Land vet role.',
      'Specialize (exotics, surgery).',
      'Open clinic.'
    ],
    timeline: '5–8 yrs.',
    resources: ['AVMA'],
    endGoal: 'Veterinarian → Clinic Owner.'
  },
  'Healthcare Data Analyst': {
    startingPoint: 'Stats/health informatics degree.',
    requiredSkills: ['SQL', 'R', 'EHR data', 'biostats'],
    keyMilestones: [
      'Analyze patient outcomes.',
      'Land analyst role.',
      'Lead predictive health analytics.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Health IT courses'],
    endGoal: 'Senior Analyst → Health Data Scientist.'
  },
  'Epidemiologist': {
    startingPoint: 'MPH/PhD epidemiology.',
    requiredSkills: ['Biostats', 'disease modeling', 'policy'],
    keyMilestones: [
      'Land epi role.',
      'Publish research.',
      'Lead outbreak investigations.'
    ],
    timeline: '3–7 yrs.',
    resources: ['CDC', 'WHO'],
    endGoal: 'Senior Epi → Public Health Director.'
  },
  'Health Informatics Specialist': {
    startingPoint: 'Health IT degree.',
    requiredSkills: ['EHRs', 'databases', 'standards (HL7)'],
    keyMilestones: [
      'Configure EHR.',
      'Land HIS role.',
      'Integrate health IT systems.',
      'Lead digital health projects.'
    ],
    timeline: '2–5 yrs.',
    resources: ['AMIA'],
    endGoal: 'Senior HIS → CIO Health IT.'
  },
  'Biomedical Engineer': {
    startingPoint: 'Biomed engineering degree.',
    requiredSkills: ['Medical devices', 'physiology', 'CAD'],
    keyMilestones: [
      'Land engineer role.',
      'Design medical devices.',
      'Lead R&D.'
    ],
    timeline: '3–6 yrs.',
    resources: ['BMES'],
    endGoal: 'Senior Engineer → R&D Director.'
  },
  'Teacher / Educator': {
    startingPoint: 'Education degree + certification.',
    requiredSkills: ['Pedagogy', 'curriculum', 'classroom mgmt'],
    keyMilestones: [
      'Student teaching.',
      'Land teacher role.',
      'Lead classroom.',
      'Become dept head.'
    ],
    timeline: '2–6 yrs.',
    resources: ['Edutopia'],
    endGoal: 'Teacher → Principal.'
  },
  'Corporate Trainer': {
    startingPoint: 'HR/education background.',
    requiredSkills: ['Instructional design', 'facilitation'],
    keyMilestones: [
      'Deliver training modules.',
      'Land trainer role.',
      'Design org-wide programs.',
      'Lead L&D team.'
    ],
    timeline: '3–6 yrs.',
    resources: ['ATD'],
    endGoal: 'Senior Trainer → L&D Manager.'
  },
  'Technical Writer': {
    startingPoint: 'Writing background + tech knowledge.',
    requiredSkills: ['Docs', 'manuals', 'APIs'],
    keyMilestones: [
      'Write user docs.',
      'Land tech writer role.',
      'Lead doc projects.',
      'Manage doc teams.'
    ],
    timeline: '2–5 yrs.',
    resources: ['Write the Docs'],
    endGoal: 'Senior Writer → Documentation Manager.'
  },
  'Research Analyst': {
    startingPoint: 'Stats/business/social science degree.',
    requiredSkills: ['Data collection', 'regression', 'reporting'],
    keyMilestones: [
      'Conduct small studies.',
      'Land analyst role.',
      'Publish reports.',
      'Lead research programs.'
    ],
    timeline: '2–5 yrs.',
    resources: ['JSTOR', 'Coursera'],
    endGoal: 'Senior Analyst → Research Lead.'
  },
  'Economist': {
    startingPoint: 'Econ degree (BA/MA).',
    requiredSkills: ['Micro/macro', 'econometrics', 'policy'],
    keyMilestones: [
      'Publish papers.',
      'Land econ role.',
      'Advise policy/business.',
      'Lead research institute.'
    ],
    timeline: '3–7 yrs.',
    resources: ['NBER', 'AEA'],
    endGoal: 'Senior Economist → Chief Economist.'
  },
  'Policy Analyst': {
    startingPoint: 'Public policy/IR degree.',
    requiredSkills: ['Policy research', 'statistics', 'gov systems'],
    keyMilestones: [
      'Intern with think tank.',
      'Land analyst role.',
      'Publish policy briefs.',
      'Advise legislation.'
    ],
    timeline: '3–6 yrs.',
    resources: ['Brookings', 'RAND'],
    endGoal: 'Senior Analyst → Policy Director.'
  },
  'Human Resource Specialist': {
    startingPoint: 'HR degree/cert (SHRM).',
    requiredSkills: ['Recruiting', 'payroll', 'labor law'],
    keyMilestones: [
      'Manage HR tasks.',
      'Land HR role.',
      'Lead recruiting/training.',
      'Manage HR strategy.'
    ],
    timeline: '2–5 yrs.',
    resources: ['SHRM'],
    endGoal: 'Senior HR → HR Manager.'
  },
  'Project Manager': {
    startingPoint: 'PMP/PRINCE2 cert + internship.',
    requiredSkills: ['Agile', 'Scrum', 'budgeting', 'risk mgmt'],
    keyMilestones: [
      'Assist on projects.',
      'Land PM role.',
      'Deliver large projects.',
      'Lead portfolios.'
    ],
    timeline: '3–7 yrs.',
    resources: ['PMI', 'Scrum.org'],
    endGoal: 'Senior PM → Program Manager/PMO Director.'
  },
};
