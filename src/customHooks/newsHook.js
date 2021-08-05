import React, { useState, useEffect } from "react";

export const useNewsHook = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/news/upshot")
      .then((data) => data.json())
      .then((res) => {
        if (res.ok) {
          setNewsData(res.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { newsData };
};
