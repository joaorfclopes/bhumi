import React from "react";
import logo from "../assets/svg/logo-header.svg";

export default function Header() {
  return <div className="header">
      <img className="logo-header" src={logo} alt="logo-header"/>
  </div>;
}
