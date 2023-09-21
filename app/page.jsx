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
      <h1>Projetos</h1>
      </div>
  );
};

export default App;