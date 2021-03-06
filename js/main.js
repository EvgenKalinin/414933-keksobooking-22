import { createAdverts } from './data.js';
import {disactivateForm, initMap, addSimilarMarkers} from './map.js';
import './advert-form.js';
// import { createCards/**, addCard*/ } from './adverts.js';

// const cards = createCards(similarAdverts);
// cards
// addCard(cards[0]);

// disactivateForm();

// const similarAdverts = createAdverts();
// console.log(similarAdverts);

// initMap();
// addSimilarMarkers (similarAdverts);



disactivateForm();

// const similarAdverts = createAdverts();
// console.log(similarAdverts);

initMap();


fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertsTest) => {
    addSimilarMarkers (advertsTest); 
  });