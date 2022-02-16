import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../../context/authContext";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import PostCard from "../../Home/component/PostCard";
import style from "../../../style/Posts.module.css";
import { CircularProgress } from "@material-ui/core";

const MyPosts = () => {
  const { userId } = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState("");

  var reqData;
  if (posts && posts.length > 0)
    reqData = posts.map((post, index) => {
      return <PostCard props={post} key={index} />;
    });

  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_BASE_URL}/post/getPostsById/${userId}`)
      .then((res) => {
        if (res.ok) setPosts(res.posts);
        else setErr(res.message);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <>
      <div className={style.container}>
        {isLoading && <CircularProgress style={{ color: "#c3073f" }} />}
        {reqData || (
          <div
            style={{
              fontSize: "1.5rem",
              marginRight: "auto",
              color: "#c3073f",
            }}
          >
            {err}
          </div>
        )}
      </div>
    </>
  );
};

export default MyPosts;
