/**
 * @author Jose Salvador lopez
 * @name Item tipo function
 * @date 28 Julio del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose
 * @dateUpdate
 * @descripcionUpdate
 * @version 1.0.0
 * @params {titulo, text}
 */

import "./_style.scss";
import "./../../../assets/styles/styles.scss";

import React, { useState } from "react";

export default function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={`accordion ${isActive ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <div className="accordion-container">
          <div className="label">{props.titulo}</div>

          {isActive && <div className="content">{props.text}</div>}
        </div>
      </div>
    </>
  );
}
