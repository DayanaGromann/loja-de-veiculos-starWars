import React, { useState, useEffect } from "react";

export default function Confirmation({ clientInfo, totalValue, cartItems }) {
  const [deliveryDate, setDeliveryDate] = useState();

  useEffect(() => {
    getDeliveryDate();
  }, []);

  const getDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    setDeliveryDate(`${d}/${m}/${y}`);
  };
  if (clientInfo) {
    return (
      <div className="cartScreen">
        <div className="itemsContainer">
          <h1>Resumo do pedido</h1>
          <h2>Itens</h2>
          {cartItems.map((item, i) => {
            return (
              <div key={i} className="cartItemContainer">
                <p>
                  <b>{i + 1 + ". "}</b>
                  {item.name}
                  {" - "}
                  {parseFloat(item.cost_in_credits).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>

                <hr />
              </div>
            );
          })}
          <div>
            <p>
              <b>valor total:</b>{" "}
              {parseFloat(totalValue).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p>
              <b>forma de pagamento:</b> {clientInfo.payment}
            </p>
            <br />
            <h2>Endereço de entrega</h2>
            <br />
            <p>
              <b>logradouro:</b> {clientInfo.adress + ", " + clientInfo.number}
            </p>
            <p>
              <b>Complemento:</b> {clientInfo.complement}
            </p>
            <p>
              <b>bairro:</b> {clientInfo.district}
            </p>
            <p>
              <b>CEP:</b> {clientInfo.cep}
            </p>
            <p>
              <b>cidade:</b> {clientInfo.city + ", " + clientInfo.state}
            </p>
            <p>
              <b>previsão de entrega:</b>
              {deliveryDate}
            </p>
            <br />
            <h2>status</h2>
            <br />
            {clientInfo.payment == "credit" ? (
              <b>Pagamento confirmado</b>
            ) : (
              <b>
                Aguardando pagamento, o processamento pode levar até 2 dias
                úteis após o pagamento
              </b>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>Você ainda não possui nenhuma compra.</h2>;
  }
}
