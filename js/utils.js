const MESSAGE_SHOW_TIME = 5000;

/**
 * Вернет целое число из диапазона включительно
 * @param {number} min Любое положительное число
 * @param {number} max Любое положительное число
 * @return {number}
 */
const getRandom = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    throw new Error('Введите корректные значения. Минимальное значение не может быть больше максимального. Значения должны быть положительными.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Вернет дробное число из диапазона включительно.
 * @param {number} min Любое положительное число
 * @param {number} max Любое положительное число
 * @param {number} digits Количество знаков после запятой
 * @return {number}
 */
const getRandomCoordinates = (min, max, digits = 1) => {
  if (min >= max || min < 0 || max < 0) {
    throw new Error('Введите корректные значения. Минимальное значение не может быть больше максимального. Значения должны быть положительными.');
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
}

/**
 * Получение случайного элемента массива
 * @param array
 * @return {*}
 */
const getRandomArrayElement = (array) => {
  let randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
}

/**
 * Вернет случайные, не повторяющиеся элементы массива.
 * Если на вход передать пустой массив, вернет пустой массив.
 * @param {*} array
 * @return {*}
 */
const getRandomArrayElements = (array) => {
  let randomElements = [];
  if ((array.length-1) <= 0) {
    return randomElements;
  } else {
    let iterations = getRandom(0, array.length-1);
    array = shuffleArray(array);
    for (let i = 0; i <= iterations; i++) {
      randomElements[i] = array[i];
    }
    return randomElements;
  }

}

/**
 * Перемешает элементы массива
 * @param {*} array
 * @return {*}
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/**
 * Показывает сообщение об успешной отправке формы.
 */
const showSuccessMessage = () => {
  const main = document.querySelector('main');
  const templateFragment = document.querySelector('#success').content;
  const template = templateFragment.querySelector('div');
  const fragment = document.createDocumentFragment();
  const element = template.cloneNode(true);
  fragment.appendChild(element);
  main.appendChild(fragment);

  const successMessage = document.querySelector('.success');

  document.addEventListener('keydown', function(evt) {

    if (evt.keyCode === 27) {
      successMessage.remove();
    }
  });

  document.addEventListener('click', function () {
    successMessage.remove();
  });

  setTimeout(() => {
    successMessage.remove();
  }, MESSAGE_SHOW_TIME);
};

/**
 * Показывает сообщение о НЕ успешной отправке формы.
 */
const showErrorMessage = () => {
  const main = document.querySelector('main');
  const templateFragment = document.querySelector('#error').content;
  const template = templateFragment.querySelector('div');
  const fragment = document.createDocumentFragment();
  const element = template.cloneNode(true);
  fragment.appendChild(element);
  main.appendChild(fragment);

  const errorMessage = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  document.addEventListener('keydown', function(evt) {

    if (evt.keyCode === 27) {
      errorMessage.remove();
    }
  });

  errorButton.addEventListener('click', function () {
    errorMessage.remove();
  });
};

/**
 * Покажет передаваемое предупреждение вверху экрана
 * @param {*} message передаваемое предупреждение
 */
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'white';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.opacity = '0.5';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, MESSAGE_SHOW_TIME);
}

export {getRandom, getRandomCoordinates, getRandomArrayElement, getRandomArrayElements, showSuccessMessage, showErrorMessage, showAlert};
