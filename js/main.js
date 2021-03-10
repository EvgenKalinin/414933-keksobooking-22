import {showSuccessMessage, showErrorMessage, showAlert} from './utils.js';
import {disactivateForm, initMap, addSimilarMarkers} from './map.js';
import {getAdverts} from './api.js';
import {setAdvertFormSubmit} from './advert-form.js';

disactivateForm();

initMap();

getAdverts(addSimilarMarkers, showAlert);

setAdvertFormSubmit(showSuccessMessage, showErrorMessage);
