/* global L:readonly */
import { createCard } from './adverts.js';


const adForm = document.querySelector('.ad-form');
const adFormAddress = document.querySelector('#address');
const adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormSelects = document.querySelectorAll('.map__filters select');
const filtersFormFieldset = document.querySelector('#housing-features');
const CITY_CENTER = [35.686427, 139.753637];

/**Деактивирует форму */
const disactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  for (let fieldset of adFormFieldsets) {
    fieldset.disabled = true;
  }

  filtersForm.classList.add('map__filters--disabled');

  for (let select of filtersFormSelects) {
    select.disabled = true;
  }

  filtersFormFieldset.disabled = true;
};


/**
 * Добавляет карту и активирует форму
*/
let map;

const initMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      adForm.classList.remove('ad-form--disabled');

      for (let fieldset of adFormFieldsets) {
        fieldset.disabled = false;
      }

      filtersForm.classList.remove('map__filters--disabled');

      for (let select of filtersFormSelects) {
        select.disabled = false;
      }

      filtersFormFieldset.disabled = false;
    })

    .setView({
      lat: CITY_CENTER[0],
      lng: CITY_CENTER[1],
    }, 10);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

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

  adFormAddress.value = `${CITY_CENTER[0].toFixed(5)}, ${CITY_CENTER[1].toFixed(5)}`;

  mainMarker.on('moveend', (evt) => {
    let currentX = evt.target.getLatLng().lat.toFixed(5);
    let currentY = evt.target.getLatLng().lng.toFixed(5);
    adFormAddress.value = `${currentX}, ${currentY}`;
  });


  return map;
};


/**Добавляет похожие маркеры на карту */
const addSimilarMarkers = (similarAdverts) => {
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
        createCard(advert),
      );
  });
};

export {disactivateForm, initMap, addSimilarMarkers};
