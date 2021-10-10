import React from "react";
import styles from "./Cards.module.css";
import imagenBusquedaFallida from "../img/imagenBusquedaFallida.png";
import Card from "../card/Card";

const Cards = ({ nuevaListaHotelesFiltrada }) => {
  if (!nuevaListaHotelesFiltrada.length) {
    return (
      <div className={styles.busquedaFallida}>
        <h1>
          No hay ningún hotel que coincida con esta búsqueda, puedes intentar
          con otra.
          <br />
          <span>Gracias</span>
        </h1>

        <img src={imagenBusquedaFallida} alt="" className={styles.imgFallida} />
      </div>
    );
  } else {
    return (
      <>
        <main className={styles.contenedorCards}>
          {nuevaListaHotelesFiltrada.map((hotel) => {
            return <Card key={hotel.slug} hotel={hotel} />;
          })}
        </main>
      </>
    );
  }
};

export default Cards;
