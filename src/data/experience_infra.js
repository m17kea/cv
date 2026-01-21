export const experience = [
  {
    company: 'Derivitec Ltd',
    location: 'London',
    title: 'CTO',
    dateRange: 'January 2017 - Present',
    overview:
      'Joined when Derivitec was a two-person startup led by mathematicians, with an unstable product and a manually deployed public EC2 instance. Built the engineering function, shaped the product roadmap with stakeholders, and transformed the platform into a secure, automated, and scalable AWS architecture for near real-time risk and portfolio management.',
    achievementsIntro:
      'As CTO, I led a zero-to-one platform rebuild, established modern engineering practices, and delivered measurable gains in scale and reliability, reducing risk calculation time dramatically while keeping cloud spend controlled through platform modernization and Codex-driven optimization.',
    achievements: [
      {
        label: 'Secure cloud foundation',
        detail:
          'Replaced ad-hoc deployments with infrastructure-as-code, implemented AWS Well-Architected security and reliability pillars, and introduced automated, repeatable environments.',
      },
      {
        label: 'Developer workflows',
        detail:
          'Implemented source control, CI/CD, release quality gates, and standardized delivery workflows across teams.',
      },
      {
        label: 'Platform modernization',
        detail:
          'Migrated from Windows licensing to cross-platform .NET on Linux, reducing cost and improving portability.',
      },
      {
        label: 'Data layer transformation',
        detail:
          'Migrated from SQL Server to Postgres, improved query performance, and strengthened data security and auditing.',
      },
      {
        label: 'Reliable test environments',
        detail:
          'Automated test environments from production backups with anonymization (client identifiers replaced with code names) to enable safe, repeatable releases.',
      },
      {
        label: 'Reporting and analytics',
        detail:
          'Built live reporting systems, migrated report storage to S3, and orchestrated PnL/VaR calculations via AWS Step Functions.',
      },
      {
        label: 'Agentic acceleration',
        detail:
          'Used Codex to shift effort from ad-hoc releases to repeatable automation, deliberately delaying minor features to harden core workflows.',
      },
      {
        label: 'Client integrations',
        detail:
          'Led integrations with Bloomberg for live pricing plus Enfusion OMS and Orchestrade to expand client-facing capabilities; later delivered FundStudio, Maia, and Liquidity Book integrations with Codex.',
      },
      {
        label: 'Containerization and scale',
        detail:
          'Dockerized services and migrated to Kubernetes using Codex, delivering elastic compute for near real-time risk calculations.',
      },
      {
        label: 'Cost leadership',
        detail:
          'Used Codex with the AWS CLI, Cost and Usage Report (CUR) data, and a Git repo to analyze cloud spend, identify 25%+ savings, and implement them over time.',
      },
      {
        label: 'ARM migration',
        detail:
          'Used Codex to lead a coordinated multi-repo Intel to ARM migration in under a week, deployed over a weekend with minimal manual intervention.',
      },
    ],
    impact:
      'Impact: Turned a two-person prototype into a secure, scalable risk platform with minutes-to-seconds latency.',
  },
  {
    company: 'Sequel Business Solutions',
    location: 'London',
    title: 'Solutions Architect',
    dateRange: 'January 2016 - January 2017',
    overview:
      'Verisk Specialty Business Solutions (formerly Sequel Business Solutions) has been a leading industry software specialist for over 25 years, delivering impactful, reliable solutions that provide end-to-end management of insurance and reinsurance operations.',
    highlights: [
      'Rebuilt developer workflows across source control, CI/CD, and automated deployments using infrastructure-as-code.',
      'Implemented automated and parallel testing with Selenium regression coverage to accelerate feedback cycles.',
      'Stabilized the Claims product through agile delivery practices, quality gates, and tighter product ownership.',
    ],
  },
  {
    company: 'BRT',
    location: 'London',
    title: 'Agile Team Leader',
    dateRange: 'November 2013 - January 2016',
    overview:
      'BRT is a multi-award-winning provider of business process outsourcing and bespoke software solutions for wealth managers, independent asset managers, funds, private banks, and trust companies.',
    highlights: [
      'Implemented a modern delivery stack for planning, source control, and CI/CD.',
      'Engineered automated ingestion and translation of multi-source custodian data.',
      'Engineered core data platforms for fund dealing and client reporting.',
      'Automated operational workflows with task orchestration and legacy system sync.',
      'Delivered shared identity services and a client-facing reporting portal.',
    ],
  },
  {
    company: 'Stanhope Capital',
    location: 'London',
    title: 'Senior Developer',
    dateRange: 'July 2008 - October 2013',
    overview:
      'Stanhope Capital is a global investment office providing investment management and advisory services to private clients, charities and endowments. Based in London, Geneva, and Jersey, Stanhope is now one of the largest private investment offices in Europe, overseeing 9.5bn+ in assets.',
    highlights: [
      'Implemented APX portfolio management system.',
      'Engineered client reporting and MIS views.',
      'Engineered reconciliation and transaction loaders.',
      'Engineered Bloomberg price feed integration.',
      'Engineered bespoke OMS platform.',
    ],
  },
  {
    company: 'Bluecrest',
    location: 'London',
    title: 'Associate Middle-Office Derivatives',
    dateRange: 'July 2006 - July 2008',
    overview:
      'BlueCrest Capital Management Limited (BCML) is an alternative asset management business based in Jersey, managing significant institutional assets across a number of diversified strategies.',
    highlights: [
      'Automated futures reconciliation and broker fee workflows.',
      'Automated futures and options expiry workflows.',
      'Engineered electronic blotter and broker confirmation tooling.',
    ],
  },
  {
    company: 'JP Morgan Asset Management',
    location: 'London',
    title: 'Data Analyst',
    dateRange: 'January 2005 - July 2006',
    overview:
      'J.P. Morgan Asset Management is a leading asset manager for individuals, advisors and institutions. It is one of the largest asset and wealth managers in the world, with $1.7T in assets under management.',
    highlights: ['Automated static data entry workflows.', 'Automated futures reconciliation processes.'],
  },
]
