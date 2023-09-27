// Pessoa.js

class Pessoa {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
      this.id = this.generateId();
    }
  
    getInfo() {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`;
    }

    generateId(){
        return Math.floor(Math.random() * 10000);
    }
}

export class ListPessoa {
  constructor() {
    this.pessoas = [];
  }

  add(pessoa) {
    this.pessoas.push(pessoa);
  }

  get() {
    return this.pessoas;
  }
}

export default Pessoa;

