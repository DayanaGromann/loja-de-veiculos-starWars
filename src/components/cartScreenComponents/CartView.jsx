import React from "react";

export default function CartView({ cartItems, totalValue, setStage }) {
  if (true) {
    return (
      <div className="cartScreen">
        <div className="itemsContainer">
          <h1>Confira seu pedido</h1>
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
          <h2>
            valor total:{" "}
            {parseFloat(totalValue).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h2>
          <button
            className="confirmButton"
            onClick={() => {
              setStage(2);
            }}
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }
}
