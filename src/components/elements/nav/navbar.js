/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 26 Julio del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editor
 * @dateUpdate
 * @descripcionUpdate
 * @version 1.0.0
 * @params {links, id, styleClass, children, ref}
 */

import React, { useState } from "react";
import Item from "./item";
import Bar from "./bar";
import "./_style.scss";
import "./../../../assets/styles/styles.scss";

export default function Navbar(props) {
  const [header, setHeader] = useState("links");
  return (
    <>
      <div className="site-navigation-wrapper">
        <Bar>
          <div className="site-header-main-logo-hb">
            <img
              alt="logo"
              src="https://picsum.photos/136/40"
              className="logo-bar"
            />
          </div>
          <div
            className="hb-bar"
            onClick={() =>
              header !== "links" ? setHeader("links") : setHeader("links-show")
            }
          >
            <svg
              viewBox="0 0 100 80"
              width="40"
              height="40"
              className="hamburger-bar"
            >
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </div>

          <div className={header}>
            <Item
              logo="https://picsum.photos/136/40"
              items={[
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Inicio",
                },
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Beneficios",
                },
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Características",
                },
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Proceso",
                },
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Requisitos",
                },
                {
                  route: "/",
                  styleClass: "links-text",
                  ref: "Preguntas Frecuentes",
                },
              ]}
            />
          </div>
        </Bar>
      </div>
    </>
  );
}
