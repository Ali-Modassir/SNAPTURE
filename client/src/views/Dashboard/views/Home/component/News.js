import React from "react";
import style from "../../../style/News.module.css";
import NewsCard from "./NewsCard";
import Carousel from "react-material-ui-carousel";

const News = () => {
  return (
    <div className={style.container}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
};

export default News;
