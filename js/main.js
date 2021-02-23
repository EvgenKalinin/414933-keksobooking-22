import { createAdverts } from './data.js';
import { createCards, addCard } from './adverts.js';
import './map.js';

const similarAdvert = createAdverts();
const cards = createCards(similarAdvert);

addCard(cards[0]);
