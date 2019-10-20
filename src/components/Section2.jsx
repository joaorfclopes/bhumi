import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Section2() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  return (
    <div className="container2">
      {isMobile && (
        <>
          <div className="section2 section2Mobile">
            <div className="title titleSection2 titleMobile">
              <h3>
                A moda sustentável não é uma tendência, é o futuro.
              </h3>
            </div>
            <div className="textSection2 textMobile">
              <p className="text">
                A Bhumi é uma marca de calçado de salto alto vegan, de edições
                limitadas e com detalhes personalizáveis pelo cliente através da
                sua loja online.
              </p>
              <p className="text">
                Esta marca assume a premissa dos princípios do “Bom Design” de
                Dieter Rams e a sua identidade assenta em 3 pilares:
              </p>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="section2 section2Desktop">
            <div className="title titleSection2 titleDesktop">
              <h3>
                A moda sustentável não é uma tendência, é o futuro.
              </h3>
            </div>
            <div className="textSection2 textDesktop">
              <p className="text">
                A Bhumi é uma marca de calçado de salto alto vegan, de edições
                limitadas e com detalhes personalizáveis pelo cliente através da
                sua loja online.
              </p>
              <p className="text">
                Esta marca assume a premissa dos princípios do “Bom Design” de
                Dieter Rams e a sua identidade assenta em 3 pilares:
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
