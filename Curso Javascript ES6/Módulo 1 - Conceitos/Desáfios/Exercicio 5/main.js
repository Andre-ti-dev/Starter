// 5.1 Rest

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

const soma = (n1, ...n) => n1 + n.reduce((total, n) => total + n);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 Spread

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  },
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
