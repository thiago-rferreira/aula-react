// Faça a classe livro
// Faça a classe ListaLivros

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.id = this.generateId();
    }

    generateId(){
        return Math.floor(Math.random() * 10000);
    }

    getInfo() {
        return `Titulo: ${this.titulo}, 
        Autor: ${this.autor}, 
        Ano: ${this.ano}`;
    }
}

export class ListaLivros {
    constructor() {
        this.livros = [];
    }

    add(livro) {
        this.livros.push(livro);
    }

}

export default Livro;