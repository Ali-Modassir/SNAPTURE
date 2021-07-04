import React from "react";
import style from "../../../style/Posts.module.css";
import PostCard from "./PostCard";
import Dummy1 from "../../../../../assets/img/dummy1.jpg";

const Posts = () => {
  return (
    <div className={style.container}>
      <PostCard imgSrc={Dummy1} />
      <PostCard imgSrc={Dummy1} />
      <PostCard imgSrc={Dummy1} />
      <PostCard imgSrc={Dummy1} />
      <PostCard imgSrc={Dummy1} />
      <PostCard imgSrc={Dummy1} />
    </div>
  );
};

export default Posts;
