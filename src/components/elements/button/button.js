/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 26 Julio del 2023
 * @descripcion Componente para el boton enviar
 * @editor Jose Salvador lopez
 * @dateUpdate
 * @descripcionUpdate
 * @version 1.0.0
 * @params
 */

import React from "react";
import "./_style.scss";

export default function Button(props) {
  return (
    <>
      <button className={props.styleType}>{props.text}</button>
    </>
  );
}
