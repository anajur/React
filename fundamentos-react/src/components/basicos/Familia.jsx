import React from "react";
import './Basicos.css'
import MembroFamilia from "./MembroFamilia";

export default props => {
  return (
    <div>
       <MembroFamilia nome="Bruno Mars"></MembroFamilia>
       <MembroFamilia nome="Michael Jackson" {...props}></MembroFamilia>
       <MembroFamilia nome="Beyoncé"></MembroFamilia>
    </div>
  )
}
