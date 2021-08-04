import React, { useContext } from "react";
import style from "../../../style/News.module.css";
import NewsCard from "./NewsCard";
import NewsScroll from "./NewsScroll";
import { NewsContext } from "../../../../../context/newsContext";

const News = () => {
  const { newsData } = useContext(NewsContext);
  const data = newsData;
  const contents =
    data.map &&
    data.map((content, index) => {
      return <NewsCard props={content} key={index} />;
    });

  const upperContent = data && data.slice(2);

  return (
    <div className={style.container}>
      <>
        {upperContent.map &&
          upperContent.map((content, index) => {
            return <NewsCard props={content} key={index} />;
          })}
        <div className={style.scrollContainer}>
          <NewsScroll contents={contents} activeSlide={1} />
        </div>
      </>
    </div>
  );
};

export default News;
