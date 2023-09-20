import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./page.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.divMain}>
        <h1>Teste</h1>
      </main>
      <Footer/>
    </div>
  );
};

export default App;