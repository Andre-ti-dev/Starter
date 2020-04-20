"use strict";

var arr = [1, 2, 3, 4, 5]; // Método normal

var newArr = arr.map(function (item) {
  return item * 2;
}); // Com Arrows Functions
// 1

newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // 2 - Se a função receber apenas um parâmetro podemos omitir os parenteses

newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // 3 - Se a função apenas retornar um valor e nada mais podemos omitir a chaves e o retorno

newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var func = function func() {
  return 'teste';
};

console.log(func());

var teste = function teste() {
  return {
    nome: "André"
  };
};

console.log(teste());
