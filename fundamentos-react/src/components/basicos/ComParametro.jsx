import React from "react";
import './Basicos.css'

export default function ComParametro(props) {
  return (
    <div>
      <h2 className="titulo">{props.titulo}</h2>
      <h3 className="subtitulo">{props.subtitulo}</h3>
    </div>
  );
}
