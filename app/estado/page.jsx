"use client";

import { useState } from 'react';
import Header from '../components/header/Header';

export default function Estado(){
    const [contador, setContador] = useState(0);

    const incrementa = () => {
        setContador(contador + 1);
        console.log(contador);
    }

    const decrementa = () => {
        // if(contador > 0){
        //     setContador(contador - 1);
        // }else{
        //     setContador(0);
        // }
        setContador(contador>0 ? contador - 1 : 0);
    }

    const reset = () => {
        setContador(0);
    }

    return(
        <div>
            <Header/>
            <p>Contagem: {contador}</p>
            <button onClick={incrementa}>+</button>
            <button onClick={decrementa}>-</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}