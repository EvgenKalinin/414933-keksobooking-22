const TITLES = ['Хижина провидца', 'Преобразователь скелетов', 'Утопия драконов', 'Улей змиев', 'Мавзолей личий', 'Логово воров', 'Хижина мага', 'Чердак гарпий', 'Пещера циклопа'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['На первых этапах, программирование приносит немного боли. "Иди в IT" - говорили они - "У нас здорово!"...', 'Если мыши вас не смущают, то вы по адресу', 'На флеэту есть старинный патифон, железная кровать и телефон', 'Уже накрыт огромный стол. Зажарен чудный поросёнок. И славный троль несет, добротного пивца бочонок.', 'Белые обои. Черная посуда.', 'Старинные интерьеры. Приглушенное освещение. Одним словом на любителя.']
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg.'];

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

/**
 * Создает произвольный объект недвижимости - объявление рядом.
 * @param {null} Не принимает
 * @return {object} object
 */
const createAdvert = () => {
  const x = getRandomCoordinates(35.65000, 35.70000, 5);
  const y = getRandomCoordinates(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandom(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: x + ', ' + y,
      price: getRandom(1000, 25000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandom(1, 10),
      guests: getRandom(1, 20),
      checkin: getRandomArrayElement(CHECK_TIME),
      checkout: getRandomArrayElement(CHECK_TIME),
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElements(PHOTOS),
    },
    location: {
      x: x,
      y: y,
    },
  };
};

export {createAdvert};
