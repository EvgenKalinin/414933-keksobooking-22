const adForm = document.querySelector('.ad-form');
const adFormFieldsets = document.querySelectorAll('.ad-form fieldset');
const filtersForm = document.querySelector('.map__filters');
const filtersFormSelects = document.querySelectorAll('.map__filters select');
const filtersFormFieldset = document.querySelector('#housing-features');

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
    lat: 35.686427,
    lng: 139.753637,
  }, 12);

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
    lat: 35.686427,
    lng: 139.753637,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

mainMarker.addTo(map);
