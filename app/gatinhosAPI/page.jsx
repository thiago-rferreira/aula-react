'use client'
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header'
import gatinhos from '@/data/gatinhos';

function page() {

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await gatinhos();
                setApiData(data);
                console.log(data);
            } catch (error) {
                // Lidar com erros de chamada à API
            }
        };
        fetchData();
    }, []);

    return (

        <div>
            <Header/>
            <h1>Page</h1>
            {
                apiData ? (
                    <ul>
                        {apiData.map((gatinho) => (
                            <div
                                key={gatinho.id}
                            >
                                <li>{gatinho.id}</li>
                                <img src={gatinho.url} alt='{gatinho.id}' width={256} height={256}/>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p>Carregando dados da API...</p>
                )
            }
        </div>
    )
}

export default page