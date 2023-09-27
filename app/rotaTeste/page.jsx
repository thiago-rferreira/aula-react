"use client";
import Header from "../components/header/Header";
import PopUpAula from "../components/popUpAula/PopUpAula";
import { useState } from "react";

const rotaTeste = () => {

    const [exibirPopUp, setExibirPopUp] = useState(false);
    const [mensagemPopUp, setMensagemPopUp] = useState('');
    const [tipoPopUp, setTipoPopUp] = useState('');

    function handlerExibirPopUp(tipo, mensagem,tempo) {
        setMensagemPopUp(mensagem)
        setTipoPopUp(tipo)
        setExibirPopUp(true)
        setTimeout(()=>{
            setExibirPopUp(false);
        },tempo)
    }

    return (
        <div>
            <Header/>
            <button onClick={() => handlerExibirPopUp('erro', 'Deu tudo errado!', 3000) }>Exibir PopUp Erro</button>
            <button onClick={() => handlerExibirPopUp('sucesso', 'Deu tudo certo!', 6000) }>Exibir PopUp Sucesso</button>
            {
                exibirPopUp &&(
                    <PopUpAula
                    typeColor={tipoPopUp}
                    mensagem={mensagemPopUp}
                   />
                )
  
            }
            
        </div>
    )
}

export default rotaTeste;