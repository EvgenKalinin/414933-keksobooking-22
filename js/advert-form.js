const advertForm = document.querySelector('.ad-form');

/**
 * Отправляет данные формы на сервер.
 * @param {*} onSuccess Выполнит в случае успеха.
 * @param {*} onError Выполнит если получит ошибку от сервера.
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
        } else {
          onError();
        }
      })
      .catch(() => {
        onError();
      });
  });
};

export {setAdvertFormSubmit};
