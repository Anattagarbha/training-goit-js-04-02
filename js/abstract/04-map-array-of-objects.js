/* используя метод map() можно перебрать массив объектов, 
и в коллбек-функции вернуть значение свойства каждого из них */

"use strict";

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const names = students.map((student) => student.name);

console.log(names);
