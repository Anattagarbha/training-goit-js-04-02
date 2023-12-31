/* используя метод map() сделай так, чтобы в переменной titles получился 
массив названий книг (свойство title) из всех объектов массива books */

"use strict";

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

const bookTitles = books.map((book) => book.title);

console.log(bookTitles);
