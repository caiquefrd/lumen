'use client';
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [acesso, setAcesso] = useState(false);
  const [status, setStatus] = useState<statusInterface[]>()
  const acende = async () => {
    const novoStatus = acesso ? 'OFF' : 'ON';
  
    try {
      // Tenta enviar para ESP8266
      await fetch(`http://192.168.73.217/LED=${novoStatus}`).catch(() => {});
    } catch (_) {
      // erro ignorado
    }
  
    try { 
      // Tenta persistir no backend
      await fetch('http://192.168.73.68:3000/persistance', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: novoStatus })
      }).catch(() => {});
    } catch (_) {
      // erro ignorado
    }
  
    // Atualiza o estado
    setAcesso(!acesso);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/persistance');
        const data = await response.json();
        if (data) {
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
  
    fetchData();
  }, [acesso]);
  
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Controle de LED</h1>
      
      <button onClick={acende} className={styles.button}>
        {acesso ? 'Apagar LED' : 'Acender LED'}
      </button>

      <section className={styles.data}>
        <h2>Dados</h2>
        <ul>
          {status == null ? <></> :
            status?.map((item:statusInterface) => {
              return <li key={item.status + Math.random()}>
                {item.status} - {item.timestamp.toString()}
              </li>
            })
          }
        </ul>
      </section>
    </main>
  );
}

interface statusInterface{
  status:string,
  timestamp: Date
}