/* функция с побочными эффектами - это функция которая в процессе выполнения 
может изменять или использовать глобальные переменные, изменять значение аргументов 
ссылочного типа, выполнять операции ввода-вывода и т. п. */

"use strict";

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

dirtyMultiply(numbers, 3);

console.log(numbers);

/* чистая функция не изменяет значения аргументов */

const pureMultipy = (array, value) => {
  const newArray = [];
  array.forEach((element) => {
    newArray.push(element * value);
  });
  return newArray;
};

const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubledNumbers = pureMultipy(newNumbers, 2);

console.log(newNumbers);
console.log(doubledNumbers);
