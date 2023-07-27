/**
 * @author: Jose Salvador
 * @date: 26 Julio del 2023
 * @description: Pagina de inicio
 * @Editor:
 * @dateUpdate:
 * @descriptionUpdate:
 * @version: 1.0.0
 * @param{}props
 */
import React from "react";
import Button from "../button/button";
import "./_style.scss";
import "./../../../assets/styles/styles.scss";

export default function Card(props) {
  return (
    <>
      <div className="card grid">
        {props.img && (
          <div className="card-img">
            <img src={props.img} alt="imagen" />
          </div>
        )}
        <div className={`card-body grid ${props.align}`}>
          <h3 className="card-title"> {props.title}</h3>
          <p className="card-subtitle">{props.subtitle}</p>
          <Button styleType="btn-card grid visible" text={props.buttonText} />
        </div>
      </div>
    </>
  );
}
