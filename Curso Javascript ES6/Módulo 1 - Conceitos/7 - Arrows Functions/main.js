const arr = [1, 2, 3, 4, 5];

// Método normal
let newArr = arr.map(function(item) {
  return item * 2;
});

// Com Arrows Functions

// 1
newArr = arr.map(item => {
  return item * 2;
});
console.log(newArr);

// 2 - Se a função receber apenas um parâmetro podemos omitir os parenteses
newArr = arr.map(item => {
  return item * 2;
});
console.log(newArr);

// 3 - Se a função apenas retornar um valor podemos omitir as chaves e o return
newArr = arr.map(item => item * 2);
console.log(newArr);

const func = () => 'teste';

console.log(func());

const teste = () => ({ nome: 'André' });
console.log(teste());
