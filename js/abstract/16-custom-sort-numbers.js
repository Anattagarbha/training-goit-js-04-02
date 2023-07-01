/* для указания своего порядка сортировки методу sort() 
нужно передать коллбек-функцию с двумя параметрами */

/* порядок сортировки зависит от результата compareFunction */

/* если вызов compareFunction(a, b) возвращает любое отрицательное 
значение, то есть a меньше b, сортировка поставит a перед b. 
Это сортировка по возрастанию */

const scores = [61, 19, 74, 35, 92, 56];

const ascendingScores = [...scores].sort((a, b) => a - b);

console.log(ascendingScores);

/* если вызов compareFunction(a, b) возвращает любое 
положительное значение, сортировка поставит b перед a */

const descendingScores = [...scores].sort((a, b) => b - a);

console.log(descendingScores);
