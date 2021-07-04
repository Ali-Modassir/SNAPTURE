import React from "react";
import style from "../../../style/NewsCard.module.css";
import { ArrowBack } from "@material-ui/icons";

const NewsCard = () => {
  return (
    <div className={style.contentWrapper}>
      <div className={style.newsCard}>
        <a href="#" className={style.newsCard__cardLink}></a>
        <img
          src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className={style.newsCard__image}
        />
        <div className={style.newsCard__textWrapper}>
          <h2 className={style.newsCard__title}>Amazing First Title</h2>
          <div className={style.newsCard__postDate}>Jan 29, 2018</div>
          <div className={style.newsCard__detailsWrapper}>
            <p className={style.newsCard__excerpt}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              pariatur nemo tempore repellat? Ullam sed officia iure architecto
              deserunt distinctio, pariatur&hellip;
            </p>
            <a href="#" className={style.newsCard__readMore}>
              Read more <ArrowBack />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
