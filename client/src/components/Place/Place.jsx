import React from "react";
import introV from "../../media/introV.jpeg";
import introH from "../../media/introH.jpeg";

import s from "./Place.module.scss";

export const Place = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>ALALA CAMPO VENI A DESCANSAR</p>
      <img src={introH} alt="place" className={s.image} />
      <img src={introV} alt="place2" className={s.imageV} />
    </div>
  );
};
