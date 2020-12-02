import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="my-1 card">
      <div className="box">
         <img className="round-img" src={data.urlToImage} alt="" srcset="" />
      <h1 className="lead">{data.title}</h1>
      <p className="text-dark">{data.description}</p>
      <span className="badge">{data.author}</span> <br />
      <span >{data.publishedAt}</span> <br/>
        <span className="text-success">{data.source.name}</span> <br />
        <button className="btn btn-dark"><a href={data.url} target="blank">Read More</a>
           
        </button>
     
      </div>
     
    </div>
  );
}

export default NewsArticle;
