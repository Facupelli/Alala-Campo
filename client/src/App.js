import React, { useRef, useState } from "react";
import "./App.scss";

//COMPONENTS
import { Place } from "./components/Place/Place";
import { Nav } from "./components/Nav/Nav";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Casa1 from "./components/Casa1/Casa1";
import Common from "./components/Common/Common";
import Pics from "./components/Pics/Pics";
import Interes from "./components/Interes/Interes";

//IMAGES
import { coratinaImages } from "./utils/coratinPhotos";
import { aloreImages } from "./utils/alorePhotos";
import { araucoImages } from "./utils/araucoPhtos";
import Map from "./components/Map/Map";

function App() {
  const contactRef = useRef(null);
  const inicioRef = useRef(null);
  const casasRef = useRef(null);
  const ubicacionRef = useRef(null);

  const inputRef = useRef(null);

  const [def, setDef] = useState("");

  const handleConsultarClick = (casa) => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setDef(`Consulta por ${casa[0].toUpperCase()}${casa.slice(1)}:`);
    inputRef.current.focus();
  };

  const handleConsultarNavClick = () => {
    contactRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleInicioClick = () => {
    inicioRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleCasasClick = () => {
    casasRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleUbicacionClick = () => {
    ubicacionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav
        handleInicioClick={handleInicioClick}
        handleUbicacionClick={handleUbicacionClick}
        handleConsultarNavClick={handleConsultarNavClick}
        handleCasasClick={handleCasasClick}
      />
      <div className="app_container">
        <Place />
        <div className="body">
          <Common inicioRef={inicioRef} />
          <p>CASAS</p>
          <Casa1
            name="arauco"
            images={araucoImages}
            handleClick={handleConsultarClick}
            casasRef={casasRef}
          />
          <Casa1
            name="coratina"
            images={coratinaImages}
            handleClick={handleConsultarClick}
          />
          <Casa1
            name="aloreña"
            images={aloreImages}
            handleClick={handleConsultarClick}
          />

          <Map ubicacionRef={ubicacionRef} />

          <Interes />

          <Pics />
        </div>

        <Contact contactRef={contactRef} def={def} inputRef={inputRef} />
        <Footer />
      </div>
    </>
  );
}

export default App;

//
//
//
//
