/**
 * Запрашивает объекты недвижимости с сервера.
 * @param {*} onSuccess Выполнит если получит ответ от сервера.
 * @param {*} onError Выполнит если получит ошибку от сервера.
 */
const getAdverts = (onSuccess, onError) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }

      throw new Error(`Что то пошло не так: ${response.status} ${response.statusText}`);
    })
    .then((adverts) => {
      onSuccess(adverts);
    })
    .catch((err) => {
      onError(err);
    });
}

const sendFormData = (onSuccess, onError, evt) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
}


export {getAdverts, sendFormData}
