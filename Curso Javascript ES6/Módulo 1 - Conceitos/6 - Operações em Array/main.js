const arr = [1, 3, 4, 5, 8, 9];

// map: Percorre todo o array e retorna um novo

const newArr = arr.map(function(item, index) {
  return item * 2 + index;
});

console.log(newArr); // [2, 7, 10, 13, 20, 23]

// reduce: Percorre todo o array e return um valor
// total mantem o valor resultante de cada iteração e next é o próximo valor do array
// no inicio total é 0 e vai somando cada valor do array
const sum = arr.reduce(function(total, next) {
  return total + next;
});

console.log(sum); // 30

// filter: Percore o array e retorn os valores que passarem na condição
const filter = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(filter); // [4, 8]

// find: Busca em um array um valor especifico

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find); // 4
