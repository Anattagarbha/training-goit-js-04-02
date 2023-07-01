/* метод filter(callback) используется для единственной операции - 
фильтрации массива, то есть когда необходимо выбрать более одного 
элемента из коллекции по какому-то критерию */

"use strict";

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);

console.log(positiveValues);

const negativeValues = values.filter((value) => value < 0);

console.log(negativeValues);

const bigValues = values.filter((value) => value > 1000);

console.log(bigValues);
