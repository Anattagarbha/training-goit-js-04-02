/* для сортировки строк в алфавитном порядке, по возрастанию 
или убыванию, используется метод строк localeCompare() */

"use strict";

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReverseOrder = [...authors].sort((a, b) => b.localeCompare(a));

console.log(authorsInAlphabetOrder, authorsInReverseOrder);
