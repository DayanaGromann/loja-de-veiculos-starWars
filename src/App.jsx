import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import StoreScreen from "./screens/Store";
import CartScreen from "./screens/Cart";
import MyOrders from "./screens/MyOrders";

function App() {
  const [vehicles, setVehicles] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [clientInfo, setClientInfo] = useState();
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    calculateValue();
  });

  useEffect(() => {
    getVehicles();
    let items = localStorage.cartItems
      ? JSON.parse(localStorage.cartItems)
      : [];
    setCartItems(items);
  }, []);

  const calculateValue = () => {
    let value = 0;
    for (let i = 0; i < cartItems.length; i++) {
      value += parseFloat(cartItems[i].cost_in_credits);
    }
    setTotalValue(value);
  };

  const addVehicleToCart = (vehicle) => {
    let item = [...cartItems, vehicle];
    setCartItems(item);
    localStorage.setItem("cartItems", JSON.stringify(item));
  };

  const getVehicles = () => {
    axios
      .get("https://swapi.dev/api/vehicles/?format=json")
      .then((response) => setVehicles(response.data.results))
      .catch((error) => alert(error.message));
  };

  return (
    <BrowserRouter>
      <Header cartItemsQuantity={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <StoreScreen
              vehicles={vehicles}
              addVehicleToCart={addVehicleToCart}
            />
          }
        />
        <Route
          path="cart"
          element={
            <CartScreen
              cartItems={cartItems}
              setClientInfo={setClientInfo}
              clientInfo={clientInfo}
              totalValue={totalValue}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="orders"
          element={
            <MyOrders
              cartItems={cartItems}
              clientInfo={clientInfo}
              totalValue={totalValue}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
