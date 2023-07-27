/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 26 Julio del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editor
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {children}
 */

import React from "react";
import "./_style.scss";
import "./../../../assets/styles/styles.scss";

export default function Bar(props) {
  return (
    <nav className="navbar grid w-100" id="navbar">
      <div className="grid nav-container m-2">
        <div className="grid nav-logo">
          <img
            alt="logo"
            src="https://picsum.photos/250/55"
            className="logo-bar"
          />
        </div>
        <div>
          <ul className="items grid no-list-style content-center">
            {props.children}
          </ul>
        </div>
      </div>
    </nav>
  );
}
