/* проверяет, удовлетворяют ли хотя бы 1 элемент массива 
условию коллбек-функции. Возвращает true или false */

"use strict";

const aboveZero = [-1, -2, -3, -4, -5, 6, -7, -8, -9].some(
  (value) => value > 0
);

const belowZero = [1, 2, 3, 4, 5, 6, -7, 8, 9].some((value) => value < 0);

const aboveNumber = [1, 2, 3, 4, 5, 6, 7].some((value) => value > 10);

console.log(aboveNumber, belowZero, aboveZero);
