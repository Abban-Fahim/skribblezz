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
      <i
        className={"bi bi-" + (theme === "Light" ? "sun-fill" : "moon-fill")}
      ></i>
    </button>
  );
};

export default Toggler;
