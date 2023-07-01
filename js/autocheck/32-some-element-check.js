/* метод some(callback) проверяет, проходит ли хотя бы один 
элемент массива тест предоставляемый коллбек-функцией */

"use strict";

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(
  (element) => element % 2 === 0
);
const anyElementInSecondIsOdd = secondArray.some(
  (element) => element % 2 !== 0
);

const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);

console.log(
  anyElementInFirstIsEven,
  anyElementInFirstIsOdd,
  anyElementInSecondIsEven,
  anyElementInSecondIsOdd,
  anyElementInThirdIsEven,
  anyElementInThirdIsOdd
);
