import { createAdverts } from './data.js';
import { createCards/**, addCard*/ } from './adverts.js';
const similarAdverts = createAdverts();
console.log(similarAdverts);


const adForm = document.querySelector('.ad-form');
const adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormSelects = document.querySelectorAll('.map__filters select');
const filtersFormFieldset = document.querySelector('#housing-features');
const CITY_CENTER = [35.686427, 139.753637];

/**Деактивирует форму */
adForm.classList.add('ad-form--disabled');

for (let fieldset of adFormFieldsets) {
  fieldset.setAttribute('disabled', 'disabled');
}

filtersForm.classList.add('map__filters--disabled');

for (let select of filtersFormSelects) {
  select.setAttribute('disabled', 'disabled');
}

filtersFormFieldset.setAttribute('disabled', 'disabled');

/** Добавляет карту и активирует форму */
const map = L.map('map-canvas')
  .on('load', () => {

    adForm.classList.remove('ad-form--disabled');

    for (let fieldset of adFormFieldsets) {
      fieldset.removeAttribute('disabled', 'disabled');
    }

    filtersForm.classList.remove('map__filters--disabled');

    for (let select of filtersFormSelects) {
      select.removeAttribute('disabled', 'disabled');
    }

    filtersFormFieldset.removeAttribute('disabled', 'disabled');
  })
  .setView({
    lat: CITY_CENTER[0],
    lng: CITY_CENTER[1],
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

/**Добавляет главный маркер на карту */
const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: CITY_CENTER[0],
    lng: CITY_CENTER[1],
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);

/**Получаем координаты маркера */

// mainMarker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

/**Добавляем координаты остановки маркера в поле адрес */

const adFormAddress = document.querySelector('#address');

adFormAddress.value = `${CITY_CENTER[0].toFixed(5)}, ${CITY_CENTER[1].toFixed(5)}`;

mainMarker.on('moveend', (evt) => {
  let currentX = evt.target.getLatLng().lat.toFixed(5);
  let currentY = evt.target.getLatLng().lng.toFixed(5);
  adFormAddress.value = `${currentX}, ${currentY}`;
});


/**Добавляет похожие маркеры на карту */
let cards = createCards(similarAdverts);

similarAdverts.forEach((advert) => {
  const markerIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: advert.location.lat,
      lng: advert.location.lng,
    },
    {
      icon: markerIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      cards[0],
    );
});

console.log(createCards(similarAdverts));

// points.forEach((point) => {
//   const {lat, lng} = point;

//   const icon = L.icon({
//     iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon,
//     },
//   );

//   marker
//     .addTo(map)
//     .bindPopup(
//       createCustomPopup(point),
//     );
// });

// similarAdverts.forEach ((advert) => {
//   const markerIcon = L.icon({
//     iconUrl: '../img/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const marker = L.marker(
//     {
//       lat: advert.location.lat,
//       lng: advert.location.lng,
//     },
//     {
//       icon: markerIcon,
//     },
//   );

//   marker
//     .addTo(map)
//     .bindPopup(
//       advert,
//     );
// });
