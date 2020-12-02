import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "44dae17430cc463b805132bda780fc02";

  useEffect(() => {
    const topic = "cryptoCurrency";
    let today = new Date().toISOString().slice(0, 10)

console.log(today);

    axios
      .get(
        `http://newsapi.org/v2/everything?q=${topic}&language=en&from=${today}&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
