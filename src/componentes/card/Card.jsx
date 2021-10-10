import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

const Card = ({ hotel }) => {
  const reservarHotel = () => {
    alert("Hotel reservado");
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const setearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-CO", options);
  };

  return (
    <>
      <div className={styles.contenedorCard}>
        <picture>
          <img src={hotel.photo} alt={`fotografía del hotel ${hotel.name}`} />
        </picture>
        <div className={styles.nombreHotel}>
          <h1>{hotel.name}</h1>
          <div className={styles.ubicacion}>
            <FontAwesomeIcon
              className={styles.iconoMap}
              icon={faMapMarkerAlt}
            />
            <h2>{hotel.country}</h2>
          </div>
        </div>
        <section className={styles.fechaEntradaSalida}>
          <h3>
            Fecha disponible llegada:
            <span> {setearFecha(hotel.availabilityFrom)}</span>
          </h3>
          <h3>
            Fecha disponible salida:
            <span> {setearFecha(hotel.availabilityTo)}</span>
          </h3>
        </section>
        <section className={styles.descripcion}>
          <p>{hotel.description}</p>
        </section>
        <section className={styles.otraInformacion}>
          <div className={styles.habitaciones}>
            <div className={styles.cuadradoHabitaciones}>
              <FontAwesomeIcon className={styles.IconBed} icon={faBed} />
            </div>
            <h3>{hotel.rooms} habitaciones</h3>
          </div>
          <h3 className={styles.precio}>
            {Array.from({ length: hotel.price }).map((i) => {
              return <span>$</span>;
            })}
            {Array.from({ length: 4 - hotel.price }).map((i) => {
              return <span className={styles.precioOpaco}>$</span>;
            })}
          </h3>
        </section>
        <button className={styles.reservar} onClick={reservarHotel}>
          RESERVAR
        </button>
      </div>
    </>
  );
};

export default Card;
