import { createAdverts } from './data.js';
import {disactivateForm, initMap, addSimilarMarkers} from './map.js';
// import { createCards/**, addCard*/ } from './adverts.js';

// const cards = createCards(similarAdverts);
// cards
// addCard(cards[0]);

disactivateForm();

const similarAdverts = createAdverts();

initMap();
addSimilarMarkers (similarAdverts);
