import { adverts } from './data.js';

const advertsList = document.querySelector('.map__canvas')
const advertTemplate = document.querySelector('#card')
  .content;
  // .querySelector('.popup');


const similarAdvert = adverts;
// console.log(similarAdvert);
similarAdvert.forEach((advert) => {
  const advertItem = advertTemplate.cloneNode(true);

  // Сопоставляет Английские и русские названия
  let advertType = '';
  if (advert.offer.type == 'flat') {
    advertType = 'Квартира';
  } if (advert.offer.type == 'palace') {
    advertType = 'Дворец';
  } if (advert.offer.type == 'house') {
    advertType = 'Дом';
  } if (advert.offer.type == 'bungalow') {
    advertType = 'Бунгало';
  }


  advertItem.querySelector('.popup__avatar').src = advert.author.avatar;
  advertItem.querySelector('.popup__title').textContent = advert.offer.title;
  advertItem.querySelector('.popup__text--address').textContent = advert.offer.address;
  advertItem.querySelector('.popup__text--price').textContent = advert.offer.price + ' ₽/ночь';
  advertItem.querySelector('.popup__type').textContent = advertType;
  advertItem.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты для ' + advert.offer.guests + ' гостей';
  advertItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin + ', выезд до ' + advert.offer.checkout;

  // Провевряет получаемый массив с рандомными фичами и удаляет элементы из списка
  const featuresList = advertItem.querySelector('.popup__features'); //Список Фичей
  const featureItems = advertItem.querySelectorAll('.popup__feature'); // Фича из списка
  const randomFeaturesItems  = advert.offer.features; // Массив рандомных фичей


  if ((randomFeaturesItems.indexOf('wifi') != -1) == false) {
    // console.log('NO WI-FI');
    featuresList.removeChild(featureItems[0]); // Почему не работает конструкция вида: featuresList.removeChild(featureItem.classList.contains('popup__feature--wifi')); (?)
  } if ((randomFeaturesItems.indexOf('dishwasher') != -1) == false) {
    // console.log('NO DISHWASHER');
    featuresList.removeChild(featureItems[1]);
  } if ((randomFeaturesItems.indexOf('parking') != -1) == false) {
    // console.log('NO Parking');
    featuresList.removeChild(featureItems[2]);
  } if ((randomFeaturesItems.indexOf('washer') != -1) == false) {
    // console.log('NO washer');
    featuresList.removeChild(featureItems[3]);
  } if ((randomFeaturesItems.indexOf('elevator') != -1) == false) {
    // console.log('NO elevator');
    featuresList.removeChild(featureItems[4]);
  } if ((randomFeaturesItems.indexOf('conditioner') != -1) == false) {
    // console.log('NO conditioner');
    featuresList.removeChild(featureItems[5]);
  }



  advertItem.querySelector('.popup__description').textContent = advert.offer.description;

  // Эта штука добавляет фотки
  const photos = advertItem.querySelector('.popup__photos');
  const photoItem = advertItem.querySelector('.popup__photo');
  const photo = document.createDocumentFragment(); // Создаём "коробочку"
  photos.removeChild(photoItem);

  for (let i = 0; i <= advert.offer.photos.length-1; i++) {
    const newImg = document.createElement('img');
    newImg.classList.add('popup__photo');
    newImg.src = advert.offer.photos[i];

    photo.appendChild(newImg); // Складываем созданные элементы в "коробочку"
  }
  photos.appendChild(photo);


  advertsList.appendChild(advertItem); // отрисовываем всё из "коробочки"
});
