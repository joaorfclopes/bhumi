import React from "react";
import logo from "../assets/svg/logo-footer.svg";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  return (
    <div>
      {isMobile && (
        <>
          <div className="footer footerMobile">
            <img
              className="logo-footer logo-footer-mobile"
              src={logo}
              alt="logo-footer"
            />
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="footer footerDesktop">
            <img
              className="logo-footer logo-footer-desktop"
              src={logo}
              alt="logo-footer"
            />
          </div>
        </>
      )}
    </div>
  );
}
