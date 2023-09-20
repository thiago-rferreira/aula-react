// Pessoa.js

class Pessoa {
    constructor(nome, idade, cidade) {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  
    getInfo() {
      return `Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}`;
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
  