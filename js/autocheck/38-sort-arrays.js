/* метод sort() сортирует элементы массива, но в отличии от 
остальных перебирающих методов, он сортирует исходный массив */

"use strict";

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates, alphabeticalAuthors);
