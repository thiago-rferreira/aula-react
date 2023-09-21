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
                agregacao={100}
                limitMin={0}
                limitMax={1000}
            />

            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
            <Counter
                valorPadrao={0}
                agregacao={50}
                limitMin={0}
                limitMax={200}
            />
        </div>
    )
}

export default page