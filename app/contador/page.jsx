"use client";

import Header from '../components/header/Header';
import Counter from '../components/counter/Counter';

function page() {
    return (
        <div>
            <Header />
            <h2>Aula de estado</h2>
            <Counter
                valorPadrao={0}
                agregacao={1}
                limitMin={-10}
                limitMax={10}
            />

            <Counter
                valorPadrao={0}
                agregacao={100}
                limitMin={0}
                limitMax={10000}
            />

            <Counter
                valorPadrao={100}
                agregacao={1000}
                limitMin={0}
                limitMax={100000}
            />
        </div>
    )
}

export default page