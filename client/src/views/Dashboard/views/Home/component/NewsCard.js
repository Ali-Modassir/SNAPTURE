import React from "react";
import style from "../../../style/NewsCard.module.css";
import { ArrowRightAlt } from "@material-ui/icons";

const NewsCard = ({ props }) => {
  const { title, abstract, created_date, url, multimedia } = props;
  var date = new Date(created_date);
  date = date.toString();
  return (
    <div className={style.contentWrapper}>
      <div className={style.newsCard}>
        <a href="#" className={style.newsCard__cardLink}></a>
        <img
          src={multimedia && multimedia[0].url}
          alt={title}
          className={style.newsCard__image}
        />
        <div className={style.newsCard__textWrapper}>
          <h2 className={style.newsCard__title}>{title}</h2>
          <div className={style.newsCard__postDate}>{date}</div>
          <div className={style.newsCard__detailsWrapper}>
            <p className={style.newsCard__excerpt}>{abstract}&hellip;</p>
            <a href={url} className={style.newsCard__readMore}>
              Read more <ArrowRightAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
