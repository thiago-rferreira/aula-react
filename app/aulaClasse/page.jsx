// pages/index.js
import React from 'react';
import Header from '../components/header/Header';
import Pessoa, { ListPessoa } from 'models/Pessoa';
import pessoas from 'data/pessoas';

const HomePage = () => {
    const objetoDaClasse = new Pessoa('Exemplo', 25, 'Exemplópolis');
    const listaDePessoas = new ListPessoa();
    listaDePessoas.add(objetoDaClasse);

    return (
        <div>
            <Header />
            <h1>Minha Página</h1>
            {
                listaDePessoas.pessoas.map((pessoa) => (
                    <div key={pessoa.id}>
                        <p>Nome: {pessoa.nome}</p>
                        <p>Idade: {pessoa.idade}</p>
                        <p>Cidade: {pessoa.cidade}</p>
                    </div>
                ))
            }
            
        </div>
    );
};

export default HomePage;
