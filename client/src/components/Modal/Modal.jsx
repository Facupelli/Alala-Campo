import React, { useEffect } from "react";
import s from "./Modal.module.scss";
import {
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Modal({ setShowModal, img, handleNext, handlePrev }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleClick = () => {
    setShowModal(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className={s.centered}>
      <div className={s.modal}>
        <div className={s.arrows}>
          <div className={s.button}>
            <FontAwesomeIcon
              onClick={handlePrev}
              icon={faArrowLeft}
              size="2x"
            />
            <FontAwesomeIcon
              onClick={handleNext}
              icon={faArrowRight}
              size="2x"
            />
          </div>
          <div className={s.button} onClick={handleClick}>
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </div>
        </div>
        <div className={s.image_container}>
          <img src={img} alt="zoom" className={s.image} />
        </div>
      </div>
    </div>
  );
}
