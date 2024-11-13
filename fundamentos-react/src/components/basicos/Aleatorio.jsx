import React from "react";
import "./Basicos.css";

export default function Aleatorio(props) {
  const { min, max } = props;
  const numeroAleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <>
      <div className="numero-aleatorio">
        <p>{numeroAleatorio}</p>
      </div>
    </>
  );
}
