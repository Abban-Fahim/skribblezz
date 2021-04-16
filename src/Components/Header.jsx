import React from "react";
import Logo from "./Logo";
import Toggler from "./Toggler";
const topics = [
  "Technology",
  "Space",
  "Science",
  "Politics",
  "Sports",
  "Economics",
  "Health",
  "Enviroment",
  "Fashion",
  "Buisness",
  "Development",
];

const Header = ({ theme, setTheme, setNews }) => {
  return (
    <nav>
      <Logo onClick={() => setNews("home")} />
      <Toggler theme={theme} setTheme={setTheme} />
      <div className="scroll">
        {topics.map((topic) => {
          return (
            <button key={topic} className="btn nav-item">
              {topic}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
