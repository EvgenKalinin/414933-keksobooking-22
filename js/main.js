import { createAdverts } from './data.js';
import { createCards/**, addCard*/ } from './adverts.js';
import './map.js';

const similarAdverts = createAdverts();
const cards = createCards(similarAdverts);
// console.log(cards);

// addCard(cards[0]);



