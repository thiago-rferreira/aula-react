"use client";

import React from 'react';
import Header from '../components/header/Header';
import Pessoa, { ListPessoa } from 'models/Pessoa';
import teste from 'data/pessoas';
import styles from './aulaClasse.module.css'

const AulaClasse = () => {
    // Criando um objeto da classe Pessoa e adicionando na lista de pessoas.
    const objetoDaClasse = new Pessoa('Exemplo', 25, 'Exemplópolis');

    // Criando a instancia da lista de pessoas.
    const listaDePessoas = new ListPessoa();

    listaDePessoas.add(objetoDaClasse);

    console.log(listaDePessoas);

    // Adicionando pessoas do arquivo teste.js na lista de pessoas.
    teste.map((pessoa) => {
        listaDePessoas.add(new Pessoa(pessoa.nome, pessoa.idade, pessoa.cidade));
    })

    // console.log(listaDePessoas)

    return (
        <div>
            <Header />
            <h1>Minha Página</h1>
            {
                listaDePessoas.pessoas.map((pessoa) => (
                    <div className={styles.divMain} key={pessoa.id}>
                        <p>Nome: {pessoa.nome}</p>
                        <p>Idade: {pessoa.idade}</p>
                        <p>Cidade: {pessoa.cidade}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default AulaClasse;
