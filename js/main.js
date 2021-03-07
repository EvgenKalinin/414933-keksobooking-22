import { createAdverts } from './data.js';
import {showSuccessMessage, showErrorMessage, showAlert} from './utils.js';
import {disactivateForm, initMap, addSimilarMarkers} from './map.js';
import {getAdverts} from './api.js';
import  {setAdvertFormSubmit} from './advert-form.js';
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

getAdverts(addSimilarMarkers, showAlert)
// fetch('https://22.javascript.pages.academy/keksobooking/data')
//   .then((response) => {
//     if (response.ok) {
//       return response.json()
//     }

//     throw new Error(`Что то пошло не так: ${response.status} ${response.statusText}`);
//   })
//   .then((advertsTest) => {
//     addSimilarMarkers (advertsTest);
//   })
//   .catch((err) => {
//     showAlert(err);
//   });

setAdvertFormSubmit(showSuccessMessage, showErrorMessage);


// const alertMessage = 'Да это пиздец какой то!';
// showAlert(alertMessage)
