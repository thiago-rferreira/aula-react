"use client"
import livrosData from 'data/livros'
import Livro, { ListaLivros } from 'models/livro'

function page() {
    // console.log(livrosData);
    const livroTeste = new Livro('Livro Teste', 'Autor Teste', 2020)

    // Criar a instancia da listaLivros
    const minhaListaLivros = new ListaLivros();

    // Adicionar o livroTeste na lista de livros
    minhaListaLivros.add(livroTeste);

    //Adicionar o meu livroData na lista de livros
    livrosData.map((livro) => {
        minhaListaLivros.add(new Livro(livro.titulo, livro.autor, livro.ano));
    })  
    
    //Adicionar a propriedade escola na minha lista de livros em todos os livros
    minhaListaLivros.livros.map((livro) => {
        livro.poder = Math.floor(Math.random() * 100000);
    })

  return (
    <div>
        <h1>Faça um map</h1>

        {
                minhaListaLivros.livros.map((livro) => (
                    <div key={livro.id}>
                        <p>Titulo: {livro.titulo}</p>
                        <p>Ano: {livro.ano}</p>
                        <p>Autor: {livro.autor}</p>
                        <p>Poder: {livro.poder}</p>
                       <br/>
                    </div>
                ))
            }
    </div>
    
  )
}

export default page