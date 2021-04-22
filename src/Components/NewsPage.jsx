import React from "react";
import NewsBox from "./NewsBox";

const NewsPage = ({ news }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {news
          ? news.articles.map((article, num) => (
              <NewsBox key={num} news={article} />
            ))
          : null}
      </div>
    </div>
  );
};

export default NewsPage;
