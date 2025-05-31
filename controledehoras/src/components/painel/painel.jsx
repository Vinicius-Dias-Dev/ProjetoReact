import React from "react";

import styles from "./painel.module.css";
import Calculodehoras from "./Calculo_de_horas/Calculodehoras";

import CalculadoraHoraExtra from "./Calculadora_de_hora_extra/Calculadoradehoraextra";
import ExtraStyles from "./Calculadora_de_hora_extra/horaextra.module.css";

const Painel = () => {
  return (
    <div className={styles.painel}>
      <div className="titulo-container">
        <h1>Bem-vindo</h1>
      </div>

      <ul>
        <li>
          <a href="/calculodehoras">Calculadora de Ponto</a>
        </li>
        <li>
          <a href="#">Feriados Pendentes</a>
        </li>
        <li>
          <a href="/Calculadoradehoraextra">Calculadora De horas Extra</a>
        </li>
      </ul>
    </div>
  );
};

export default Painel;
