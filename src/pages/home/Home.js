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
import List from "../../components/common/List/list";
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
        card_style={"content-center rounded"}
        bg_color={"#F2F2F2"}
      />
    ));
    return data;
  };

  const card_testimonials_2 = () => {
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
        card_style={"content-center rounded"}
        bg_color={"transparent"}
      />
    ));
    return data;
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 lg-m-6">
        <div className="container">
          <div className="izquierda">
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
              text_color={"white"}
            />
          </div>
          <div className="derecha content-right">
            <div className="image-container mt-3">
              <img src="https://picsum.photos/500/400" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 m-5">
        <div className="grid content-center mt-3">
          <h3 className="title">Header Content</h3>
          <p className="subtitle">
            ¡Adiós a las complejidades e inseguridades de transaccionar con un
            particular! Traze te permite adquirir tu vehículo con la garantía de
            pago.
          </p>
        </div>
      </div>

      <div className="mt-5 m-2">
        <div className="grid sm-grid-cols-1 md-grid-cols-2 lg-grid-cols-3 mt-5 ">
          {card_testimonials()}
        </div>
      </div>

      <div className="bullet-point-container lg-m-6">
        <div className="izquierda">
          <div className="image-container mt-3">
            <img src="https://picsum.photos/500/400" alt="" />
          </div>
        </div>
        <div className="derecha">
          <div className="description">
            <h3 className="title">
              <b>
                Descubre lo fácil que es transaccionar tu vehículo a través de
                TRAZE
              </b>
            </h3>
            <p className="subtitle">
              ¡Adiós a las complejidades e inseguridades de transaccionar con un
              particular! Traze te permite adquirir tu vehículo con la garantía
              de pago.
            </p>
          </div>
          <div className="bullets">
            <List
              ol_style="circle-list"
              typeList="1"
              items={[
                {
                  text: "El Comprador y Vendedor acuerdan los términos de la transacción",
                },
                {
                  text: "Comprador paga a Traze",
                },
                {
                  text: "Vendedor entrega Vehículo y Documentación",
                },
                {
                  text: "Comprador inspecciona y aprueba el Vehículo y Documentación",
                },
                {
                  text: "Traze paga al Vendedor",
                },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="title text-center">
          <b>Holder Title</b>
        </h3>
        <div className="grid sm-grid-cols-1 lg-grid-cols-3 mt-5">
          {card_testimonials_2()}
        </div>
      </div>

      <div className="mt-5">
        <div className="centered-testimonials">
          <div className="centro">
            <h3 className="title text-left">
              <b>Header Content</b>
            </h3>
            <p className="subtitle text-left">
              ¡Adiós a las complejidades e inseguridades de transaccionar con un
              particular! Traze te permite adquirir tu vehículo con la garantía
              de pago
            </p>
            <div className="grid sm-grid-cols-1 md-grid-cols-2 lg-grid-cols-3 mt-5 lg-grid-gap-3">
              {card_testimonials()}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 m-5">
        <div className="content-center">
          <h3 className="title text-center">
            <b>Preguntas Frecuentes</b>
          </h3>
          <div className="grid grid-cols-2 faq-container sm-content-center lg-content-center grid-gap-2">
          <div className="lg-content-right sm-content-center">
              <Button
                styleType="button pill secondary"
                text={"Para el vendedor"}
                text_color={"white"}
              />
            </div>
            <div className="lg-content-left sm-content-center">
              <Button
                styleType="button pill"
                text={"Para el comprador"}
                text_color={"black"}
              />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}
