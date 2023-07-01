/* возвращает индекс первого элемента удовлетворяющего 
условию, то есть когда коллбек возвращает true */

"use strict";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const blueIdx = colorPickerOptions.findIndex(
  (option) => option.label === "blue"
);

const whiteIdx = colorPickerOptions.findIndex(
  (option) => option.label === "white"
);

console.log(blueIdx, whiteIdx);
