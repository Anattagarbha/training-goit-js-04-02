/* метод reduce(callback, initialValue) используется для последовательной обработки 
каждого элемента массива с сохранением промежуточного результата в аккумуляторе */

"use strict";

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};

const playTime = Object.values(players);

const totalPlayTime = playTime.reduce((initialTime, playerTime) => {
  return initialTime + playerTime;
}, 0);

const averagePlayTime = totalPlayTime / playTime.length;

console.log(playTime, totalPlayTime, averagePlayTime);
