import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "../style/RightSidebar.module.css";
import { Modal, Grow, Avatar } from "@material-ui/core";
import PostModal from "../views/Home/component/PostModal";
import { AuthContext } from "../../../context/authContext";
import { useHttpClient } from "../../../customHooks/httpHook";

const RightSidebar = () => {
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [profile, setProfile] = useState({});
  const [userName, setName] = useState(auth.userName);
  useEffect(() => {
    sendRequest(
      process.env.REACT_APP_BASE_URL + "/auth/profileDetails/" + auth.userId
    )
      .then((res) => {
        if (res.ok) {
          setProfile(res._doc.local);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);
  const logoutHandler = () => {
    auth.logout();
    history.push("/auth");
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.updateProfileBtn} onClick={logoutHandler}>
          LOGOUT
        </div>
        <div className={style.profileCard}>
          <div className={style.profileImg}>
            <Avatar
              src={profile.profilePic || "/broken-image.jpg"}
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "#1e0c32",
              }}
            />
          </div>
          <div className={style.name}>{profile.userName || auth.userName}</div>
          <div className={style.branch}>
            {profile.institute || "Add Description"}
          </div>
          <div className={style.branch}>{profile.division}</div>

          <button
            className={style.updateProfileBtn}
            onClick={() => history.push("/dash/profile")}
          >
            Update Profile
          </button>

          <div className={style.profileStats}>
            <div className={style.stat}>
              <div className={style.number}>
                {profile.following ? profile.following.length : "0"}
              </div>
              <div className={style.stateName}>FOLLOWING</div>
            </div>
            <div className={style.stat}>
              <div className={style.number}>
                {profile.followers ? profile.followers.length : "0"}
              </div>
              <div className={style.stateName}>FOLLOWERS</div>
            </div>
          </div>
        </div>
        <div className={style.createPost}>
          <div className={style.button2} onClick={modalOpenHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CREATE POST
          </div>
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
    </>
  );
};

export default RightSidebar;
