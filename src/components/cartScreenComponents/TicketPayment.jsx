import React from "react";

export default function TicketPayment({ submit }) {
  return (
    <div className="cartScreen">
      <div className="itemsContainer">
        <h1>Boleto</h1>
        <button>gerar boleto</button>
        <button className="confirmButton" onClick={submit}>
          Continuar
        </button>
      </div>
    </div>
  );
}
