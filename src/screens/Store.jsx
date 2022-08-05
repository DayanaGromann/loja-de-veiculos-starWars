import React, { useState } from "react";
import "../css/store.css";

import VehiclesList from "../components/storeScreenComponents/VehiclesList";
import Filter from "../components/storeScreenComponents/Filter";

export default function StoreScreen({ vehicles, addVehicleToCart }) {
  const [filters, setFilters] = useState({
    minValue: 0,
    maxValue: Number.POSITIVE_INFINITY,
    minCargo: 0,
    maxCargo: Number.POSITIVE_INFINITY,
    minSize: 0,
    maxSize: Number.POSITIVE_INFINITY,
    manufacturer: undefined,
  });

  return (
    <div className="storeScreenContent">
      <Filter filters={filters} setFilters={setFilters} />
      {vehicles ? (
        <VehiclesList
          vehicles={vehicles}
          filters={filters}
          addVehicleToCart={addVehicleToCart}
        />
      ) : (
        <h1 className="carregando">Carregando...</h1>
      )}
    </div>
  );
}
