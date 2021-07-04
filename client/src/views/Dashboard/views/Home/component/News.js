import React from "react";
import style from "../../../style/News.module.css";
import NewsCard from "./NewsCard";
import NewsScroll from "./NewsScroll";

const News = () => {
  const contents = [
    <NewsCard />,
    <NewsCard />,
    <NewsCard />,
    <NewsCard />,
    <NewsCard />,
  ];

  return (
    <div className={style.container}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <div className={style.scrollContainer}>
        <NewsScroll contents={contents} activeSlide={1} />
      </div>
    </div>
  );
};

export default News;
