import React from "react";
import s from "./Casa1.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Casa1({ name, images, handleClick, casasRef }) {
  return (
    <div className={s.container} ref={casasRef}>
      <div className={s.grid_container}>
        <div className={s.carousel}>
          <Carousel
            dynamicHeight={false}
            thumbWidth={50}
            showStatus={false}
            infiniteLoop={true}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <button className={s.arrowPrev} onClick={clickHandler}>
                  <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, labelPrev) =>
              hasNext && (
                <button className={s.arrowNext} onClick={clickHandler}>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </button>
              )
            }
          >
            {images &&
              images.map((el, i) => (
                <div key={i}>
                  <img src={el} alt="alt" />
                </div>
              ))}
          </Carousel>
        </div>
        <div className={s.spec}>
          <p>
            <span>{name.toUpperCase()}</span>
          </p>
          {/* ARAUCO */}
          {name === "arauco" && (
            <ul>
              <li>Capacidad para 12-14 personas</li>
              <li>
                3 habitaciones (1 matrimonial con una cama extra, 1 habitacion
                con 3 cuchetas, 1 habitacion con una cama y una cucheta, 1
                sofacama con cama marinera)
              </li>
              <li>Baños: 3 baños</li>
              <li>Aire acondicionado frio/calor en todos los ambientes</li>
              <li>Televisor con antena</li>
              <li>Horno, microondas</li>
              <li>Hogar a leña</li>
              <li>Heladera exhibidora y freezer</li>
              <li>Parillero amplio, horno chileno</li>
              <li>Mesa de ping pong, mesa de pool, metegol</li>
              <li>Cancha de futbol, cancha de Volley</li>
            </ul>
          )}

          {/* CORATINA */}
          {name === "coratina" && (
            <ul>
              <li>Capacidad para 6-8 personas</li>
              <li>
                2 habitaciones (1 matrimonial, 1 habitacion con 2 cuchetas, 1
                sofacama con cama marinera)
              </li>
              <li>Baños: 1 baño</li>
              <li>Aire acondicionado frio/calor en todos los ambientes</li>
              <li>Totalmente equipada las habitaciones y la cocina</li>
              <li>Televisor con antena</li>
              <li>Horno eléctrico</li>
              <li>Heladera</li>
              <li>Parillero</li>
              <li>Pileta</li>
              <li>Juego de campo</li>
              <li>Estacionamiento cubierto</li>
            </ul>
          )}

          {/* ALOREÑA */}
          {name === "aloreña" && (
            <ul>
              <li>Capacidad para 2-4 personas</li>
              <li>Monoambiente</li>
              <li>Baños: 1 baño</li>
              <li>Aire acondicionado frio/calor</li>
              <li>Totalmente equipada las habitaciones y la cocina</li>
              <li>Televisor con antena</li>
              <li>Horno eléctrico</li>
              <li>Heladera</li>
              <li>Parillero</li>
              <li>Pileta</li>
              <li>Juego de campo</li>
              <li>Estacionamiento cubierto</li>
            </ul>
          )}
          <div className={s.button_container}>
            <button onClick={() => handleClick(name)}>CONSULTAR </button>
          </div>
        </div>
      </div>
    </div>
  );
}
