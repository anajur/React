import React from "react";
import If from "./If";
import { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}
    return (<div>
        <If test={usuario && usuario.nome}>
        Seja bem vinda <strong>{usuario.nome}</strong>
        <Else>Seja bem vinda <strong>amiga</strong></Else>
        </If>
    </div>)
}