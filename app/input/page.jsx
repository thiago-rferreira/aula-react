"use client";
import React, { useState } from 'react';
import Header from '../components/header/Header';
import TextInput from '../components/textInput/TextInput';

function MyComponent() {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <Header />
            <h1>Exemplo de Uso do Componente TextInput</h1>
            <TextInput
                label="Nome:"
                type="text"
                value={name}
                onChange={handleNameChange}
            />
            <p>Nome digitado: {name}</p>
        </div>
    );
}

export default MyComponent;
