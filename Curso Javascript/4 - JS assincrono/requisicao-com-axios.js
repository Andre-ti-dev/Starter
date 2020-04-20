// A biblioteca axios permite que façamos requisições http baseado em promises
/*  O axios utiliza o XMLHttpRequest, porém ele abstrai todo o trabalho 
    que teriamos de fazer manualmente */
axios
  .get('https://api.github.com/users/andre-ti-dev')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
