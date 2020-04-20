const nome = 'André';
const idade = 23;

// Old way
/*
const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Rocketseat'
};
*/

// Object Short Syntax

const usuario = {
  nome,
  idade,
  empresa: 'Rocketseat',
};

console.table(usuario);
