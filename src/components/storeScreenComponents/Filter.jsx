import React, { useState } from "react";

export default function Filter({ setFilters, filters }) {
  const [isFilterOpened, setIsFilterOpened] = useState(false);

  const getFilters = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const removeFilters = () => {
    setFilters({
      minValue: 0,
      maxValue: Number.POSITIVE_INFINITY,
      minCargo: 0,
      maxCargo: Number.POSITIVE_INFINITY,
      minSize: 0,
      maxSize: Number.POSITIVE_INFINITY,
      manufacturer: undefined,
    });
  };

  return (
    <section className={"filterContainer"}>
      <button
        className="filterButton"
        onClick={() => {
          setIsFilterOpened(!isFilterOpened);
        }}
      >
        Filtrar resultados
      </button>
      <form className={isFilterOpened ? "openFilter" : "closeFilter"}>
        <h1>Filtros</h1>
        <h3>Preço</h3>
        <label>valor mínimo</label>
        <input
          type="number"
          step="0.1"
          name="minValue"
          value={filters.minValue}
          onChange={getFilters}
        />
        <label>Valor máximo</label>
        <input
          type="number"
          step="0.1"
          name="maxValue"
          value={filters.maxValue}
          onChange={getFilters}
        />

        <h3>Capacidade de carga</h3>
        <label>mínima</label>
        <input
          type="number"
          name="minCargo"
          value={filters.minCargo}
          onChange={getFilters}
        />
        <label>máxima</label>
        <input
          type="number"
          name="maxCargo"
          value={filters.maxCargo}
          onChange={getFilters}
        />

        <h3>Tamanho</h3>
        <label>mínimo</label>
        <input
          type="number"
          step="0.1"
          name="minSize"
          value={filters.minSize}
          onChange={getFilters}
        />
        <label>máximo</label>
        <input
          type="number"
          step="0.1"
          name="maxSize"
          value={filters.maxSize}
          onChange={getFilters}
        />

        <label>
          <h3>Fabricante</h3>
        </label>
        <select
          name="manufacturer"
          value={filters.manufacturer}
          onChange={getFilters}
        >
          <option value="Corellia Mining Corporation">
            Corellia Mining Corporation
          </option>
          <option value="Incom Corporation">Incom Corporation</option>
          <option value="SoroSuub Corporation">SoroSuub Corporation</option>
          <option value="Sienar Fleet Systems">Sienar Fleet Systems</option>
          <option value="Kuat Drive Yards, Imperial Department of Military Research">
            Kuat Drive Yards
          </option>
          <option value="Bespin Motors">Bespin Motors</option>
          <option value="Ubrikkian Industries Custom Vehicle Division">
            Ubrikkian Industries
          </option>
        </select>

        <button className="filterApplyButton" onClick={removeFilters}>
          X Remover filtros
        </button>
      </form>
    </section>
  );
}
