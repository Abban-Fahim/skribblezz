import React from "react";

const Toggler = ({ theme, setTheme }) => {
  function toggleTheme() {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-lg float-end"
    >
      Toggle theme
    </button>
  );
};

export default Toggler;
