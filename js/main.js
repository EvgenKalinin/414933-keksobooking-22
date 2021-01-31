// Вернет целое число из диапазона включительно.

const getRandom = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    return alert('Введите корректные значения. Минимально значение не может быть больше максимального. Значения должны быть положительными.');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandom(4, 5);

// console.log('Твое целое число: ' + getRandom(4, 5));

// Вернет дробное число из диапазона включительно.

const getRandomCoordinates = (min, max, digits = 1) => {
  if (min >= max || min < 0 || max < 0) {
    return alert('Введите корректные значения. Минимально значение не может быть больше максимального. Значения должны быть положительными.');
  }
  return (Math.random() * (max - min) + min).toFixed(digits);
}

getRandomCoordinates(4, 5);

// console.log('Твое дробное число: ' + getRandomCoordinates(4, 5));
