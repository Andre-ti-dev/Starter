// 4.1

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Praia Grande',
    estado: 'SP',
  },
};

const {
  nome,
  endereco: { cidade, estado },
} = empresa;

console.log(nome); // Rocketseat
console.log(cidade); // Praia Grande
console.log(estado); // SP

// 4.2

const mostraInfo = ({ nome, idade }) => `${nome} tem ${idade} anos.`;

console.log(mostraInfo({ nome: 'André', idade: 23 }));
