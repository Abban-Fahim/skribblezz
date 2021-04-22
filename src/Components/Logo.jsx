import React from "react";
import logo from "./../logo.png";

const Logo = (props) => {
  return (
    <div className="d-inline" {...props}>
      <h1 style={{ display: "inline", marginRight: "17px" }}>Skribblezz</h1>
      <img src={logo} alt="logo" width="10px" />
    </div>
  );
};

export default Logo;
