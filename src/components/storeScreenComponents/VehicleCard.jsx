import React from "react";

export default function VehicleCard({ vehicle, addVehicleToCart }) {
  return (
    <div className="itemCard">
      <div className="initialCard">
        <img src={require("../../assets/image.jpg")} alt={vehicle.name} />
        <h2>{vehicle.name}</h2>
        <p>
          Valor:{" "}
          {vehicle.cost_in_credits !== "unknown"
            ? parseFloat(vehicle.cost_in_credits).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : "R$ 10.000,00"}
        </p>
      </div>
      <div className="vehicleSpecification">
        <h1>{vehicle.name}</h1>
        <p>
          <b>Capacidade de carga: </b>
          {vehicle.cargo_capacity}
        </p>
        <p>
          <b>Consumíveis: </b>
          {vehicle.consumables}
        </p>
        <p>
          <b>Custo: </b>
          {vehicle.cost_in_credits !== "unknown"
            ? parseFloat(vehicle.cost_in_credits).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            : "R$ 10.000,00"}
        </p>
        <p>
          <b>Data de criação: </b>
          {vehicle.created.slice(0, 10).split("-").reverse().join("-")}
        </p>
        <p>
          <b>Tamanho: </b>
          {vehicle.length}
        </p>
        <p>
          <b>Fabricante: </b>
          {vehicle.manufacturer}
        </p>
        <p>
          <b>Velocidade máxima: </b>
          {vehicle.max_atmosphering_speed}
        </p>
        <p>
          <b>Modelo: </b>
          {vehicle.model}
        </p>
        <p>
          <b>Classe: </b>
          {vehicle.vehicle_class}
        </p>

        <button
          onClick={() => {
            addVehicleToCart(vehicle);
          }}
        >
          Adicionar ao carrinho{" "}
        </button>
      </div>
    </div>
  );
}
