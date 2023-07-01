/* проверяет, удовлетворяют ли все элементы массива 
условию коллбек-функции. Возвращает true или false */

"use strict";

const aboveZero = [1, 2, 3, 4, 5, 6, 7, 8, 9].every((number) => number > 0);

console.log(aboveZero);
