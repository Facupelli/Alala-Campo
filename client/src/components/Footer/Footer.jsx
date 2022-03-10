import React from "react";
import s from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={s.container}>
      <p>ALALA CAMPO</p>
      <p>
        <a
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          target="_blank"
        >
          web: Facundo Pellicer
        </a>
      </p>
    </div>
  );
};
