import React, { useState } from "react";
import VehicleCard from "./VehicleCard";

export default function VehiclesList({ vehicles, filters, addVehicleToCart }) {
  const filter = (vehicle) => {
    if (vehicle.cost_in_credits == "unknown") {
      vehicle.cost_in_credits = 10000;
    }

    if (vehicle.cargo_capacity == "none") {
      vehicle.cargo_capacity = 0;
    }

    if (
      vehicle.cost_in_credits >= filters.minValue &&
      vehicle.cost_in_credits <= filters.maxValue &&
      vehicle.cargo_capacity >= filters.minCargo &&
      vehicle.cargo_capacity <= filters.maxCargo &&
      vehicle.length >= filters.minSize &&
      vehicle.length <= filters.maxSize &&
      (vehicle.manufacturer == filters.manufacturer ||
        filters.manufacturer == null)
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <section className="VehiclesList">
      {vehicles.filter(filter).map((element, i) => {
        return (
          <VehicleCard
            key={i}
            vehicle={element}
            addVehicleToCart={addVehicleToCart}
          />
        );
      })}
    </section>
  );
}
