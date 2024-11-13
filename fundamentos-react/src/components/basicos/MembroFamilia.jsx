import React from "react";
import './Basicos.css'

export default (props) => {
  return <div>{props.nome} <strong>{props.nota}</strong></div>
}
