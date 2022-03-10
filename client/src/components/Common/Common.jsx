import React from "react";
import s from "./Common.module.scss";
import {
  faWifi,
  faTree,
  faWaterLadder,
  faFire,
  faCar,
  faWind,
  faTv,
  faUtensils,
  faVolumeHigh
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Common({inicioRef}) {
  return (
    <div className={s.container} ref={inicioRef}>
      <p>SERVICIOS COMUNES</p>
      <div className={s.grid}>
        <div className={s.column}>
          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faWaterLadder} size="lg" />
            </div>
            <p>Pileta</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faWifi} size="lg" />
            </div>
            <p>Wifi</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faFire} size="lg" />
            </div>
            <p>Parrilla individual</p>
          </div>
        </div>

        <div className={s.column}>
          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faWind} size="lg" />
            </div>
            <p className={s.aire}>Aire Acondicionado frio/calor</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faVolumeHigh} size="lg" />
            </div>
            <p>Alarma monitoreada</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faCar} size="lg" />
            </div>
            <p className={s.aire}>Cochera</p>
          </div>
        </div>

        <div className={s.column}>
          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faTree} size="lg" />
            </div>
            <p>Parquizado</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faUtensils} size="lg" />
            </div>
            <p>Cocina equipada</p>
          </div>

          <div>
            <div className={s.icons}>
              <FontAwesomeIcon icon={faTv} size="lg" />
            </div>
            <p>TV cable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
