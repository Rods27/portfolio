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
        'Hi, my name is Rodrigo',
        'Coffee lover',
        'Coffee.tsx',
        '<Component props={...coffe} />',
      ],
    },
  },
  about: {
    pageTitle: 'about',
    title: 'Here is a',
    underlineTitle: 'little',
    secondtitle: 'background',
    text: 'Background about me',
    about: `
    I'm a Front-end Developer with four years of experience, specialized in React, JavaScript, and TypeScript.

    I've worked on a variety of projects, including a large-scale CRM platform focused on customer and lead relationship management. The project was designed to be scalable, robust, modern, and fully tested.
    I've also contributed to projects involving micro-frontends, performance optimization, and Design System implementation.

    Im very good at team working, having worked with large teams and cross-squad initiatives. I’m agile, autonomous, and highly focused on code quality and delivering results.`,
  },
  experience: {
    title: 'Experience',
    companies: [
      {
        src: 'webmotors',
        role: 'Frontend Developer',
        companyName: 'webmotors',
        tecnologies: commons.stacks
          .map((e) => e.skill)
          .filter((e) => !['html', 'css', 'sass', 'tailwind'].includes(e)),
        start: '21 sep 2021 - Until Now - 4 years',
        atributes: [
          'Experience in creating and enhancing features for a Customer Relationship Management (CRM) system at Webmotors. Specialized in the ReactJS ecosystem.',
          'Proficient in technologies such as Javascript, Redux, Redux-Saga, Styled Components, Axios, Webpack, and Typescript.',
          'Integration with DevOps tools like Jenkins, Bitbucket, GitHub, and project management following Scrum and Agile methodologies.',
          'Creation of technical solutions for frontend features according to Figma, and platform support problems.',
          'Development of scalable micro-frontends to parallelize the project and increase delivery agility.',
          'Project maintenance and continuous updates, focusing on performance and adoption of more robust, modern technologies',
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    info: 'Hover over a skill for current proficiency',
    stacks: commons.stacks,
  },
  projects: {
    title: 'Projects',
    projects: [
      {
        title: 'Musics Library',
        info: [
          "An application to play and choose your favorite musics, you can listen a preview or be redirected to deezer's website and listen the complete version.",
          'You can filter by genre, artist and album too.',
        ],
        src: 'musicsLibrary',
        link: 'https://github.com/Rods27/musics-library',
        favicon: 'musicsLibrary',
      },
      {
        title: 'Delivery App',
        info: [
          'An application that simulates a beverage shopping website. The user can sign up, choose drinks from the products page, select their address on the checkout page, check their orders on the orders page, and mark the order as delivered.',
          "As a seller, they can check their orders and mark them as 'preparing' or 'out for delivery'. As an admin, they can register or delete users.",
        ],
        src: 'deliveryApp',
        link: 'https://github.com/Rods27/delivery-app',
        favicon: 'deliveryApp',
      },
      {
        title: 'Post Book',
        info: [
          'A simple project just for rendering posts, post details, and favorites.',
          'Includes infinite scrolling.',
        ],
        src: 'postbook',
        link: 'https://github.com/Rods27/postbook',
        favicon: 'postbook',
      },
    ],
  },
  contact: {
    title: 'Contact',
    subtitle: 'I have got just what you need.',
    contact: 'Lets talk.',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
    submit: 'Send',
  },
};

export default translate;
