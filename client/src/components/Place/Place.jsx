import React from "react";
import introV from "../../media/introV.jpeg";
import complejo from '../../media/droneResized/comple2.jpg'

import s from "./Place.module.scss";

export const Place = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>ALALA CAMPO VENI A DESCANSAR</p>
      <img src={complejo} alt="place" className={s.image} />
      <img src={complejo} alt="place2" className={s.imageV} />
    </div>
  );
};
