/* метод reduce(callback, initialValue) используется для последовательной 
обработки каждого элемента массива с сохранением промежуточного результата, 
как аккумулятор */

"use strict";

// подсчёт суммы элементов

const total = [2, 7, 3, 14, 6].reduce((previous, value) => {
  return previous + value;
}, 0);

console.log(total);

// массив объектов

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

console.log(totalScore);
console.log(averageScore);
