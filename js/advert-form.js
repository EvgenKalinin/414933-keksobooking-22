import {resetMainMarkerLatLng} from './map.js';
import {showSuccessMessage} from './utils.js';
import {sendFormData} from './api.js';


const advertForm = document.querySelector('.ad-form');
const resetFormButton = document.querySelector('.ad-form__reset');
const houseType = document.querySelector('#type');
const pricePerNight = document.querySelector('#price');

/**Очищает форму*/
const resetForm = () => {
  advertForm.reset();
}

/**Функция на успешную отправку формы */
const onSuccessFormSubmit = () => {
  resetForm();
  resetMainMarkerLatLng();
  showSuccessMessage();
};

// Меняет минимальную цену в зависимости от типа
const typeToMinPrice = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
};

const changeTypeMinPrice = () =>{
  pricePerNight.min = typeToMinPrice[houseType.value];
  pricePerNight.placeholder = typeToMinPrice[houseType.value];
};
houseType.addEventListener('change', changeTypeMinPrice);

/** Валидирует форму */
const validateForm = () => {
  changeTypeMinPrice();
  //меняет поле заезда и выезда в зависимости от изменений любого
  advertForm.addEventListener('change', (evt) => {

    if (evt.target.name === 'timein' || evt.target.name === 'timeout') {
      advertForm.timein.value = evt.target.value;
      advertForm.timeout.value = evt.target.value;
    }
  });
}

/**
 * Отправляет данные формы на сервер.
 * @param {*} onSuccess Выполнит в случае успеха и сбросит форму.
 * @param {*} onError Выполнит если получит ошибку от сервера и НЕ сбросит форму.
 */
const setAdvertFormSubmit = (onSuccess, onError) => {
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendFormData(onSuccess, onError, evt);
  });
};

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  advertForm.reset();
  resetMainMarkerLatLng();
})


export {setAdvertFormSubmit, onSuccessFormSubmit, validateForm};
