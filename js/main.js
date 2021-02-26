import { createAdverts } from './data.js';
import { createCards/**, addCard*/ } from './adverts.js';
import {disactivateForm, activateForm, initMap, addMainMarker, catchMainMarkerCoordinates, addSimilarMarkers} from './map.js';

const similarAdverts = createAdverts();
const cards = createCards(similarAdverts);
cards
// addCard(cards[0]);


const adForm = document.querySelector('.ad-form');
const adFormAddress = document.querySelector('#address');
const adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormSelects = document.querySelectorAll('.map__filters select');
const filtersFormFieldset = document.querySelector('#housing-features');
const CITY_CENTER = [35.686427, 139.753637];

disactivateForm(adForm, adFormFieldsets, filtersForm, filtersFormSelects, filtersFormFieldset);

const formActivator = activateForm(adForm, adFormFieldsets, filtersForm, filtersFormSelects, filtersFormFieldset);

const map = initMap(formActivator, CITY_CENTER);

const mainMarker = addMainMarker(CITY_CENTER, map);

catchMainMarkerCoordinates(adFormAddress, CITY_CENTER, mainMarker);

addSimilarMarkers (similarAdverts, map);
