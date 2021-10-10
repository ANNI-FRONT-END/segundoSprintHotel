import "./styles.css";
import Header from "./componentes/header/Header";
import Filters from "./componentes/filters/Filters";
import Cards from "./componentes/cards/Cards";
import { hotelsData } from "./statics/data";
import { useState } from "react";

const App = () => {
  const [fechaDesde, setFechaDesde] = useState(
    new Date().valueOf() - 34560000000
  );
  const [fechaHasta, setFechaHasta] = useState(
    new Date().valueOf() + 34560000000
  );
  const [pais, setPais] = useState("Todos"); // todos los hotels
  const [precio, setPrecio] = useState("Cualquier"); // cualquier
  const [tamanio, setTamanio] = useState("Cualquier"); // cualquier

  const nuevaListaHoteles = () => {
    let nuevaLista = hotelsData

      .filter((hotel) => {
        if (tamanio === "pequeño") {
          return hotel.rooms <= 10;
        } else if (tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms <= 20;
        } else if (tamanio === "grande") {
          return hotel.rooms > 20;
        } else {
          return hotelsData;
        }
      })
      .filter((hotel) => {
        if (pais !== "Todos") {
          return hotel.country === pais;
        } else {
          return hotelsData;
        }
      })
      .filter((hotel) => {
        if (precio !== "Cualquier") {
          return hotel.price === Number(precio);
        } else {
          return hotelsData;
        }
      })
      .filter((hotel) => {
        if (
          new Date(fechaDesde).valueOf() <= hotel.availabilityFrom &&
          new Date(fechaHasta).valueOf() >= hotel.availabilityTo
        ) {
          return hotel;
        }
      });
    return nuevaLista;
  };

  const nuevaListaHotelesFiltrada = nuevaListaHoteles(); //

  return (
    <div>
      <div className="fondoNaranja">
        <Header
          fechaDesde={fechaDesde}
          fechaHasta={fechaHasta}
          tamanio={tamanio}
          precio={precio}
          pais={pais}
        />

        <Filters
          fechaDesde={fechaDesde}
          fechaHasta={fechaHasta}
          tamanio={tamanio}
          precio={precio}
          pais={pais}
          setFechaDesde={setFechaDesde}
          setFechaHasta={setFechaHasta}
          setTamanio={setTamanio}
          setPrecio={setPrecio}
          setPais={setPais}
        />
      </div>
      <Cards nuevaListaHotelesFiltrada={nuevaListaHotelesFiltrada} />
    </div>
  );
};

export default App;
