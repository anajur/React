import React from "react";
import cantores from "../../data/cantores";

export default (props) => {
  const lista = cantores.map((cantor) => {
    return (
      <li>
        {cantor.id}. {cantor.nome} {cantor.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lista}</ul>
    </div>
  );
};
