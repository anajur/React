import React from "react";
import cantores from "../../data/cantores";
import "./TabelaCantores.css";

export default (props) => {
  function getLinhas() {
    return cantores.map((cantor, i) => {
      return (
        <tr key={cantor.id} className={i % 2 === 0 ? "par" : "impar"}>
          <td>{cantor.id}</td>
          <td>{cantor.nome}</td>
          <td>{cantor.nota.toFixed(2)}</td>
        </tr>
      );
    });
  }
  return (
    <div className="tabelaCantores">
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
