import React from "react";
import PrimeiroComponente from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/MembroFamilia";
import ListaCantores from "./components/repeticao/ListaCantores";
import TabelaCantores from "./components/repeticao/TabelaCantores";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

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

        <Card titulo="Família">
          <Familia nota="9">
            <MembroFamilia nome="Bruno Mars"></MembroFamilia>
            <MembroFamilia nome="Michael Jackson"></MembroFamilia>
            <MembroFamilia nome="Beyoncé"></MembroFamilia>
          </Familia>
        </Card>
        <Card titulo="Cantores">
          <ListaCantores ></ListaCantores>
        </Card>
        <Card titulo="Tabela Cantores">
          <TabelaCantores></TabelaCantores>
        </Card>
        <Card titulo="Par ou Impar">
          <ParOuImpar numero={21}></ParOuImpar>
        </Card>
        <Card titulo="Par ou Impar">
          <ParOuImpar numero={20}></ParOuImpar>
        </Card>
        <Card titulo="Par ou Impar">
          <UsuarioInfo usuario={{nome: "Ana"}}></UsuarioInfo>
        </Card>
      </div>
    </div>
  );
}
