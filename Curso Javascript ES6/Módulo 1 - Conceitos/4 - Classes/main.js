// Exemplos de classe, herança e métodos estáticos no es6+

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}
class TodoList extends List {
  constructor() {
    super();

    this.user = 'André';
  }

  showUser() {
    console.log(this.user);
  }
}

// Métodos estáticos normalmente são utilizados para ajudar em algum processo (helpers)
class Calc {
  static sum(a, b) {
    return a + b;
  }
}

const MinhaLista = new TodoList();

document.getElementById('novo-todo').onclick = function() {
  MinhaLista.add('Novo ToDo');
  MinhaLista.showUser();
  console.log(Calc.sum(10, 15));
};
