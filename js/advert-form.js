import {resetMainMarkerLatLng} from './map.js'
const advertForm = document.querySelector('.ad-form');
const resetFormButton = document.querySelector('.ad-form__reset');

/**
 * Отправляет данные формы на сервер.
 * @param {*} onSuccess Выполнит в случае успеха и сбросит форму.
 * @param {*} onError Выполнит если получит ошибку от сервера и НЕ сбросит форму.
 */
const setAdvertFormSubmit = (onSuccess, onError) => {
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          advertForm.reset();
          resetMainMarkerLatLng();
        } else {
          onError();
        }
      })
      .catch(() => {
        onError();
      });
  });
};

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  advertForm.reset();
  resetMainMarkerLatLng();
})

export {setAdvertFormSubmit};
