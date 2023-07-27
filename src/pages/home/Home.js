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
import Navbar from "../../components/elements/nav/navbar";
import Button from "../../components/elements/button/button";
import "./../../assets/styles/styles.scss";
import "./_style.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid m-8 mx-auto my-auto">
        <div className="grid grid-cols-2">
          <div className="grid content-left mb-10">
            <h3 className="title">
              Nunca compres o vendas un vehículo sin usar el Pago
              <b>Seguro TRAZE®</b>
            </h3>

            <p className="subtitle">
              Con Traze puedes comprar y vender tu vehículo con la seguridad de
              [PENDING]. <b>Pagos verdaderamente seguros</b>.
            </p>
            <Button
              styleType="button rounded primary"
              text={"Empezar Pago Seguro Traze®"}
            />
          </div>

          <div className="grid content-right mr-5">
            <div className="">
              <img src="https://picsum.photos/500/400" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
