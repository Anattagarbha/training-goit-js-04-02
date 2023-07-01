/* для сортировки строк в алфавитном порядке, по возрастанию 
или убыванию, используется метод строк localeCompare() */

"use strict";

// возвращает отрицательное значение, если
// firstString должна быть перед secondString

// "a".localeCompare("b"); // -1

const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

const inAlphabeticalOrder = [...students].sort((a, b) => a.localeCompare(b));

console.log(inAlphabeticalOrder);

// возвращает положительное значение больше нуля,
// если firstString должна быть после secondString

// "b".localeCompare("a"); // 1

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));

console.log(inReversedOrder);
