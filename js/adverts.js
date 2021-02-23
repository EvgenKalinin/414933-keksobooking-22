// const advertsList = document.querySelector('.map__canvas')
const advertTemplate = document.querySelector('#card')
  .content.querySelector('.popup');


const createCards = (similarAdvert) => {

  const advertCards = [];

  similarAdvert.forEach((advert) => {

    const advertItem = advertTemplate.cloneNode(true);

    // Сопоставляет Английские и русские названия
    let advertType = '';
    const typeToTitle = {
      palace: 'Дворец',
      flat: 'Квартира',
      house: 'Дом',
      bungalow: 'Бунгало',
    };

    advertType = typeToTitle[advert.offer.type];

    // Старое решеткие через switch
    // let advertType = '';
    // switch (advert.offer.type) {
    //   case 'flat':
    //     advertType = 'Квартира';
    //     break;

    //   case 'palace':
    //     advertType = 'Дворец';
    //     break;

    //   case 'house':
    //     advertType = 'Дом';
    //     break;

    //   case 'bungalow':
    //     advertType = 'Бунгало';
    //     break;
    // }


    advertItem.querySelector('.popup__avatar').src = advert.author.avatar;

    if (!advert.offer.title) {
      advertItem.querySelector('.popup__title').remove()
    } else {
      advertItem.querySelector('.popup__title').textContent = advert.offer.title;
    }
    if (!advert.offer.address) {
      advertItem.querySelector('.popup__text--address').remove()
    } else {
      advertItem.querySelector('.popup__text--address').textContent = advert.offer.address;
    }
    if (!advert.offer.price) {
      advertItem.querySelector('.popup__text--price').remove()
    } else {
      advertItem.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
    }
    if (!advertType) {
      advertItem.querySelector('.popup__type').remove()
    } else {
      advertItem.querySelector('.popup__type').textContent = advertType;
    }
    if (!advert.offer.rooms || !advert.offer.guests) {
      advertItem.querySelector('.popup__text--capacity').remove()
    } else {
      advertItem.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
    }
    if (!advert.offer.checkin || !advert.offer.checkout) {
      advertItem.querySelector('.popup__text--time').remove()
    } else {
      advertItem.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
    }
    if (!advert.offer.description) {
      advertItem.querySelector('.popup__description').remove()
    } else {
      advertItem.querySelector('.popup__description').textContent = advert.offer.description;
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
    const photoItem = advertItem.querySelector('.popup__photo');
    const photoFragment = document.createDocumentFragment(); // Создаём "коробочку"

    if (!advert.offer.photos) {
      photos.remove();
    } else {
      photos.removeChild(photoItem);

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

      advertCards.push(advertItem);
    }

  });
  return advertCards
};

// const addCard = (card) => {
//   advertsList.appendChild(card);
// };

export {createCards/**, addCard */};
