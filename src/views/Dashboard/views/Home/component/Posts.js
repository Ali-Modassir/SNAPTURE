import React, { useEffect, useState, useContext } from "react";
import style from "../../../style/Posts.module.css";
import PostCard from "./PostCard";
import { Modal, Grow, CircularProgress } from "@material-ui/core";
import { useHttpClient } from "../../../../../customHooks/httpHook";
import PostModal from "../component/PostModal";
import { AuthContext } from "../../../../../context/authContext";

const Posts = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);
  const { institute } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      sendRequest(
        process.env.REACT_APP_BASE_URL + "/post/getPosts/" + institute
      )
        .then((res) => {
          if (res.ok) {
            setData(res.posts);
          } else {
            setError(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
  }, []);

  var posts = null;
  if (data) {
    posts = data.map((post, index) => {
      return <PostCard props={post} key={index} />;
    });
  }

  return (
    <>
      <div className={style.createPost}>
        <button className={style.createPostBtn} onClick={modalOpenHandler}>
          CREATE POST
        </button>
        <Modal open={modalOpen} onClose={modalCloseHandler}>
          <Grow
            in={modalOpen}
            style={{ transformOrigin: "0 0 0" }}
            {...(!modalOpen && { timeout: 1000 })}
          >
            <PostModal mobile={true} />
          </Grow>
        </Modal>
      </div>
      <div className={style.container}>
        {isLoading && <CircularProgress style={{ color: "orangered" }} />}
        {posts || <div className={style.error}>{error}</div>}
      </div>
    </>
  );
};

export default Posts;
