"use strict";

// CONST

/* 
Constantes são variáveis que só podem ser atribuidas uma vez e são apenas leitura
read-only
*/
var a = 1; // Constantes não podem ser reatribuidas
// a = 3;
// Porém podemos realizar mutação

var user = {
  name: 'André'
};
user.name = 'Luiz';
console.log(user); // LET

/*
São váriaveis de escopo local, só podem ser acessadas onde foram definidas
ou em bloco que estejam abaixo de onde ela foi declarada
*/

function test(x) {
  var y = 2; // let y = 3; erro, não podemos redeclarar uma variável de mesmo nome no mesmo escopo

  if (x > 5) {
    var _y = 5; // Podemos declarar uma variável de mesmo nome em escopos diferentes

    console.log(x, _y);
  }
} // console.log(y); y não é acessivel de fora da função


test(10);
