import React, {cloneElement} from "react";
import './Basicos.css'
import MembroFamilia from "./MembroFamilia";

export default props => {
  return (
    <div>
      {/* {React.cloneElement(props.children)} */}
      {/* {cloneElement(props.children)} */}
       {/* {props.children} */}
       {props.children.map((child, i)=> {
        return cloneElement(child,{...props, key: i})
       })}
    </div>
  )
}
