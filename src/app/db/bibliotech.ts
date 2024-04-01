interface Book {
  id: number;
  title: string;
  resume: string;
  image: string;
  pages: Page[];
  author: string;
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
    author: 'Eliseo',
    categories: ['Tech', 'NodeJs'],
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
    role: ['Admin'],
  },
  {
    id: 1,
    firstname: 'Jane',
    lastname: 'Doe',
    email: '7sB1j@example.com',
    password: '123456',
    role: ['Reader'],
  },
  {
    id: 2,
    firstname: 'Jhony',
    lastname: 'Doe',
    email: '7sB1j@example.com',
    password: '123456',
    role: ['Owner'],
  },
];
