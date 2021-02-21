import { createAdverts } from './data.js';
import { createCards, addCards } from './adverts.js';

const similarAdvert = createAdverts();
const cards = createCards(similarAdvert);
console.log(cards);
addCards(cards[0]);
