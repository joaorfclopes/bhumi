import React from "react";
import { useMediaQuery } from "react-responsive";
import shoe1 from "../assets/images/shoe1.jpg";
import shoe2 from "../assets/images/shoe2.jpg";
import shoe3 from "../assets/images/shoe3.jpg";

export default function Section4() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  return (
    <div className="container4">
      {isMobile && (
        <>
          <div className="section4 section4Mobile">
            <div className="shoes">
              <img className="shoeMobile" src={shoe1} alt="shoe1" />
              <img className="shoeMobile" src={shoe2} alt="shoe2" />
              <img className="shoeMobile" src={shoe3} alt="shoe3" />
            </div>
            <div className="divider dividerMobile"></div>
            <div className="textSection4 textMobile">
              <p className="text">
                “The day when the upper echelon of luxury fashion proudly shows
                off their ethical manufacturing methods, eco-fashion will become
                irrisistible to consumers”
              </p>
              <p className="text secondaryText secondaryTextMobile">
                in “Luxury brands are silently going green. Is eco-fashion a
                golden secret?” by Bunny Yan, The Squirrelz
              </p>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="section4 section4Desktop secondaryTextDesktop">
            <div className="shoes">
              <img className="shoeDesktop" src={shoe1} alt="shoe1" />
              <img className="shoeDesktop" src={shoe2} alt="shoe2" />
              <img className="shoeDesktop" src={shoe3} alt="shoe3" />
            </div>
            <div className="divider dividerDesktop"></div>
            <div className="textSection4 textDesktop">
              <p className="text">
                “The day when the upper echelon of luxury fashion proudly shows
                off their ethical manufacturing methods, eco-fashion will become
                irrisistible to consumers”
              </p>
              <p className="text secondaryText">
                in “Luxury brands are silently going green. Is eco-fashion a
                golden secret?” by Bunny Yan, The Squirrelz
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
