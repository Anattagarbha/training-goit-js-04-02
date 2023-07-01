/* метод find(callback) позволяет найти и вернуть первый 
подходящий элемент, после чего перебор массива прекращается */

"use strict";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const blue = colorPickerOptions.find((option) => option.label === "blue");
const pink = colorPickerOptions.find((option) => option.label === "pink");
const white = colorPickerOptions.find((option) => option.label === "white");

console.log(blue, pink, white);
