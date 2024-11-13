import React from "react";
import PrimeiroComponente from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";

export default function App(props) {
  return (
    <div className="app">
      <ComParametro
        titulo="Fundamentos React"
        subtitulo="Explorando Novos Componentes"
      ></ComParametro>
      <PrimeiroComponente></PrimeiroComponente>
      <div className="cards">
        <Card titulo="Número da Sorte">
          <Aleatorio min={1} max={50}></Aleatorio>
        </Card>
        <Card titulo="Número da Sorte">
          <Aleatorio min={1} max={50}></Aleatorio>
        </Card>
        <Card titulo="Número da Sorte">
          <Aleatorio min={1} max={50}></Aleatorio>
        </Card>
        <Card titulo="Número da Sorte">
          <Aleatorio min={1} max={50}></Aleatorio>
        </Card>
      </div>
      <div className="cards">
        <Card titulo="Família" >
          <Familia nota="top Star"></Familia>
        </Card>
      </div>
    </div>
  );
}
