interface Book {
  id: number;
  title: string;
  resume: string;
  image: string;
  pages: Page[];
  author: number;
  categories: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface Category {
  id: number;
  label: string;
}

interface Page {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string[];
}

export const books: Book[] = [
  {
    id: 0,
    title: 'My fist book',
    resume: 'This is a beatiful resume of my first book',
    image: '',
    pages: [
      {
        id: 0,
        title: 'My fist page',
        content: 'This is a beatiful resume of my first page',
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
      {
        id: 1,
        title: 'My second page',
        content: 'This is a tech page',
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
    ],
    author: 2,
    categories: ['Tech'],
    createdAt: new Date(12 / 10 / 2045),
    updatedAt: new Date(12 / 20 / 2045),
  },
  {
    id: 0,
    title: 'How to turn your computer on',
    resume: 'TThis is a tutorial of how to turn your computer on',
    image: '',
    pages: [
      {
        id: 0,
        title: 'Buy a computer',
        content:
          "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker. Pourquoi l'utiliserOn sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
      {
        id: 1,
        title: 'Install a computer',
        content:
          "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du 'De Finibus Bonorum et Malorum' (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, 'Lorem ipsum dolor sit amet...', proviennent de la section 1.10.32.",
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
    ],
    author: 2,
    categories: ['Tech', 'NodeJs'],
    createdAt: new Date(12 / 10 / 2045),
    updatedAt: new Date(12 / 20 / 2045),
  },
  {
    id: 1,
    title: 'My second book',
    resume: 'This second tech book',
    image: '',
    pages: [
      {
        id: 0,
        title: 'My fist page',
        content: 'Turn your computer on',
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
      {
        id: 1,
        title: 'My second page',
        content: 'turn it off...',
        createdAt: '12/10/2045',
        updatedAt: '23/23/3544',
      },
    ],
    author: 1,
    categories: ["Tech"],
    createdAt: new Date(12 / 10 / 2045),
    updatedAt: new Date(12 / 20 / 2045),
  },
];

export const categories: Category[] = [
  {
    id: 0,
    label: 'Services',
  },
  {
    id: 1,
    label: 'Tech',
  },
  {
    id: 2,
    label: 'NodeJs',
  },
  {
    id: 3,
    label: 'Back-end',
  },
];

export const pages: Page[] = [
  {
    id: 0,
    title: 'My fist page',
    content: 'This is a beatiful resume of my first page',
    createdAt: '12/10/2045',
    updatedAt: '23/23/3544',
  },
  {
    id: 1,
    title: 'My fist page',
    content: 'This is a tech page',
    createdAt: '12/10/2045',
    updatedAt: '23/23/3544',
  },
];

export const users: User[] = [
  {
    id: 0,
    firstname: 'John',
    lastname: 'Doe',
    email: '7sB1j@example.com',
    password: '123456',
    role: ['User'],
  },
  {
    id: 1,
    firstname: 'Jane',
    lastname: 'Doe',
    email: 'test1@example.com',
    password: '123456',
    role: ['User'],
  },
  {
    id: 2,
    firstname: 'Eliseo',
    lastname: 'Murillo',
    email: 'test2@example.com',
    password: '123456',
    role: ['User', 'Admin'],
  },
  {
    id: 3,
    firstname: 'Eliseo',
    lastname: 'Murillo',
    email: 'test@test.com',
    password: '123456',
    role: ['User', 'Admin'],
  },
];
