import { commons } from './commons';

const translate = {
  header: {
    contact: 'contato',
  },
  hero: {
    sections: {
      title: 'Desenvolvedor Frontend',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Habilidades',
      project: 'Projetos',
      words: [
        'Oi, meu nome é Rodrigo',
        'Amante de um bom café',
        'Cafe.tsx',
        '<Componente props={...cafezinho} />',
      ],
    },
  },
  about: {
    pageTitle: 'sobre',
    title: 'Um',
    underlineTitle: 'pouco',
    secondtitle: 'sobre mim',
    text: 'Texto sobre mim',
    about: `
      Sou um desenvolvedor frontend com quatro anos de experiência, especializado em React e Javascript e Typescript.

      Atuação em diversos projetos, dentre eles, um grande projeto de CRM focado em um relacionamento entre cliente e lead, grande e escalável usando tecnologias modernas e robustas, totalmente testado. Atuei em outros projetos em focados micro-frontend, performance e Design System.

      Ótimo com trabalho em equipe, já trabalhei com times grandes, demandas entre diferentes times, entregas desde pequenas até grandes, sou muito ágil e autônomo, focado em qualidade e resultado.`,
  },
  experience: {
    title: 'experiência',
    companies: [
      {
        src: 'https://scontent.fcgh17-1.fna.fbcdn.net/v/t39.30808-1/454568079_917189500441807_2169592769897266168_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=f907e8&_nc_ohc=7-XAXXAn3FgQ7kNvwFxI3DK&_nc_oc=AdnqLxAc60cECNH1Tmrd9-w7vV-Y6Yg2OjdBpGQueW7f6VFmtEXQASopmEI2VvLzefy9b1ntFj-J-Hwa81oZk1T-&_nc_zt=24&_nc_ht=scontent.fcgh17-1.fna&_nc_gid=v4uyucStS-Rf_LO3EjCK4g&oh=00_AfS-laSZnCxV7E0VX3T4eyDUlodjEeOZcaDxFyTELIc3nQ&oe=68701051',
        role: 'Desenvolvedor Frontend',
        companyName: 'webmotors',
        tecnologies: commons.stacks
          .map((e) => e.skill)
          .filter((e) => !['html', 'css', 'sass', 'tailwind'].includes(e)),
        start: '21 set 2021 - 4 anos',
        atributes: [
          'Experiencia em criar e aperfeiçoar features em um sistema CRM para a Webmotors, usando ReactJS.',
          'Proficiente em tecnologias como Javascript, Redux, Redux-Saga, Styled Components, Axios, Webpack e Typescript.',
          'Usando ferramentas CI/CD como Jenkins, Bitbucket, GitHub, e ferramentas como Jira para seguir princípios Agile.',
          'Criação de soluções tecnicas para demandas frontend de acordo com Figma, e sustentação de problemas da plataforma.',
          'Criação de micro-frontends escaláveis para paralelizar o projeto e aumentar a agilidade',
          'Atualização e manutenção do projeto, visando performance e tecnologias mais robustas do mercado',
        ],
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    info: 'Paire o mouse sobre uma habilidade para ver sua proficiência',
    stacks: commons.stacks,
  },
  projects: {
    title: 'Projetos',
    projects: [
      {
        title: 'Musics Library',
        info: [
          'Um projeto feito para escutar músicas e salvá-las como favoritas, além disso, pode escutar o preview de 30 segundos, ou ser direcionado para o site da deezer e ouvir a versao completa.',
          'Também pode fitrar pelo genero, artista ou album.',
        ],
        src: 'musicsLibrary',
        link: 'https://github.com/Rods27/musics-library',
        favicon: 'musicsLibrary',
      },
      {
        title: 'Delivery App',
        info: [
          'Uma aplicação que simula um site de compra de bebidas, o usuário pode se cadastrar, escolher as bebidas da tela de produtos, escolher seu endereço na tela de checkout, checar suas ordens na tela de ordens, marcar seu pedido caso seja entregue.',
          'Como vendedor pode checar suas ordens, marcar o pedido como "preparando" e como "saiu para entrega". Como administrador, pode cadastrar ou deletar usuários.',
        ],
        src: 'deliveryApp',
        link: 'https://github.com/Rods27/delivery-app',
        favicon: 'deliveryApp',
      },
      {
        title: 'Post Book',
        info: [
          'Um projeto simples apenas para renderização de post, detalhe de post e favoritos.',
          'Contém infinite scrolling.',
        ],
        src: 'postbook',
        link: 'https://github.com/Rods27/postbook',
        favicon: 'postbook',
      },
    ],
  },
  contact: {
    title: 'Contato',
    subtitle: 'Sou o profissional que você busca?',
    contact: 'Entre em contato.',
    form: {
      name: 'Nome',
      email: 'Email',
      subject: 'Titulo',
      message: 'Mensagem',
    },
    submit: 'Enviar',
  },
};

export default translate;
