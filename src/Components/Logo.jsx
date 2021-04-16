import React from "react";

const Logo = (props) => {
  return (
    <div className="d-inline" {...props}>
      <h1 style={{ display: "inline", marginRight: "17px" }}>Skribblezz</h1>
      <i className="h1 bi bi-pen"></i>
      <i className="h1 bi bi-list-nested"></i>
    </div>
  );
};

export default Logo;
