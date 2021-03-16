import {showErrorMessage, showAlert} from './utils.js';
import {disactivateForm, initMap, addSimilarMarkers} from './map.js';
import {getAdverts} from './api.js';
import {setAdvertFormSubmit, onSuccessFormSubmit, validateForm} from './advert-form.js';


disactivateForm();

initMap();

getAdverts(addSimilarMarkers, showAlert);

validateForm();

setAdvertFormSubmit(onSuccessFormSubmit, showErrorMessage);
