/* метод map(callback) используется для трансформации массива. 
Он вызывает коллбек-функцию для каждого элемента исходного 
массива, а результат её работы записывает в новый массив, 
который и будет результатом выполнения метода */

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

console.log(planetsInUpperCase);

/* использование анонимных стрелочных функций с неявным возвратом 
сильно сокращает «шум» объявления коллбек-функции, делая код чище 
и проще для восприятия */

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());

console.log(planetsInLowerCase);
