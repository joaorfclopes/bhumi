import React from "react";
import { useMediaQuery } from "react-responsive";

export default function Section1() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  return (
    <div className="container1">
      {isMobile && (
        <>
          <div className="section1 section1Mobile">
            <div className="title titleSection1 titleMobile">
              <h3>[ The ultimate sophistication in high heels ]</h3>
            </div>
            <div className="textSection1 textSection1Mobile textMobile">
              <p className="text">
                A Bhumi concilia a tecnologia de ponta e a herança do know-how
                do fabrico de calçado em Portugal para um conforto e performance
                únicos em saltos altos, em peças vegan «eco-luxury»
                personalizáveis, com uma linguagem estética de vanguarda.
              </p>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="section1 section1Desktop">
            <div className="title titleSection1 titleDesktop">
              <h3>[ The ultimate sophistication in high heels ]</h3>
            </div>
            <div className="textSection1 textSection1Desktop textDesktop">
              <p className="text">
                A Bhumi concilia a tecnologia de ponta e a herança do know-how
                do fabrico de calçado em Portugal para um conforto e performance
                únicos em saltos altos, em peças vegan «eco-luxury»
                personalizáveis, com uma linguagem estética de vanguarda.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
