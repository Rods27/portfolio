import { commons } from './commons';

const translate = {
  header: {
    contact: 'get in touch',
  },
  hero: {
    sections: {
      title: 'Frontend Developer',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      project: 'Projects',
      words: [
        "Hi, The Name's Rodrigo",
        'A good team-worker',
        'Coffee.tsx',
        '<Component props={...caffeine}/>',
      ],
    },
  },
  about: {
    pageTitle: 'about',
    title: 'Here is a',
    underlineTitle: 'little',
    secondtitle: 'background',
    text: 'Background about me',
    about:
      'I am passionate about Technology and coding, im extremely dedicated and determined, i like to see applications more as a client than as a programmer, so i can optimize them with excellence.\nSoftware developer, Front-end, React, JavaScript, Typescript',
  },
  experience: {
    title: 'Experience',
    companies: [
      {
        src: 'webmotors',
        role: 'Frontend Developer',
        companyName: 'webmotors',
        tecnologies: ['javascript'],
        start: '21 sep 2021',
        atributes: [
          'Experience in creating and enhancing features for a Customer Relationship Management (CRM) system at Webmotors. Specialized in the ReactJS ecosystem.',
          'Proficient in technologies such as Javascript, Redux, Redux-Saga, Styled Components, Axios, Webpack, and Typescript.',
          'Integration with DevOps tools like Jenkins, Bitbucket, GitHub, and project management following Scrum and Agile methodologies.',
          'Creation of technical solutions for frontend features according to Figma, and platform support problems.',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    info: 'Hover over a skill for currency proficiency',
    stacks: commons.stacks,
  },
};

export default translate;
