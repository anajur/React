import React from "react";
import './Basicos.css'

export default function Primeiro() {
  const msg = "Seja bem vinda(o)!";
  return (
    <div className="boas-vindas">
      <p>{msg}</p>
    </div>
  );
}
