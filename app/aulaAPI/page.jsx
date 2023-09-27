'use client'
import { Stint_Ultra_Condensed } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import fetchApiData from '../components/apiCaller/fetchApiData';
import Header from '../components/header/Header';
import styles from './aulaAPI.module.css'

export default function Home() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchApiData();
                setApiData(data);
                console.log(data);
            } catch (error) {
                // Lidar com erros de chamada à API
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <Header />
            <div className={styles.container}>

                <h1 className={styles.title}>API Data:</h1>
                {apiData ? (
                    <ul className={styles.ul}>
                        {apiData.data.map((agente) => (
                            <div
                                key={agente.uuid}
                                className={styles.card}
                                style={{
                                    //backgroundImage: `url(${agente.background})`,
                                    //backgroundPosition: 'center', // Centraliza a imagem de fundo
                                    //backgroundSize: 'cover', // Faz a imagem de fundo cobrir toda a div
                                }}>
                                <li className={styles.agentName} >{agente.displayName}</li>
                                <img className={styles.img} src={agente.bustPortrait} alt='{agente.displayName}' />
                                <p>{agente.description}</p>
                                <div className={styles.skills}>
                                    <h2>Skills</h2>
                                    <ul className={styles.divIcons}>
                                        {agente.abilities.map((habilidade) => (
                                            <div key={habilidade.uuid} className={styles.skillDiv}>
                                                <li>{habilidade.displayName.toUpperCase()}</li>
                                                <img className={styles.imgIcon} src={habilidade.displayIcon} alt={habilidade.displayName} />
                                            </div>
                                        ))}
                                    </ul>

                                </div>
                            </div>

                        ))}
                    </ul>
                ) : (
                    <p>Carregando dados da API...</p>
                )}
            </div>
        </>
    );
}
