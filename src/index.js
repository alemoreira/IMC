import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0.0);
  const [message, setMessage] = useState("");

  const handleWeightChange = event => {
    const w = event.target.value;
    console.log(w);
    setWeight(w);
  };

  const handleHeightChange = event => {
    const h = event.target.value;
    console.log(h);
    setHeight(h);
  };

  const handleCalculateIMC = () => {
    let imc = weight / (height * height);
    const imcFormated = imc.toLocaleString("pt-BR", {
      maximumSignificantDigits: 4
    });

    setMessage(imcFormated + imcMessage(imc));
  };

  const imcMessage = imc => {
    let msg = "";
    console.log(imc);
    if (imc < 20) {
      // classificacaoIMC.style.color = "#cccc00";
      msg = " ( Abaixo do Peso )";
    } else if (imc < 25) {
      // classificacaoIMC.style.color = "blue";
      msg = " ( Peso Ideal )";
    } else if (imc < 30) {
      // classificacaoIMC.style.color = "#9900cc";
      msg = " ( Sobrepeso )";
    } else if (imc < 35) {
      // classificacaoIMC.style.color = "#ff9900";
      msg = " ( Obesidade Moderada )";
    } else if (imc < 40) {
      // classificacaoIMC.style.color = "#ff0066";
      msg = " ( Obesidade Severa )";
    } else if (imc < 50) {
      // classificacaoIMC.style.color = "red";
      msg = " ( Obesidade Mórbida )";
    } else if (imc >= 50) {
      // classificacaoIMC.style.color = "#cc3300";
      msg = " ( Super Obesidade )";
    }

    console.log(msg);
    return msg;
    // divResultado.style.display = "block";
  };

  const title = {
    fontFamily: "palatino",
    fontWeight: "bold"
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 style={title}>Cálculo de IMC</h1>
        <small>Índice de Massa Corporea</small>
        <hr />
        <br />
        Altura <small>(metros)</small>
        <br />
        <input type="number" onChange={handleHeightChange} />
        <br />
        Peso <small>(kilos)</small>
        <br />
        <input type="number" onChange={handleWeightChange} />
        <br />
        <br />
        <button className="btn btn-primary" onClick={handleCalculateIMC}>
          Calcular IMC
        </button>
        <br />
        <br />
        <small>Resultado</small>
        <br />
        <input
          value={message}
          disabled
          style={{ textAlign: "center", width: "260px" }}
        />
      </div>

      <table className="table table-hover table-sm align-botton">
        <thead className="thead-dark">
          <tr>
            <th className="imc">IMC</th>
            <th className="classificacao">Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&lt; 20</td>
            <td>Abaixo do Peso</td>
          </tr>
          <tr>
            <td>20 a 25</td>
            <td>Peso Ideal</td>
          </tr>
          <tr>
            <td>25 a 30</td>
            <td>Sobrepeso</td>
          </tr>
          <tr>
            <td>30 a 35</td>
            <td>Obesidade Moderada</td>
          </tr>
          <tr>
            <td>35 a 40</td>
            <td>Obesidade Severa</td>
          </tr>
          <tr>
            <td>40 a 50</td>
            <td>Obesidade Mórbida</td>
          </tr>
          <tr>
            <td>&gt; 50</td>
            <td>Super Obesidade</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
