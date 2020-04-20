// CONST
/* 
Constantes são variáveis que só podem ser atribuidas uma vez e são apenas leitura
read-only
*/

const a = 1;

// Constantes não podem ser reatribuidas
// a = 3;

// Porém podemos realizar mutação

const user = { name: 'André' };
user.name = 'Luiz';

console.log(user);

// LET
/*
São váriaveis de escopo local, só podem ser acessadas onde foram definidas
ou em bloco que estejam abaixo de onde ela foi declarada
*/
function test(x) {
  let y = 2;
  // let y = 3; erro, não podemos redeclarar uma variável de mesmo nome no mesmo escopo
  if (x > 5) {
    let y = 5; // Podemos declarar uma variável de mesmo nome em escopos diferentes
    console.log(x, y);
  }
}

// console.log(y); y não é acessivel de fora da função
test(10);
