import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Carasoul from "./Components/Carasoul";
import "./theme.scss";
import "./style.css";
import News from "./Components/News";
import NewsBox from "./Components/NewsBox";
import Footer from "./Components/Footer";

function App() {
  const [theme, setTheme] = useState("Light");
  const [pageName, setpageName] = useState("home");
  const [page, setPage] = useState();
  const [news, getNews] = useState();
  const [topic, setTopic] = useState("Rmadan");

  useEffect(() => {
    displaypage();
    getArticles();
  }, [topic, pageName]);

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

  function getArticles() {
    let url = `https://api.bing.microsoft.com/v7.0/news/search?q=${topic}&setLang=en&answerCount=10`;
    fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": process.env.REACT_APP_NEWS,
      },
    })
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) => getNews(res));
    console.log(news);
  }

  return (
    <div className={theme}>
      <Header
        setNews={setNews}
        theme={theme}
        setTheme={setTheme}
        setTopic={setTopic}
      />
      {page}
      <div className="container-fluid">
        <div className="row">
          {news
            ? news.value.map((article, num) => (
                <NewsBox key={num} news={article} />
              ))
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
