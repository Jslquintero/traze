/**
 * @author Jose Salvador lopez
 * @name footer tipo function
 * @date 28 Julio del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose
 * @dateUpdate
 * @descripcionUpdate
 * @version 1.0.0
 * @params {}
 */

import "./_style.scss";
import "./../../../assets/styles/styles.scss";
import facebook from "./../../../assets/social/facebook.svg";
import behance from "./../../../assets/social/behance.svg";
import linkedin from "./../../../assets/social/linkedin.svg";
import twitter from "./../../../assets/social/twitter.svg";

import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer-info m-5">
          <div className="top-row">
            <div className="logo">
              <img src="https://picsum.photos/250/55" alt="logo" />
            </div>
            <div className="social">
              <a href="https://www.facebook.com/">
                <img width={25} height={25} src={facebook} alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/">
                <img width={25} height={25} src={linkedin} alt="facebook" />
              </a>
              <a href="https://www.twitter.com/">
                <img width={25} height={25} src={twitter} alt="facebook" />
              </a>
              <a href="https://www.behance.com/">
                <img width={25} height={25} src={behance} alt="facebook" />
              </a>
            </div>
          </div>
          <div className="bottom-row mt-1">
            <div className="info-items">
              <ul>
                <li style={{ listStyle: "none" }}>
                  Copyright © 2022 TRAZE. Todos los derechos reservados.
                  <br />
                  Soluciones Tecnológicas Automotrices Traze S.A.P.I. de C.V
                </li>
                <li>
                  <a href="https://www.google.com">Aviso de Privacidad</a>
                </li>
                <li>
                  <a href="https://www.google.com">Términos y Condiciones</a>
                </li>
                <li>
                  <a href="https://www.google.com">Transparencia</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
