import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TextInput from "./components/textInput/TextInput";
import styles from "./page.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.divMain}>
        <h1>Página de inicio</h1>
        <TextInput/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;