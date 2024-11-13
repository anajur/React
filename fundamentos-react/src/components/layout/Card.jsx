import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">{props.titulo}</div>
      <div className="card-content">{props.children}</div>
    </div>
  );
}
