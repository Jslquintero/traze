/**
 * @author Jose Salvador lopez
 * @name Item tipo function
 * @date 27 Julio del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose
 * @dateUpdate
 * @descripcionUpdate
 * @version 1.0.0
 * @params {links, id, styleClass, children, ref}
 */

import "./_style.scss";

import React from "react";

export default function List(props) {
  const items = props.items.map((item, index) => (
    <li key={item.id || index} className={item.styleClass}>
      {item.children}
      {item.text}
    </li>
  ));
  return (
    <>
      <ol className={props.ol_style} type={props.typeList}>
        {items}
      </ol>
    </>
  );
}
