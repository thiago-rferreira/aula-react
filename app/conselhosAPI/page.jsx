'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from '../components/header/Header';
import conselho from '@/data/conselho';
import estilo from './conselhos.module.css'

import { Hearts } from 'react-loader-spinner'

function page() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await conselho();
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
            <Header />
            <h1>Api de conselhos</h1>
            {
                apiData ? (
                    <p className={estilo.main}>{apiData.slip.advice}</p>

                ) : (
                    <div className={estilo.loading}>
                        <Hearts
                            height="80"
                            width="80"
                            color="pink"
                            ariaLabel="hearts-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>

                )
            }
        </div>
    )
}

export default page