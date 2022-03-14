import React from "react";
import s from "./Footer.module.scss";
import { faH, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className={s.container}>
      <p>ALALA CAMPO</p>
      <p>
        <a
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          target="_blank"
        >
          made with{' '}
          <span >
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {' '}by Facundo Pellicer
        </a>
      </p>
    </div>
  );
};
