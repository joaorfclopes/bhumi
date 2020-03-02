import React from "react";
import logo from "../assets/images/logo-header.png";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });

  return (
    <div className="headerContainer" id="header">
      {isMobile && (
        <>
          <div className="header headerMobile">
            <img className="logo-header-mobile" src={logo} alt="logo-header" />
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="header headerDesktop">
            <img className="logo-header-desktop" src={logo} alt="logo-header" />
          </div>
        </>
      )}
    </div>
  );
}
