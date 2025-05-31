import { useState } from "react";
import ExtraStyles from "./horaextra.module.css";

const Calculadoradehoraextra = () => {
  const [salario, setSalario] = useState("");
  const [percentual, setPercentual] = useState(100);
  const [mensagemCalculada, setMensagemCalculada] = useState("");

  // Função para formatar o valor como moeda
  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  // Função para atualizar o salário formatado
  const handleChangeSalario = (e) => {
    const valorNumerico = parseFloat(e.target.value.replace(/\D/g, "")) / 100;
    setSalario(formatarMoeda(valorNumerico));
  };

  // Função para calcular horas extras
  const calcularHoraExtra = () => {
    const salarioNumerico = parseFloat(salario.replace(/[^0-9,]/g, "").replace(",", "."));

    if (!salarioNumerico || salarioNumerico <= 0) {
      alert("Digite um salário válido!");
      return;
    }

    // Calcula valor da hora normal
    const valorHoraNormal = salarioNumerico / 220;

    // Aplica o percentual da hora extra
    const valorHoraExtraCalculado = valorHoraNormal * (1 + percentual / 100);

    // Gera a mensagem com diferentes quantidades de horas extras
    const valores = `
    Se você fizer apenas 1h extra, você ganha: ${formatarMoeda(valorHoraExtraCalculado)}
    Se fizer 2h extras, você ganha: ${formatarMoeda(valorHoraExtraCalculado * 2)}
    `;
    

    setMensagemCalculada(valores);
  };

  return (
    <div className={ExtraStyles.calculadora}>
      <h2 className={ExtraStyles.h2}>Calculadora de Hora Extra</h2>

      <label>Qual é seu salário?</label>
      <input
        type="text"
        placeholder="Digite seu salário"
        value={salario}
        onChange={handleChangeSalario}
      />

      <label>Percentual da Hora Extra:</label>
      <select
        value={percentual}
        onChange={(e) => setPercentual(Number(e.target.value))}
      >
        <option value={60}>60%</option>
        <option value={100}>100%</option>
        <option value={150}>150%</option>
        <option value={200}>200%</option>
      </select>

      <button onClick={calcularHoraExtra}>Calcular</button>

      {mensagemCalculada &&
  mensagemCalculada.split("\n").map((linha, index) => (
    <p key={index}>{linha}</p>
  ))}

    </div>
  );
};

export default Calculadoradehoraextra;
