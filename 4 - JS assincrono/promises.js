// Promise para receber os dados da api do github
// A promise é usada quando é preciso aguardar que um valor esteja disponível
// No caso é usado para aguardar a requisição ser feita na api do github

let minhaPromise = function() {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/andre-ti-dev');
    xhr.send(null);

    // Quando o status da requisição mudar "resolvemos" a promise ou "rejeitamos"
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Erro na requisição');
        }
      }
    };
  });
};

minhaPromise()
  // Quando os dados chegarem e não houver erro podemos acessar o resultado
  .then(function(response) {
    console.log(response);
  })
  // Se houver erro podemos tratar ou exibir uma mensagem
  .catch(function(error) {
    console.log(error);
  });
