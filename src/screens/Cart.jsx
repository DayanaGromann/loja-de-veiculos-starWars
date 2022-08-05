import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PurchaseForm from "../components/cartScreenComponents/Form";
import CartView from "../components/cartScreenComponents/CartView";
import CreditPayment from "../components/cartScreenComponents/CreditPayment";

import "../css/Cart.css";
import TicketPayment from "../components/cartScreenComponents/TicketPayment";

//const sgMail = require("@sendgrid/mail");
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function CartScreen({
  cartItems,
  setClientInfo,
  clientInfo,
  totalValue,
}) {
  const [stage, setStage] = useState(1);
  let navigate = useNavigate();

  const submit = () => {
    /*

    Obs: Não foi possível testar, pois não obtive autorização para criar conta no sendGrip

    const emailMessage = {
      personalizations: [
        to: clientInfo.email,
        from: "email@dominio.com",
        subject: "Resumo da sua compra",
        html: `<p> resumo </p>`,
      ]
    };

    sgMail
      .send(emailMessage)
      .then(() => {
    */
    navigate("/orders");
    localStorage.clear();
    /*
     })
      .catch((error) => {
        console.log(error);
      });
    */
  };

  if (cartItems.length > 0) {
    if (stage === 1) {
      return (
        <CartView
          cartItems={cartItems}
          totalValue={totalValue}
          setStage={setStage}
        />
      );
    } else if (stage === 2) {
      return <PurchaseForm setStage={setStage} setClientInfo={setClientInfo} />;
    } else if (stage === 3 && clientInfo.payment === "credit") {
      return <CreditPayment submit={submit} />;
    } else if (stage === 3 && clientInfo.payment === "ticket") {
      return <TicketPayment submit={submit} />;
    }
  } else {
    return <h2>Carrinho vazio</h2>;
  }
}
