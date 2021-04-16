import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Carasoul from "./Components/Carasoul";
import "./theme.scss";
import News from "./Components/News";

function App() {
  const [theme, setTheme] = useState("Light");
  const [pageName, setpageName] = useState("home");
  const [page, setPage] = useState();

  useEffect(displaypage, [pageName]);

  function displaypage() {
    switch (pageName) {
      case "home":
        setPage(<Carasoul setNews={setNews} />);
        break;
      case "news":
        setPage(<News setNews={setNews} />);
        break;
      default:
        setPage(<Carasoul setNews={setNews} />);
        break;
    }
  }

  function setNews(page) {
    setpageName(page);
  }

  return (
    <div className={theme}>
      <Header setNews={setNews} theme={theme} setTheme={setTheme} />
      {page}
    </div>
  );
}

export default App;
