import React from "react";
import imagenuno from "../img/IMAGEN1.png";
import imagendos from "../img/IMAGEN2.png";
import styles from "./Header.module.css";
import mostrarSigno from "./MostrarSigno";

const Header = ({ fechaDesde, fechaHasta, precio, pais, tamanio }) => {
  const setFechas = (fecha) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(fecha + "T00:00:00").toLocaleDateString("es-CO", options);
  };

  return (
    <>
      <picture className={styles.logo}>
        <img src={imagenuno} className={styles.imagenUno} alt="" />
      </picture>
      <div className={styles.cuadrado}></div>
      <div className={styles.rectangulo}></div>

      <div className={styles.cabecera}>
        <img src={imagendos} className={styles.imagenDos} alt="" />

        <section className={styles.InformacionReserva}>
          {typeof fechaDesde === "string" ? (
            <h3>
              Fecha llegada: <span>{setFechas(fechaDesde)}</span>
            </h3>
          ) : (
            <h3>Ingresa la fecha de llegada</h3>
          )}

          {typeof fechaHasta === "string" ? (
            <h3>
              Fecha salida: <span>{setFechas(fechaHasta)}</span>
            </h3>
          ) : (
            <h3>Ingresa la fecha de salida </h3>
          )}

          {pais !== "Todos" ? (
            <h3>
              Ubicación:<span>{pais}</span>
            </h3>
          ) : (
            <h3> ¿A dónde viajas? </h3>
          )}

          {precio !== "Cualquier" ? (
            <h3>
              Precio: <span>{mostrarSigno(precio)}</span>
            </h3>
          ) : (
            <h3> ¿Qué precio buscas? </h3>
          )}

          {tamanio !== "Cualquier" ? (
            <h3>
              Habitaciones: <span>{tamanio}</span>
            </h3>
          ) : (
            <h3> ¿Con cuantas habitaciones? </h3>
          )}
        </section>
      </div>
    </>
  );
};

export default Header;
