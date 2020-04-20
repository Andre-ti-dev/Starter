// REST
// Devolve o resto dos valores ou propriedades

// Com objeto
const usuario = {
  nome: 'André',
  idade: 23,
  empresa: 'F Society',
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);

// Com array
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

// Com função
function soma(a, ...params) {
  return a * params.reduce((total, next) => total + next);
}

console.log(soma(5, 1, 2, 3));

// SPREAD
// Copia os valores ou propriedades

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: 'André',
  idade: 23,
  empresa: 'F Society',
};

const usuario2 = { ...usuario1, nome: 'Luiz' };

console.log(usuario2);
