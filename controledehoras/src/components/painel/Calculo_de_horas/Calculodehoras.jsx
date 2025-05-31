import React, { useState } from "react";
import styles from "./CalculoDeHoras.module.css";

const CalculoDeHoras = () => {
  const [entrada, setEntrada] = useState("");
  const [saidaNormal, setSaidaNormal] = useState("");
  const [saidaExtra, setSaidaExtra] = useState("");

  const [entradaCafe, setEntradaCafe] = useState("");
  const [saidaCafe, setSaidaCafe] = useState("");
  
  // O almoço é obrigatório
  const [entradaAlmoco, setEntradaAlmoco] = useState("");
  const [saidaAlmoco, setSaidaAlmoco] = useState("");

  const [incluirCafe, setIncluirCafe] = useState(true);

  // Função para converter "HH:MM" em minutos totais
  const converterParaMinutos = (horario) => {
    const [h, m] = horario.split(":").map(Number);
    return h * 60 + m;
  };

  const calcular = () => {
    if (!entrada) return alert("Por favor, insira o horário de entrada.");
    if (!entradaAlmoco || !saidaAlmoco) return alert("O almoço é obrigatório!");

    const [horas, minutos] = entrada.split(":").map(Number);
    const entradaDate = new Date();
    entradaDate.setHours(horas);
    entradaDate.setMinutes(minutos);

    let tempoCafe = incluirCafe ? converterParaMinutos(saidaCafe) - converterParaMinutos(entradaCafe) : 0;
    let tempoAlmoco = converterParaMinutos(saidaAlmoco) - converterParaMinutos(entradaAlmoco);

    const saidaNormalDate = new Date(entradaDate);
    saidaNormalDate.setMinutes(saidaNormalDate.getMinutes() + 7 * 60 + 20 + tempoCafe + tempoAlmoco);

    const saidaExtraDate = new Date(saidaNormalDate);
    saidaExtraDate.setMinutes(saidaExtraDate.getMinutes() + 120);

    const formatTime = (date) =>
      date.getHours().toString().padStart(2, "00") + ":" +
      date.getMinutes().toString().padStart(2, "0");

    setSaidaNormal(formatTime(saidaNormalDate));
    setSaidaExtra(formatTime(saidaExtraDate));
  };

  return (
    <div className={styles.container}>
      <h2>Cálculo de Horário</h2>

      <label>Horário de Entrada: </label>
      <input type="time" value={entrada} onChange={(e) => setEntrada(e.target.value)} />

      <label>
        <input type="checkbox" checked={incluirCafe} onChange={(e) => setIncluirCafe(e.target.checked)} />
        Incluir pausa para café??
      </label>

      {incluirCafe && (
        <>
          <label>Entrada Café: </label>
          <input type="time" value={entradaCafe} onChange={(e) => setEntradaCafe(e.target.value)} />
          
          <label>Saída Café: </label>
          <input type="time" value={saidaCafe} onChange={(e) => setSaidaCafe(e.target.value)} />
        </>
      )}

      <label>Entrada Almoço: </label>
      <input type="time" value={entradaAlmoco} onChange={(e) => setEntradaAlmoco(e.target.value)} />
      
      <label>Saída Almoço: </label>
      <input type="time" value={saidaAlmoco} onChange={(e) => setSaidaAlmoco(e.target.value)} />

      <button className={styles.botao} onClick={calcular}>Calcular</button>

      <div className={styles.resultado}>
        <p>Horário de saída normal: {saidaNormal}</p>
        <p>Horário de saída com 2h extras: {saidaExtra}</p>
      </div>
    </div>
  );
};

export default CalculoDeHoras;
