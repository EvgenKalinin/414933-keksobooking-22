import {getRandom, getRandomCoordinates, getRandomArrayElement, getRandomArrayElements} from './utils.js'


const TITLES = ['Хижина провидца', 'Преобразователь скелетов', 'Утопия драконов', 'Улей змиев', 'Мавзолей личий', 'Логово воров', 'Хижина мага', 'Чердак гарпий', 'Пещера циклопа'];
const TYPES = ['palace', 'flat', 'house', 'bungalow'];
const CHECK_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['"Иди в IT" - говорили они - "У нас здорово!"...', 'Если мыши вас не смущают, то вы по адресу', 'На флеэту есть старинный патифон, железная кровать и телефон', 'Уже накрыт огромный стол. Зажарен чудный поросёнок. И славный троль несет, добротного пивца бочонок.', 'Белые обои. Черная посуда.', 'Старинные интерьеры. Приглушенное освещение. Одним словом на любителя.']
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const ADVERTS_LENGTH = 10;

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
      lat: x,
      lng: y,
    },
  };
};

const createAdverts = () => {
  return new Array(ADVERTS_LENGTH).fill(null).map(() => createAdvert());
};


export {createAdverts};
