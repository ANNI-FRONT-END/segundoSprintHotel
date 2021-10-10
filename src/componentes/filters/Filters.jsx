import React from "react";
import styles from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Filters = ({
  fechaDesde,
  fechaHasta,
  precio,
  pais,
  tamanio,
  setFechaDesde,
  setFechaHasta,
  setPais,
  setPrecio,
  setTamanio
}) => {
  const fechaSeleccionadaDesde = (e) => {
    setFechaDesde(e.target.value);
  };

  const fechaSeleccionadaHasta = (e) => {
    setFechaHasta(e.target.value);
  };

  const hotelesPorPais = (e) => {
    const paisSeleccionado = e.target.value;
    setPais(paisSeleccionado);
  };

  const hotelesPorTamanio = (e) => {
    const tamanioSeleccionado = e.target.value;
    setTamanio(tamanioSeleccionado);
  };

  const hotelesPorPrecio = (e) => {
    const precioSeleccionado = e.target.value;
    setPrecio(precioSeleccionado);
  };

  const limpiarFiltros = () => {
    setFechaDesde(new Date().valueOf() - 34560000000);
    setFechaHasta(new Date().valueOf() + 34560000000);
    setTamanio("Cualquier");
    setPais("Todos");
    setPrecio("Cualquier");
  };

  return (
    <>
      <nav className={styles.contenedorFiltros}>
        <form className={styles.filtros}>
          <input
            type="date"
            value={fechaDesde}
            id="desde"
            onChange={fechaSeleccionadaDesde}
          />
          <input
            type="date"
            value={fechaHasta}
            id="hasta"
            onChange={fechaSeleccionadaHasta}
          />

          <select value={pais} name="paises" id="" onChange={hotelesPorPais}>
            <option value="Todos">Todos los paises</option>
            <option value="Argentina">Argentina</option>
            <option value="Chile">Chile</option>
            <option value="Brasil">Brasil</option>
            <option value="Uruguay">Uruguay</option>
          </select>

          <select
            value={precio}
            name="precios"
            id=""
            onChange={hotelesPorPrecio}
          >
            <option value="Cualquier">Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>

          <select
            value={tamanio}
            name="tamaño"
            id=""
            onChange={hotelesPorTamanio}
          >
            <option value="Cualquier">Cualquier tamaño</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>

          <button type="reset" onClick={limpiarFiltros}>
            <FontAwesomeIcon icon={faTrash} />
            Limpiar
          </button>
        </form>
      </nav>
    </>
  );
};

export default Filters;
