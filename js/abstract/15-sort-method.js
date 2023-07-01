/* метод sort() сортирует элементы массива, но в отличии от 
остальных перебирающих методов, сортирует исходный массив */

"use strict";

const scores = [61, 19, 74, 35, 92, 56];

scores.sort();

console.log(scores);

/* по умолчанию значения приводятся к строке, 
стандартная сортировка чисел работает необычно */

const altScores = [27, 2, 41, 4, 7, 3, 75];

altScores.sort();

console.log(altScores);

/* массив строк сортируется по алфавиту. При этом 
порядковый номер заглавных букв меньше, чем у прописных */

const letters = ["b", "B", "a", "A", "c", "C"];

console.log(letters.sort());

/* перед сортировкой делают полную копию 
исходного массива и сортируют уже её */

const newScores = [61, 19, 74, 35, 92, 56];

const ascendingScores = [...scores].sort();

console.log(newScores, ascendingScores);
