import React from "react";

const NewsBox = ({ news }) => {
  return (
    <div
      className="col-lg-4 col-md-6 col-sm-12 col-sx-12 newsBox"
      style={{ margin: "12px 0" }}
    >
      <div style={{ padding: "12px", transitionDuration: ".4s" }}>
        <a href={news.url}>
          <img
            src={news.urlToImage}
            className="img-thumbnail"
            style={{ height: "200px", display: "block", margin: "0 auto" }}
          />
        </a>
        <h5>{news.title}</h5>
        <p>
          {news.description.slice(0, 100)}
          <a href={news.url}>...</a>
        </p>
      </div>
    </div>
  );
};

export default NewsBox;
