/* избавиться от «мёртвых» переменных можно, группируя 
вызовы методов в цепочки. Каждый следующий метод будет 
выполняться на результате работы предыдущего */

"use strict";

const students = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
];

// массив объектов, отсортированный по возрастанию баллов за тест

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names);

// массив уникальных посещаемых предметов

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, arr) => arr.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses);
