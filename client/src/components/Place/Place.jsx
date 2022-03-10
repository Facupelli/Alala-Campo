import React from "react";
import place from "../../media/place.jpeg";
import vertical from "../../media/arauco20.jpeg";

import s from "./Place.module.scss";

export const Place = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>ALALA CAMPO VENI A DESCANSAR</p>
      <img src={place} alt="place" className={s.image} />
      <img src={vertical} alt="place2" className={s.imageV} />
    </div>
  );
};
