/* используя метод filter(), можно выполнить фильтрацию массива так, 
что в нём останутся только уникальные элементы. Этот приём работает 
только с массивом примитивных значений - не объектов */

"use strict";

const students = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

const allCourses = students.flatMap((student) => student.courses);

const uniqueCourses = allCourses.filter(
  (course, idx, arr) => arr.indexOf(course) === idx
);

console.log(uniqueCourses);
