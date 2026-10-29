export const site = {
  name: 'Faiq Shariff',
  url: 'https://magicfaiq.com',
  tagline: 'Learning to build things that think.',
  email: 'faiq55@yahoo.com',
  links: {
    github: 'https://github.com/ifaiq',
    linkedin: 'https://linkedin.com/in/ifaiq',
    medium: 'https://medium.com/@ifaiq',
  },
};

export type Engagement = {
  name: string;
  problem: string;
  description: string;
};

export const current: Engagement[] = [
  {
    name: 'A tool for managers and their teams',
    problem:
      'Goals and feedback lived in spreadsheets and email. Nobody read them until review season, and then everyone wrote a year of notes in a week.',
    description:
      'We built the part that keeps goals and check-ins in one place, and keeps them private. It handles sign-ins and payments, and it uses AI to help write the feedback nobody wants to write. I decided how the pieces fit together.',
  },
  {
    name: 'A WhatsApp helper for a gas company',
    problem:
      'Customers ask for help on WhatsApp, usually with a voice note or a blurry photo of a bill. Someone had to listen to it, type it out, find the account, and copy a bill number across by hand.',
    description:
      'Our system reads the message, looks up the customer, and answers. Voice notes become text, and photos get checked before they go anywhere.',
  },
  {
    name: 'A quoting tool for electrical equipment',
    problem:
      'A quote depends on a pile of rules: one choice changes the next one. Most of those rules lived in a few people\u2019s heads, so quotes were built by hand, slowly, and checked twice.',
    description:
      'We built the part that takes the order, works through the choices, checks it with AI, and builds the quote. The rules live in software now, where they can be tested.',
  },
];

export const lately = [
  'How much AI a product really needs, and when a plain feature is the better answer.',
  'Keeping software simple enough that someone new can understand it.',
  'The gym, which has nothing to do with the other two.',
];

export type Testimonial = {
  /** What they said. Keep it short and specific. */
  text: string;
  /** Who said it. A role is enough: "Engineering lead, client project". */
  who: string;
};

/** The homepage shows these once there is at least one. */
export const testimonials: Testimonial[] = [];