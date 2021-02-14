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
 * Вернет случайные, не повторяющиеся элементы массива
 * @param {*} array
 * @return {*}
 */
const getRandomArrayElements = (array) => {
  let iterations = getRandom(0, array.length-1);
  let randomElements = [];
  array = shuffleArray(array);
  for (let i = 0; i <= iterations; i++) {
    randomElements[i] = array[i];
  }
  return randomElements;
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

export {getRandom, getRandomCoordinates, getRandomArrayElement, getRandomArrayElements};
