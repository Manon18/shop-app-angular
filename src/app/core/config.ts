import { productDetails } from './interfaces/product-details';

export const PRODUCTS: productDetails[] = [
  {
    id: 1,
    picture: '../assets/pictures/tarragon-pesto.jpg',
    name: 'Article 1',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 25,
    quantity: 1,
    isAddedToBasket: false,
    like: false
  },
  {
    id: 2,
    picture: '../assets/pictures/hellofresh.jpg',
    name: 'Article 2',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 35,
    quantity: 1,
    isAddedToBasket: false,
    like: false
  },
  {
    id: 3,
    picture: '../assets/pictures/flatbread-salad.jpg',
    name: 'Article 3',
    label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 45,
    quantity: 1,
    isAddedToBasket: false,
    like: false
  }
];