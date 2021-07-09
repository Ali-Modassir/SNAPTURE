import React, { useState } from "react";
import style from "../style/RightSidebar.module.css";
import PersonImg from "../../../assets/img/PersonImg.webp";
import { Modal, Grow, Fade, Slide, Zoom } from "@material-ui/core";
import PostModal from "../views/Home/component/PostModal";

const RightSidebar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  return (
    <div className={style.container}>
      <div className={style.profileCard}>
        <div className={style.profileImg}>
          <img src={PersonImg} alt="profilePic" />
        </div>
        <div className={style.name}>Modassir Ali</div>
        <div className={style.branch}>PIE</div>

        <button className={style.updateProfileBtn}>Update Profile</button>

        <div className={style.profileStats}>
          <div className={style.stat}>
            <div className={style.number}>1.1K</div>
            <div className={style.stateName}>POSTS</div>
          </div>
          <div className={style.stat}>
            <div className={style.number}>21.3K</div>
            <div className={style.stateName}>HITS</div>
          </div>
        </div>
      </div>
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
            <PostModal />
          </Grow>
        </Modal>
      </div>
    </div>
  );
};

export default RightSidebar;
