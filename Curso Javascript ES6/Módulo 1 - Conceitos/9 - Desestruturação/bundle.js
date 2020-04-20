"use strict";

var usuario = {
  nome: 'André',
  idade: 23,
  endereco: {
    cidade: 'Praia Grande',
    estado: 'SP'
  }
}; // Com desestruturação

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function nomeUsuario(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

nomeUsuario(usuario); // Sem desestruturação

/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
