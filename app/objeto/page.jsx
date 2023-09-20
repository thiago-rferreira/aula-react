// pages/index.js
import React from 'react';
import Header from '../components/header/Header';
import pessoa from 'data/pessoa';

const HomePage = () => {
    return (
        <div>
            <Header />
            <h1>Minha Página</h1>
            <p>Nome: {pessoa.nome}</p>
            <p>Idade: {pessoa.idade}</p>
            <p>Cidade: {pessoa.cidade}</p>
        </div>
    );
};

export default HomePage;
