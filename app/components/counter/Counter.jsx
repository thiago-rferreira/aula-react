"use client"

import { useState } from 'react';
import styles from './counter.module.css';

function Counter({ valorPadrao, agregacao, limitMin, limitMax }) {
    const [contador, setContador] = useState(valorPadrao);

    const add = () => {
        setContador(contador < limitMax ? contador + agregacao : contador);

        // if(contador < limitMax){
        //     setContador(contador + agregacao);
        // } else{
        //     setContador(contador);
        // }
    }

    const remove = () => {
        setContador(contador > limitMin ? contador - agregacao : contador);
    }

    const reset = () => {
        setContador(valorPadrao);
    }

    return (
        <div className={styles.counterContainer}>
            <p className={styles.counterText}>Contagem: {contador}</p>
            <button className={`${styles.counterButton} ${styles.addButton}`} onClick={add}>Adicionar</button>
            <button className={`${styles.counterButton} ${styles.removeButton}`} onClick={remove}>Remover</button>
            <button className={`${styles.counterButton} ${styles.resetButton}`} onClick={reset}>Voltar ao padrão</button>
        </div>

    )
}

export default Counter;