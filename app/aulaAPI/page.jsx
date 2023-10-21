'use client';
import React, { useEffect, useState } from "react";
import fetchApiData from "../components/apiCaller/fetchApiData";
import Header from "../components/header/Header";
import styles from "./aulaAPI.module.css";
import ListaAgentes from "../../models/ListaAgentes";
import Agente from "../../models/Agente";

const instanciaLista = new ListaAgentes(); // Crie uma única instância fora do componente

export default function Home() {
  const [listaAgentes, setListaAgentes] = useState([]); // Inicialize com um array vazio

  const [apiData, setApiData] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [bustPortrait, setBustPortrait] = useState("");
  const [description, setDescription] = useState("");

  const handleAddAgente = () => {
    const novoAgente = new Agente(displayName, bustPortrait, description);
  
    // Verifique se o agente já está na lista local
    if (!listaAgentes.some(agente => agente.displayName === displayName)) {
      // Se não estiver, adicione-o à lista local
      const updatedAgentes = [...listaAgentes, novoAgente];
      setListaAgentes(updatedAgentes);
    }
  
    // Adicione o agente à instância compartilhada
    instanciaLista.addAgente(novoAgente);
  
    // Limpar os campos do formulário
    setDisplayName("");
    setBustPortrait("");
    setDescription("");
  };
  
  

  const removeAgente = (agente) => {
    instanciaLista.removeAgente(agente); // Remova o agente da instância compartilhada

    // Atualize o estado local com a lista de agentes atualizada (sem o agente removido)

    setListaAgentes(instanciaLista.getListaAgentes());
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiData();
        setApiData(data);
      } catch (error) {
        // Lidar com erros de chamada à API
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (apiData && apiData.data) {
      apiData.data.forEach((agenteData) => {
        const novoAgente = new Agente(
          agenteData.displayName,
          agenteData.bustPortrait,
          agenteData.description
        );
        instanciaLista.addAgente(novoAgente);
      });

      // Atualize o estado com a lista de agentes atualizada
      const updatedAgentes = [...listaAgentes, ...instanciaLista.getListaAgentes()]; // Combine os dados da API com os existentes
      setListaAgentes(updatedAgentes);
    }
  }, [apiData]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>API Data:</h1>
        <div className={styles.agentForm}>
          <input
            type="text"
            placeholder="Nome do Agente"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL da Imagem"
            value={bustPortrait}
            onChange={(e) => setBustPortrait(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição do Agente"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleAddAgente}>Adicionar Agente</button>
        </div>
        <ul className={styles.ul}>
          {listaAgentes && listaAgentes.length > 0 ? (
            listaAgentes.map((agente) => (
              <div key={agente.uuid} className={styles.card}>
                <li className={styles.agentName}>{agente.displayName}</li>
                <img
                  className={styles.img}
                  src={agente.bustPortrait}
                  alt={agente.displayName}
                />
                <p>{agente.description}</p>
                <button onClick={() => removeAgente(agente)}>Remover</button>
              </div>
            ))
          ) : (
            <p>Nenhum agente disponível.</p>
          )}
        </ul>
      </div>
    </>
  );
}
