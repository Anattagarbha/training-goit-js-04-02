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
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstAuthorScore, secondAuthorScore) =>
    firstAuthorScore.rating - secondAuthorScore.rating
);

const sortedByDescendingRating = [...books].sort(
  (firstAuthorScore, secondAuthorScore) =>
    secondAuthorScore.rating - firstAuthorScore.rating
);

console.log(
  sortedByAuthorName,
  sortedByReversedAuthorName,
  sortedByAscendingRating,
  sortedByDescendingRating
);
