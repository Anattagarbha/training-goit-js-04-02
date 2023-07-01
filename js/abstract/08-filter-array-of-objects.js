"use strict";

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);

console.log(best);

const worst = students.filter((student) => student.score < LOW_SCORE);

console.log(worst);

// в коллбэк функции можно деструктурировать свойства объекта

const average = students.filter(
  ({ score }) => score > LOW_SCORE && score <= HIGH_SCORE
);

console.log(average);
