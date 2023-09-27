export class ListaPessoas {
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

  