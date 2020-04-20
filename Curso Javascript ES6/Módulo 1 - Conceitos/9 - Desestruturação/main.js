const usuario = {
  nome: 'André',
  idade: 23,
  endereco: {
    cidade: 'Praia Grande',
    estado: 'SP',
  },
};

// Com desestruturação
const {
  nome,
  idade,
  endereco: { cidade },
} = usuario;

console.log(nome, idade, cidade);

function nomeUsuario({ nome, idade, endereco: { cidade } }) {
  console.log(nome, idade, cidade);
}

nomeUsuario(usuario);

// Sem desestruturação
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
