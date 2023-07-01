/* дополни код так, чтобы в переменной planetsLengths 
получился массив длин названий планет */

"use strict";

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLength = planets.map((planet) => planet.length);

console.log(planetsLength);
