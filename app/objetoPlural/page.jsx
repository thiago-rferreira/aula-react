// pages/index.js
import React from 'react';
import styles from './objetoPlural.module.css';
import Header from '../components/header/Header';
import pessoas from 'data/pessoas';
import livros from 'data/livros';


const Pessoas = () => {
    return (
        <div>
            <Header />
            <h1>Lista de Pessoas</h1>
            <ul>
                <div >
                    {pessoas.map((pessoa) => (
                        <li key={pessoa.id} className={styles.mainDiv}>
                            <div>
                                <p>Nome: {pessoa.nome}</p>
                                <p>Idade: {pessoa.idade}</p>
                                <p>Cidade: {pessoa.cidade}</p>
                            </div>
                        </li>
                    ))}
                </div>
            </ul>

            <h1>Lista de livros</h1>
            <ul>
                <div>
                    {
                        livros.map((livro) => (
                            <li key={livro.id}>
                                <div>
                                    <br/>
                                    <p>Id: {livro.id}</p>
                                    <p>Titulo: {livro.titulo}</p>
                                    <p>Autor: {livro.autor}</p>
                                    <p>Ano: {livro.ano}</p>
                                    <p>Editora: {livro.editora}</p>
                                </div>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
    );
};

export default Pessoas;
