import {createAdvert} from './utils.js';

const ADVERTS_LENGTH = 10

/* Массив из произвольных объектов недвижимости*/
const adverts = new Array(ADVERTS_LENGTH).fill(null).map(() => createAdvert());

export {adverts};
