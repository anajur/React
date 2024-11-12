import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Comp from './components/basicos/Primeiro'

const tag = <strong>Olá</strong>
ReactDOM.render(
  <div>
      <div><strong>{tag}</strong></div>,
    <Comp></Comp>
  </div>,
  document.getElementById('root')
)