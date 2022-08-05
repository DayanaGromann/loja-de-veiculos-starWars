import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineShop,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../css/Header.css";
export default function Header({ cartItemsQuantity }) {
  let navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="pageTitle">Veículos Star Wars</h1>
      <nav className="nav">
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <AiOutlineShop className="icon" />
            <span className="menu-item-title">&emsp; LOJA</span>
          </li>
          <li
            onClick={() => {
              navigate("/cart");
            }}
          >
            <AiOutlineShoppingCart className="icon" />
            <span className="qtde">{cartItemsQuantity}</span>
            <span className="menu-item-title">&emsp; CARRINHO</span>
          </li>
          <li
            onClick={() => {
              navigate("/orders");
            }}
          >
            <AiOutlineOrderedList className="icon" />

            <span className="menu-item-title">&emsp; MEUS PEDIDOS</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
