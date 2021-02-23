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
