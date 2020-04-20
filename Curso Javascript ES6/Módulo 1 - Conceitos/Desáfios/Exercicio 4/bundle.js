"use strict";

// 4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Praia Grande',
    estado: 'SP'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Praia Grande

console.log(estado); // SP
// 4.2

var mostraInfo = function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
};

console.log(mostraInfo({
  nome: 'André',
  idade: 23
}));
