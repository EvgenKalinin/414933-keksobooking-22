const getAdverts = (onSuccess, onError) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }

      throw new Error(`Что то пошло не так: ${response.status} ${response.statusText}`);
    })
    .then((advertsTest) => {
      onSuccess(advertsTest);
    })
    .catch((err) => {
      onError(err);
    });
}

export {getAdverts}
