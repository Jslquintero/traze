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
import Card from "../../components/elements/card/card";
import "./../../assets/styles/styles.scss";
import "./_style.scss";

export default function Home() {
  const card_testimonials = () => {
    const card_list = [
      {
        img: "https://picsum.photos/45/45",
        title: "Title Card",
        subtitle:
          "¡Adiós a las complejidades e inseguridades de transaccionar con un particular!",
      },
      {
        img: "https://picsum.photos/45/45",
        title: "Title Card",
        subtitle:
          "¡Adiós a las complejidades e inseguridades de transaccionar con un particular!",
      },
      {
        img: "https://picsum.photos/45/45",
        title: "Title Card",
        subtitle:
          "¡Adiós a las complejidades e inseguridades de transaccionar con un particular!",
      },
    ];
    const data = card_list.map((item, index) => (
      <Card
        key={index}
        img={item.img}
        title={item.title}
        subtitle={item.subtitle}
        content_align={"content-center"}
        card_align={"content-center"}
      />
    ));
    return data;
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="grid m-8 mx-auto my-auto">
          <div className="grid grid-cols-2">
            <div className="grid content-left mb-10">
              <h3 className="title">
                Nunca compres o vendas un vehículo
                <br />
                sin usar el Pago
                <b>Seguro TRAZE®</b>
              </h3>

              <p className="subtitle">
                Con Traze puedes comprar y vender tu vehículo con la seguridad
                de
                <br /> [PENDING]. <b>Pagos verdaderamente seguros</b>.
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
      </section>

      <section>
        <div className="grid m-5">
          <div className="grid content-center mt-3">
            <h3 className="title">Header Content</h3>
            <p className="subtitle">
              ¡Adiós a las complejidades e inseguridades de transaccionar con un
              <br />
              particular! Traze te permite adquirir tu vehículo con la garantía
              de pago.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="grid m-5">
          <h3 className="title content-center">Holder Title</h3>
          <div className="grid grid-cols-3 ">{card_testimonials()}</div>
        </div>
      </section>

      <section>
        <div className="grid m-8 mx-auto my-auto">
          <div className="grid grid-cols-2">
            <div className="grid content-left ml-5">
              <div className="">
                <img src="https://picsum.photos/500/400" alt="" />
              </div>
            </div>

            <div className="grid content-left mb-10">
              <h3 className="title">
                <b>
                  Descubre lo fácil que es transaccionar
                  <br />
                  tu vehículo a través de TRAZE
                </b>
              </h3>

              <p className="subtitle">
                ¡Adiós a las complejidades e inseguridades de transaccionar con
                <br />
                un particular! Traze te permite adquirir tu vehículo con la
                garantía de pago.
              </p>
              <ol type="1">
                <li>
                  El Comprador y Vendedor acuerdan los términos de la
                  transacción
                </li>
                <li>Comprador paga a Traze</li>
                <li>Vendedor entrega Vehículo y Documentación</li>
                <li>
                  Comprador inspecciona y aprueba el Vehículo y Documentación
                </li>
                <li>Traze paga al Vendedor</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid m-5">
          <div className="grid grid-cols-3 ">{card_testimonials()}</div>
        </div>
      </section>
    </>
  );
}
