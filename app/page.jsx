"use client"
import React, { useState } from 'react';
import PopUp from './components/popUp/PopUp';
import Header from './components/header/Header';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  function handleShowPopup(message,type,time){
    setPopupMessage(message)
    setPopupType(type)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, time)
  }

  return (
    <div>
      <Header/>
      <button onClick={() => handleShowPopup('Erro ao processar!', 'error', 4000)}>
        Exibir mensagem de erro
      </button>
      <button onClick={() => handleShowPopup('Operação concluída com sucesso!', 'success', 6000)}>
        Exibir mensagem de sucesso
      </button>

      {showPopup && (
        <PopUp
          message={popupMessage}
          type={popupType}
        />
      )}
    </div>
  );
};

export default App;