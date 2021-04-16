import React from "react";

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
      <div></div>
    </div>
  );
};

export default News;
