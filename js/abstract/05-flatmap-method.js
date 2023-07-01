/* метод flatMap(callback) аналогичен методу map(), но применяется в случаях, 
когда результат - это многомерный массив который необходимо «разгладить» */

"use strict";

const students = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

const courses = students.flatMap((course) => course.courses);

console.log(courses);
