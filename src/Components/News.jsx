import React from "react";
import text from "./text.json";
import main from "./../main.jpg";

const News = ({ setNews }) => {
  function renderNews(para, num) {
    if (para.type === "text") {
      return (
        <p key={num} className="para">
          {para.text}
        </p>
      );
    } else if (para.type === "list") {
      return (
        <ul>
          {para.list.map((list) => {
            return (
              <li>
                <span dangerouslySetInnerHTML={{ __html: list }}></span>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <figure>
          <blockquote className="blockquote">{para.text}</blockquote>
          <figcaption className="blockquote-footer">{para.author}</figcaption>
        </figure>
      );
    }
  }

  return (
    <div className="body">
      <button
        className="btn btn-lg"
        type="button"
        onClick={() => setNews("home")}
      >
        <i className="bi bi-arrow-left"></i> Back
      </button>
      <div
        className="text-center"
        style={{ padding: "20px", margin: "23px 0" }}
      >
        <img src={main} alt="online education" className="img-fluid" />
        <h2>Online Education: The Good, The Bad, The Ugly</h2>
        <p className="fst-italic fw-bold">By Muhammad Abban Fahim 10B 17232</p>
        <div className="text-start">{text.map(renderNews)}</div>
      </div>
    </div>
  );
};

export default News;
