/* выполни рефакторинг функции так, чтобы она стала чистой - 
не изменяла массив чисел numbers, а создавала, наполняла и 
возвращала новый массив с обновлёнными значениями */

"use strict";

function changeEven(numbers, value) {
  const newNumbers = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number += value;
    }
    newNumbers.push(number);
  });
  return newNumbers;
}
