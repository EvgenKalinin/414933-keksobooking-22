// const advertsList = document.querySelector('.map__canvas')
const advertTemplate = document
  .querySelector('#card')
  .content
  .querySelector('.popup');

const typeToTitle = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const createCard = (advert) => {
  const advertItem = advertTemplate.cloneNode(true);

  const cardAvatar = advertItem.querySelector('.popup__avatar');
  const cardTitle = advertItem.querySelector('.popup__title');
  const cardAddress = advertItem.querySelector('.popup__text--address');
  const cardPrice = advertItem.querySelector('.popup__text--price');
  const cardType = advertItem.querySelector('.popup__type');
  const cardCapacity = advertItem.querySelector('.popup__text--capacity');
  const cardTime = advertItem.querySelector('.popup__text--time');
  const cardDescription = advertItem.querySelector('.popup__description');

  cardAvatar.src = advert.author.avatar;

  if (!advert.offer.title) {
    cardTitle.remove()
  } else {
    cardTitle.textContent = advert.offer.title;
  }

  if (!advert.offer.address) {
    cardAddress.remove()
  } else {
    cardAddress.textContent = advert.offer.address;
  }

  if (!advert.offer.price) {
    cardPrice.remove()
  } else {
    cardPrice.textContent = `${advert.offer.price} ₽/ночь`;
  }

  const advertType = typeToTitle[advert.offer.type];
  if (!advertType) {
    cardType.remove()
  } else {
    cardType.textContent = advertType;
  }

  if (!advert.offer.rooms || !advert.offer.guests) {
    cardCapacity.remove()
  } else {
    cardCapacity.textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  }

  if (!advert.offer.checkin || !advert.offer.checkout) {
    cardTime.remove()
  } else {
    cardTime.textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  }

  if (!advert.offer.description) {
    cardDescription.remove()
  } else {
    cardDescription.textContent = advert.offer.description;
  }

  // Получаем элементы из массива и создаем на их основе HTML элементы
  const featuresList = advertItem.querySelector('.popup__features'); //Список Фичей
  if (!advert.offer.features) {
    featuresList.remove()
  } else {
    featuresList.innerHTML = '';

    const featureFragment = document.createDocumentFragment();
    advert.offer.features.forEach((feature) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
      featureFragment.appendChild(featureItem);
    });

    featuresList.appendChild(featureFragment);
  }

  // Эта штука добавляет фотки
  const photos = advertItem.querySelector('.popup__photos');
  const photoFragment = document.createDocumentFragment(); // Создаём "коробочку"
  if (!advert.offer.photos) {
    photos.remove();
  } else {
    photos.innerHTML = '';

    advert.offer.photos.forEach((photo) => {
      const newImg = document.createElement('img');
      newImg.classList.add('popup__photo');
      newImg.width = 45;
      newImg.height = 40;
      newImg.alt = 'Фотография жилья';
      newImg.src = photo;

      photoFragment.appendChild(newImg); // Складываем созданные элементы в "коробочку"
    });

    photos.appendChild(photoFragment); // отрисовываем всё из "коробочки"
  }

  return advertItem;
};

const createCards = (similarAdvert) => {
  const advertCards = [];

  similarAdvert.forEach((advert) => {
    const advertItem = createCard(advert);
    advertCards.push(advertItem);
  });

  return advertCards
};

// const addCard = (card) => {
//   advertsList.appendChild(card);
// };

export {createCards, createCard/**, addCard */};
