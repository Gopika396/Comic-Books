import getImage from './getImage';

const products = [
  {
    id: 1,
    name: 'The Guardian',
    category: 'Superhero',
    price: 299,
    oldPrice: 399,
    image: getImage('guardian-comic.jpg'),
    description: 'An extraordinary hero protecting the city from darkness.',
    rating: 4.9,
    tag: 'BESTSELLER'
  },
  {
    id: 2,
    name: 'Moonlight Academy',
    category: 'Fantasy',
    price: 349,
    oldPrice: 449,
    image: getImage('moonlight-comic.jpg'),
    description: 'A magical adventure filled with mystery and secrets.',
    rating: 4.8,
    tag: 'POPULAR'
  },
  {
    id: 3,
    name: 'Shadow Samurai',
    category: 'Manga',
    price: 279,
    oldPrice: 350,
    image: getImage('samurai-comic.jpg'),
    description: 'An action-packed journey of an unforgettable warrior.',
    rating: 4.7,
    tag: 'NEW'
  },
  {
    id: 4,
    name: 'The Lost Detective',
    category: 'Mystery',
    price: 249,
    oldPrice: 329,
    image: getImage('detective-comic.jpg'),
    description: 'Solve mysterious cases in this thrilling graphic novel.',
    rating: 4.6,
    tag: 'TRENDING'
  },
  {
    id: 5,
    name: 'Cosmic Legends',
    category: 'Superhero',
    price: 399,
    oldPrice: 499,
    image: getImage('cosmic-comic.jpg'),
    description: 'Discover the secrets hidden beyond the universe.',
    rating: 4.9,
    tag: 'FEATURED'
  },
  {
    id: 6,
    name: 'Sakura Dreams',
    category: 'Manga',
    price: 299,
    oldPrice: 379,
    image: getImage('sakura-comic.jpg'),
    description: 'A beautiful story of friendship, courage and dreams.',
    rating: 4.8,
    tag: 'POPULAR'
  },
  {
    id: 7,
    name: 'Dragon Kingdom',
    category: 'Fantasy',
    price: 369,
    oldPrice: 450,
    image: getImage('dragon-comic.jpg'),
    description: 'Enter a legendary world of dragons and magic.',
    rating: 4.7,
    tag: 'SPECIAL'
  },
  {
    id: 8,
    name: 'Beyond The Planets',
    category: 'Sci-Fi',
    price: 329,
    oldPrice: 420,
    image: getImage('planets-comic.jpg'),
    description: 'Explore unknown planets and incredible adventures.',
    rating: 4.8,
    tag: 'NEW'
  }
];

export default products;