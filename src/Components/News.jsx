import React from "react";
import RandomImg from "./RandomImg";
import text from "./text.json";

const News = ({ setNews }) => {
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
        <RandomImg img="unemployment" num={4} className="img-fluid" />
        <h2>
          Why Youth Uneployment Could Prove Disastrous for Today's Economy
        </h2>
        <p className="fst-italic fw-bold">By Muhammad Abban Fahim 10B 17232</p>
        <div className="text-start">
          {text.map((para, num) => {
            return (
              <p key={num} className="para">
                {para}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
