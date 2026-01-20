export const experience = [
  {
    company: 'Derivitec Ltd',
    location: 'London',
    title: 'CTO',
    dateRange: 'January 2017 - Present',
    overview:
      'Founded in Dec 2011, the company has been working intensively towards cloud-based solutions for risk and portfolio management. Our products have been designed to allow users to start analysing risk on their derivatives portfolios in a matter of minutes. With industrial standard models and sanitised market data as standard, customers can focus on the business of business, while we concentrate on the business of risk.',
    achievementsIntro:
      'As the Chief Technology Officer (CTO) at Derivitec Ltd, I have led numerous initiatives to enhance the company\'s technological infrastructure and service offerings. My key achievements include:',
    achievements: [
      {
        label: 'Infrastructure modernization',
        detail:
          'Transitioned the company\'s systems to cloud-based solutions, including migrating to AWS services, implementing Kubernetes clusters, and moving applications to Kubernetes environments.',
      },
      {
        label: 'Software development enhancements',
        detail:
          'Upgraded applications through multiple .NET versions, culminating in .NET 9, and transitioned to .NET Core for cross-platform compatibility. Implemented dependency injection, automated acceptance testing with Selenium, and integrated feature flag systems to improve development efficiency and software quality.',
      },
      {
        label: 'Data management and security',
        detail:
          'Migrated databases from MS SQL to MySQL and later to Aurora Postgres, implemented database auditing, optimized queries, and ensured compliance with GDPR requirements. Enhanced security by upgrading to TLS 1.3, implementing client IP whitelisting, and adopting AWS Secrets for configuration management.',
      },
      {
        label: 'CI/CD',
        detail:
          'Established standardized developer setups, configured CI/CD pipelines, and transitioned to AWS CodePipeline to streamline deployment processes.',
      },
      {
        label: 'Client integration and services',
        detail:
          'Led integration projects with services like Bloomberg for live pricing, Enfusion OMS, and Orchestrade, enhancing the company\'s service offerings and client engagement.',
      },
      {
        label: 'Reporting and analytics',
        detail:
          'Developed live reporting systems, migrated report storage to S3, and utilized AWS State Machines for PnL and VAR report calculations, improving the company\'s analytical capabilities.',
      },
      {
        label: 'Regulatory compliance and best practices',
        detail:
          'Ensured adherence to UK Official guidelines by migrating AWS resources using Infrastructure as Code (IAC) with CloudFormation and later transitioning to the AWS Cloud Development Kit (CDK).',
      },
    ],
    impact:
      'These accomplishments have significantly advanced Derivitec\'s technological capabilities, contributing to the company\'s growth and its ability to deliver high-performance, cost-effective analytics for the derivatives industry.',
  },
  {
    company: 'Sequel Business Solutions',
    location: 'London',
    title: 'Solutions Architect',
    dateRange: 'January 2016 - January 2017',
    overview:
      'Verisk Specialty Business Solutions (formerly Sequel Business Solutions), has been a leading industry software specialist for over 25 years, delivering impactful, reliable solutions that provide end-to-end management of all insurance and reinsurance business.',
    projects: [
      {
        name: 'DevOps',
        description:
          'When I joined Sequel they were using several different source control, build, test, deployment and project management systems which slowed velocity and impacted quality. I lead the formation of a new strategy which is being rolled out across the company.',
        stack: 'TFS, Git, Powershell, C#',
        bullets: [
          'Presented management cost benefit analysis of a unified system.',
          'Moved build, test and deployment strategies to the new vNext build and release management in TFS.',
          'Introduced infrastructure-as-code and templated deployment scripts to build servers and configure application requirements automatically.',
          'Automated spin up/down of build and test farm of hundreds of servers.',
          'Automated in-house deployments.',
        ],
      },
      {
        name: 'Claims',
        description:
          'Claims was one of the newest products at Sequel and in its early life it became one of the most popular. However, due to the speed at which it was engineered a lot of technical debt had built up and the product\'s stability was very poor. This had led to client complaints and I was assigned to lead the development team and get quality under control.',
        stack: 'TFS, Git, Powershell, C#, Typescript, Angular.js, Selenium, Jasmin',
        bullets: [
          'Educated the team on the formal Scrum methodology, clean coding and SOLID design principles.',
          'Assumed the role of Scrum master and concentrated primarily on removing hindrances to productivity.',
          'Assigned a product owner to lead priorities of bug fixes and new requirements to maximise client satisfaction.',
          'Enforced daily standups to encourage communication and understanding of product goals for the development team.',
          'Implemented a feature branch and pull request process to ensure code could not be merged into the product without passing 100 percent of tests.',
          'Implemented continuous delivery to build, test and deploy Claims automatically.',
          'Implemented parallel testing capabilities to reduce overall test times, providing feedback to developers five times faster than before.',
          'Introduced a Selenium testing framework to automate manual regression testing.',
          'Dramatically increased velocity and the overall quality of the product.',
        ],
      },
    ],
  },
  {
    company: 'BRT',
    location: 'London',
    title: 'Agile Team Leader',
    dateRange: 'November 2013 - January 2016',
    overview:
      'BRT is a multi-award winning provider of business process outsourcing and bespoke software solutions for wealth managers, independent asset managers, funds, private banks and trust companies.',
    projects: [
      {
        name: 'DevOps',
        description:
          'When I joined BRT there was no source control, no concept of project management and no devops. These were the first things that I put in place.',
        stack: 'Redmine, Gitlab, Thoughtworks Go',
        bullets: [
          'Introduced Scrum, sprints and sprint planning.',
          'Introduced project management (Redmine), source control (Gitlab) and continuous integration (Thoughtworks Go).',
          'Discouraged outsourcing in favour of co-location.',
          'Introduced code reviews and style guides.',
        ],
      },
      {
        name: 'Custodian Data',
        description:
          "BRT's clients receive data files from many sources containing transaction, position and market data. The purpose of the project was to simplify the gathering, extraction and processing of this data.",
        stack: 'Windows services, C#, Entity Framework, Autofac, SqlServer.Smo, QuickFix',
        bullets: [
          'Code-first Entity Framework database for FTP and file extraction configuration.',
          'Replaced SSIS with delimited, XML and Excel to SQL translators.',
          'Rule based data translator to unify transaction data and position data for automated transaction entry and reconciliation.',
          'FIX protocol communication for trade confirmations.',
          'Trade posting services to multiple portfolio management systems.',
        ],
      },
      {
        name: 'Fund Dealing Database',
        description:
          "BRT's clients trade mainly in funds and require reliable centralised dealing information about a funds dealing times, minimum subscriptions and many other data points.",
        stack:
          'C#, Entity Framework, Autofac, Web Api, Breeze.js, Require.js, Angular.js, Typescript, HTML5, Less',
        bullets: [
          'Code-first database to house data relating funds.',
          'N-tier architecture with database, data access, business logic and api layers.',
        ],
      },
      {
        name: 'Client Reporting',
        description:
          "BRT's client reporting solutions were engineered on a client by client basis and there was no consistency between entities and the databases driving them. The purpose of this project was to create a unified reporting database that could be populated from any of the three portfolio management systems in use and any future ones.",
        stack: 'Windows services, C#, Entity Framework, Autofac, Web Api, SSRS',
        bullets: [
          'Code-first database to house data relating to CRM, portfolios, instruments, pricing, trading, reporting, reconciliation and user workflow.',
          'N-tier architecture with database, data access, business logic and api layers.',
          'Generic task running platform to allow blocks of code to be run in a workflow with set sequences and priorities to monitor and maintain performance calculation and report data extraction.',
          'Generic sync tool to gather data from the legacy system.',
        ],
      },
      {
        name: 'Single Sign-On',
        description:
          "BRT's legacy systems had individual authentication and role management systems. The purpose of this project was to create a single sign-on application that handled authentication and role management across all existing and future BRT applications.",
        stack:
          'C#, Entity Framework, Autofac, Web Api, ASP.Net Identity, Thinktecture IdentityServer, WebApi, MVC, Razor',
        bullets: ['Implemented Thinktecture\'s identity server version 2.', 'Upgraded to version 3 in 2015.'],
      },
      {
        name: 'Client Reporting Portal',
        description:
          "Leveraging the client reporting database and single sign-on I created a prototype for a client portal for our client's clients. This was quickly marketed as our flagship new offering.",
        stack: 'Breeze.js, Require.js, Angular.js, Typescript, HTML5, Less',
        bullets: ['HTML client reports.', 'Documents portal.', 'Manager chat.'],
      },
    ],
  },
  {
    company: 'Stanhope Capital',
    location: 'London',
    title: 'Senior Developer',
    dateRange: 'July 2008 - October 2013',
    overview:
      'Stanhope Capital is a global investment office providing investment management and advisory services to private clients, charities and endowments. Based in London, Geneva, and Jersey, Stanhope is now one of the largest private investment offices in Europe, overseeing over 9.5bn in assets.',
    projects: [
      {
        name: 'Projects',
        stack:
          'VBA, C#, LINQ to SQL, MVC, Razor, jQuery, Javascript, HTML5, CSS, SQL, SSRS, SSIS',
        bullets: [
          'APX portfolio management system implementation.',
          'Client reporting.',
          'Reconciliation.',
          'Bloomberg price feeds.',
          'Transaction loaders.',
          'MIS views.',
          'Trading platform with order management.',
        ],
      },
    ],
  },
  {
    company: 'Bluecrest',
    location: 'London',
    title: 'Associate Middle-Office Derivatives',
    dateRange: 'July 2006 - July 2008',
    overview:
      'BlueCrest Capital Management Limited (BCML) is an alternative asset management business based in Jersey, managing significant institutional assets across a number of diversified strategies.',
    projects: [
      {
        name: 'Projects',
        stack: 'VBA, VB.Net, SQL',
        bullets: [
          'Future reconciliation.',
          'Future and option expiry automation.',
          'Broker fee automation.',
          'Electronic blotter.',
          'Electronic broker confirmation.',
        ],
      },
    ],
  },
  {
    company: 'JP Morgan Asset Management',
    location: 'London',
    title: 'Data Analyst',
    dateRange: 'January 2005 - July 2006',
    overview:
      'J.P. Morgan Asset Management is a leading asset manager for individuals, advisors and institutions. It is one of the largest asset and wealth managers in the world, with assets under management of 1.7 trillion.',
    projects: [
      {
        name: 'Projects',
        stack: 'VBA',
        bullets: ['Static data entry automation.', 'Future reconciliation.'],
      },
    ],
  },
]
