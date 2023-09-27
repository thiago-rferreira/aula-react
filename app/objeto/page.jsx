"use client"
// pages/index.js
import React from 'react';
import Header from '../components/header/Header';
import pessoa from 'data/pessoa';
import livro from 'data/livro';

const HomePage = () => {
    console.log(pessoa)
    return (
        <div>
            <Header />
            <h1>Meu Livro</h1>
            <p>Titulo: {livro.titulo}</p>
            <p>Autor: {livro.autor}</p>
            <p>Ano: {livro.ano}</p>

            <h1>Aluno(a)</h1>
            <p>Id: {pessoa.id}</p>
            <p>Nome: {pessoa.nome}</p>
            <p>Idade: {pessoa.idade}</p>
            <p>Cidade: {pessoa.cidade}</p>
        </div>
    );
};

export default HomePage;
