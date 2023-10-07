'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'

function page() {
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://api.github.com/users/rafaelcastrocouto/repos');
                const json = await data.json();
                setApiData(json);
                console.log(json);
            } catch (error) {
                // Lidar com erros de chamada à API
            }
        };
        fetchData();
    }, []);
    

  return (
    <div>page</div>
  )
}

export default page