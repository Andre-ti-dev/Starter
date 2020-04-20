const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// map
const idades = usuarios.map(usuario => usuario.idade);
console.log('idades', idades);

// filter
const timeRocketseat = usuarios.filter(
  usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18
);
console.log('Time Rocketseat', timeRocketseat);

// find
const googler = usuarios.find(usuario => usuario.empresa == 'Google');
console.log('Googler', googler);

// Unindo operações
const usuariosEditados = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <= 50);

console.log('Usuários Editados', usuariosEditados);
