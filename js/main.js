import { createAdverts } from './data.js';
import { createCards, addCard } from './adverts.js';

const similarAdvert = createAdverts();
const cards = createCards(similarAdvert);

addCard(cards[0]);
