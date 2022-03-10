import React from "react";
import s from "./Nav.module.scss";
import logo from '../../media/logo/alalaLogo.png'

export const Nav = ({
  handleInicioClick,
  handleUbicacionClick,
  handleConsultarNavClick,
  handleCasasClick,
}) => {
  return (
    <nav>
      <div className={s.container1}>
        <div className={s.container2}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.sections_buttons}>
            <div className="md:pr-8">
              <p
                onClick={handleInicioClick}
                className="font-semibold text-white text-2xl font-title "
              >
                INICIO
              </p>
            </div>

            <div className="md:pr-8">
              <p
                onClick={handleCasasClick}
                className="font-semibold text-white text-2xl font-title "
              >
                CASAS
              </p>
            </div>

            <div className="md:pr-8">
              <p
                onClick={handleUbicacionClick}
                className="font-semibold text-white text-2xl font-title "
              >
                UBICACIÓN
              </p>
            </div>

            <div className="md:pr-8">
              <p
                onClick={handleConsultarNavClick}
                className="font-semibold text-white text-2xl font-title "
              >
                CONTACTO
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
