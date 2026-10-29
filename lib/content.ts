export const site = {
  name: 'Faiq Shariff',
  url: 'https://magicfaiq.com',
  tagline: 'Learning to build things that think.',
  email: 'faiq55@yahoo.com',
  cv: '/FaiqShariff_CV.pdf',
  links: {
    github: 'https://github.com/ifaiq',
    linkedin: 'https://linkedin.com/in/ifaiq',
    medium: 'https://medium.com/@ifaiq',
  },
};

export type Note = {
  title: string;
  date: string;
  href: string;
  summary?: string;
};

/** Posts written on this site. Empty until there is something worth publishing. */
export const notes: Note[] = [];

export type Work = {
  role: string;
  scope: string;
  points?: string[];
  stack: string[];
  earlier?: boolean;
};

export const work: Work[] = [
  {
    role: 'Lead Software Engineer',
    scope:
      'Backend for an AI platform sold to enterprise clients, deployable in the cloud and on-premise.',
    points: [
      'Multi-tenant architecture on FastAPI, Postgres and ChromaDB, with LangChain and the OpenAI API doing the retrieval and generation.',
      'Led and mentored the backend team through the first releases.',
    ],
    stack: ['FastAPI', 'Node.js', 'PostgreSQL', 'ChromaDB', 'LangChain', 'AWS'],
  },
  {
    role: 'Lead Software Engineer',
    scope:
      'Backend for a consumer app on iOS, Android and web: accounts, subscriptions, payments and a live quiz.',
    points: [
      'REST APIs for registration, subscriptions, checkout and real-time quiz play on a platform serving millions of users.',
      'Added an automated quiz and raffle system, plus the auth and payment flows behind it.',
    ],
    stack: ['Node.js', 'Nest.js', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS'],
  },
  {
    role: 'Senior Software Engineer',
    scope: 'Warehouse management system: inventory tracking, order batching and delivery routing.',
    points: [
      'Reworked the loading and routing so each route carried one more order per batch — about 10% more sales per route.',
      'Put 5,000 SKUs into the ordering app, which added roughly 20% to GMV.',
      'Set up the CI pipeline that ran builds and tests before every merge.',
    ],
    stack: ['Nest.js', 'Node.js', 'Docker', 'AWS SQS', 'AWS SNS'],
  },
  {
    role: 'Software Engineer, E-commerce',
    scope:
      'Backend for retail storefronts on Salesforce Commerce Cloud, including Canada Goose, Vineyard Vines and CPO Outlets.',
    points: [
      'Node.js services and templates behind the storefronts.',
      'Rebuilt the Jenkins and Docker pipeline; each run came out about 10 minutes shorter.',
    ],
    stack: ['Salesforce Commerce Cloud', 'Node.js', 'Express', 'Jenkins', 'Docker'],
  },
  {
    role: 'JavaScript Developer',
    scope:
      'Distributed crawlers and the ETL pipeline behind a search product. Data loading got about 25% faster.',
    stack: ['Node.js', 'Python', 'ETL'],
    earlier: true,
  },
  {
    role: 'Embedded Systems & IoT Engineer',
    scope:
      'Firmware for an IoT device with sensors and a radio, plus the mobile app and backend services that collected its readings.',
    stack: ['C', 'Python', 'Cloud services'],
    earlier: true,
  },
];

export type Topic = {
  title: string;
  body: string;
};

export const exploring: Topic[] = [
  {
    title: 'AI in working software',
    body: 'What a feature costs to run, how it fails, and when a simpler design is the better answer.',
  },
  {
    title: 'System complexity',
    body: 'How much of it a product actually needs, and which parts earn their keep.',
  },
  {
    title: 'Training',
    body: 'Fitness and strength training, kept separate from work.',
  },
];
