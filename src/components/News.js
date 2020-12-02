import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";


function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="container">
      <h1 className="text-center py-2">Crypto News</h1>
      <div className="grid-3">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : <h1 className="text-center ">Loading...</h1>}
      </div>
    </div>
  );
}

export default News;
