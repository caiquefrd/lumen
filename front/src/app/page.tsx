'use client';
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [acesso, setAcesso] = useState(false);

  const acende = () => {
    try{
      fetch(`http://192.168.34.217/LED=${acesso ? 'OFF' : 'ON'}`);
    }
    catch(error){

    }
    setAcesso(!acesso);
  };

  useEffect(() => {
    // You can later fetch data or set intervals here
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Controle de LED</h1>
      
      <button onClick={acende} className={styles.button}>
        {acesso ? 'Apagar LED' : 'Acender LED'}
      </button>

      <section className={styles.data}>
        <h2>Dados</h2>
        <ul>
          <li>Aguardando dados...</li>
        </ul>
      </section>
    </main>
  );
}
