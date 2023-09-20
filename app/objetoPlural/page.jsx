// pages/index.js
import React from 'react';
import pessoas from 'data/pessoas';
import styles from './objetoPlural.module.css';
import Header from '../components/header/Header';
const HomePage = () => {
    return (
        <div>
            <Header/>
            <h1>Lista de Pessoas</h1>
            <ul>
                <div >
                    {pessoas.map((pessoa) => (
                        <li key={pessoa.id} className={styles.mainDiv}>
                            <div >
                                <p>Nome: {pessoa.nome}</p>
                                <p>Idade: {pessoa.idade}</p>
                                <p>Cidade: {pessoa.cidade}</p>
                            </div>

                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default HomePage;
