export const experience = [
  {
    company: 'Derivitec Ltd',
    location: 'London',
    title: 'Founding Engineer & Product Lead (later CTO)',
    dateRange: '2017 - Present',
    overview:
      'Joined a two-person fintech startup with an unstable prototype and unclear roadmap, then built it into a secure, scalable production platform for near real-time risk and portfolio management.',
    sections: [
      {
        title: 'Key Impact',
        items: [
          'Supported 400+ users across 20+ institutions, improving decision speed and confidence as real-time risk adoption scaled.',
          'Re-architected risk computation from a single webserver to a horizontally scaled fan-out architecture, reaching 120 vCPU / 400 GB baseline and 1,500 vCPU / 6 TB peak, while isolating client workloads.',
          'Processed trillions of risk calculations daily across production workloads.',
          'Transformed overnight end-of-day risk reporting (up to 30-minute runs) into near real-time risk analysis with live price feeds, enabling real-time trading decisions.',
          'Replaced poorly safeguarded manual deployments with CI-driven delivery, quality controls, and human approval gates, enabling production deployment in about one hour from code push.',
          'Delivered 50%+ AWS cost reduction via a three-stage migration: Microsoft to Linux, EC2 to EKS, then Intel to ARM.',
          'Executed the multi-repo Intel-to-ARM transition in under one week with minimal downtime.',
        ],
      },
      {
        title: 'Product & Technical Execution',
        items: [
          'Defined product strategy from early concept through launch and iteration, balancing client impact, technical feasibility, and delivery speed.',
          'Built a discovery-to-production operating rhythm with rapid feedback loops, clear quality gates, and predictable delivery.',
          'Partnered across engineering, research, product, and design to translate complex technical capabilities into usable client workflows and high-value releases.',
          'Implemented infrastructure-as-code, production-derived automated testing, and release safeguards to increase deployment confidence.',
          'Implemented client-facing reporting with an infinite-scale Druid + AG Grid pivot and lazy loading, enabling responsive custom aggregation on 100k+ row institutional reports.',
          'Applied Codex across product re-engineering, infrastructure automation, and CI/CD hardening, driving a 10x engineering delivery performance gain and faster feature rollout.',
        ],
      },
    ],
  },
  {
    company: 'Verisk Specialty Business Solutions',
    location: 'London',
    title: 'Solutions Architect',
    dateRange: '2016 - 2017',
    overview:
      'Led cross-functional stabilization work to improve reliability across insurance software products.',
    highlights: [
      'Led product-engineering alignment on a claims reliability roadmap, improving release confidence.',
      'Implemented regression automation and standardized release workflows to reduce escaped defects and improve delivery predictability.',
    ],
  },
  {
    company: 'Bedrock RealTime SA',
    location: 'London',
    title: 'Agile Team Leader',
    dateRange: '2013 - 2016',
    overview: 'Led post-acquisition productization of portfolio tooling to support broader client rollout.',
    highlights: [
      'Led rollout of the Stanhope-built platform to Bedrock RealTime SA clients, improving reporting visibility and data accuracy.',
      'Automated core workflows and delivered a client portal to improve onboarding and self-service.',
    ],
  },
  {
    company: 'Stanhope Capital',
    location: 'London',
    title: 'Senior Developer',
    dateRange: '2008 - 2013',
    overview: 'Built portfolio management and reporting capabilities that improved control across investment operations.',
    highlights: [
      'Implemented APX portfolio management and bespoke OMS capabilities aligned to investment operations.',
      'Built reconciliation, transaction loading, and Bloomberg pricing integrations to improve data quality and operational reliability.',
    ],
  },
  {
    company: 'BlueCrest Capital Management',
    location: 'London',
    title: 'Associate, Middle-Office Derivatives',
    dateRange: '2006 - 2008',
    overview: 'Automated middle-office derivatives processes to reduce operational risk and improve process reliability.',
    highlights: [
      'Automated reconciliation, fee workflows, and expiry processing to improve settlement accuracy and reliability.',
      'Built electronic blotter and broker confirmation tooling to improve trade transparency and control.',
    ],
  },
  {
    company: 'J.P. Morgan Asset Management',
    location: 'London',
    title: 'Data Analyst',
    dateRange: '2005 - 2006',
    overview: 'Improved data operations by automating static data and reconciliation workflows.',
    highlights: [
      'Automated static data intake, improving data quality and turnaround time.',
      'Automated futures reconciliation to reduce breaks, manual effort, and operational exceptions.',
    ],
  },
]
