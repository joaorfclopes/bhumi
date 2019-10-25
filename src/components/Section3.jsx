import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Section3() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  return (
    <div className="container3">
      {isMobile && (
        <>
          <div className="section3 section3Mobile">
            <div className="eco-friendly">
              <div className="title titleSection3 titleMobile">
                <h3>eco-friendly & vegan</h3>
              </div>
              <div className="textSection3 textMobile">
                <p className="text">
                  Defendendo o conceito de “slow fashion” e economia circular,
                  assenta na aposta em métodos de produção que minimizam o
                  desperdício e na combinação criteriosa de matérias primas de
                  excelente qualidade e durabilidade de origem vegetal e
                  mineral, não-nocivas ao meio ambiente.
                </p>
              </div>
            </div>
            <div className="eco-friendly">
              <div className="title titleSection3 titleMobile">
                <h3>conforto</h3>
              </div>
              <div className="textSection3 textMobile">
                <p className="text">
                  As peças de calçado são desenvolvidas a partir de estudos de
                  ergonomia e biomecânica do pé, com especial foco na estrutura
                  e materiais dos solados e palminhas – para uma performance
                  ímpar na utilização de saltos altos.
                </p>
              </div>
            </div>
            <div className="eco-friendly">
              <div className="title titleSection3 titleMobile">
                <h3>estética futurista</h3>
              </div>
              <div className="textSection3 textMobile">
                <p className="text">
                  Os seus produtos são peças “statement” de linhas minimalistas
                  e depuradas com acabamentos de luxo, adequadas a qualquer tipo
                  de situação e evento.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="section3 section3Desktop">
            <div className="eco-friendly">
              <div className="title titleSection3 titleDesktop">
                <h3>eco-friendly & vegan</h3>
              </div>
              <div className="textSection3 textDesktop">
                <p className="text">
                  Defendendo o conceito de “slow fashion” e economia circular,
                  assenta na aposta em métodos de produção que minimizam o
                  desperdício e na combinação criteriosa de matérias primas de
                  excelente qualidade e durabilidade de origem vegetal e
                  mineral, não-nocivas ao meio ambiente.
                </p>
              </div>
            </div>
            <div className="eco-friendly">
              <div className="title titleSection3 titleDesktop">
                <h3>conforto</h3>
              </div>
              <div className="textSection3 textDesktop">
                <p className="text">
                  As peças de calçado são desenvolvidas a partir de estudos de
                  ergonomia e biomecânica do pé, com especial foco na estrutura
                  e materiais dos solados e palminhas – para uma performance
                  ímpar na utilização de saltos altos.
                </p>
              </div>
            </div>
            <div className="eco-friendly">
              <div className="title titleSection3 titleDesktop">
                <h3>estética futurista</h3>
              </div>
              <div className="textSection3 textDesktop">
                <p className="text">
                  Os seus produtos são peças “statement” de linhas minimalistas
                  e depuradas com acabamentos de luxo, adequadas a qualquer tipo
                  de situação e evento.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
