import React, { useEffect, useState } from "react";
import style from "../../../style/News.module.css";
import NewsCard from "./NewsCard";
import NewsScroll from "./NewsScroll";
import { useHttpClient } from "../../../../../customHooks/httpHook";

const News = () => {
  const { sendRequest } = useHttpClient();
  const [data, setData] = useState([]);
  useEffect(() => {
    sendRequest(process.env.REACT_APP_BASE_URL + "/news/home")
      .then((res) => {
        if (res.ok) {
          setData(res.articles);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const contents =
    data.map &&
    data.map((content, index) => {
      return <NewsCard props={content} key={index} />;
    });

  const upperContent = data && data.slice(2);

  return (
    <div className={style.container}>
      {upperContent.map &&
        upperContent.map((content, index) => {
          return <NewsCard props={content} key={index} />;
        })}
      <div className={style.scrollContainer}>
        <NewsScroll contents={contents} activeSlide={1} />
      </div>
    </div>
  );
};

export default News;
