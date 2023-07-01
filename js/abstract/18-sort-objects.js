/* при работе с массивом объектов сортировка выполняется 
по числовому или строчному значению какого-то свойства */

"use strict";

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
];

// возрастающий порядок баллов

const inAscendingOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

console.log(inAscendingOrder);

// убывающий порядок баллов

const inDescendingOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

console.log(inDescendingOrder);

// студенты в алфавитном порядке

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

console.log(inAlphabeticalOrder);
