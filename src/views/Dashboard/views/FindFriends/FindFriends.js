import React, { useEffect, useState, useContext } from "react";
import ProfileCard from "./component/ProfileCard";
import style from "../../style/FindFriends.module.css";
import { useHttpClient } from "../../../../customHooks/httpHook";
import ProfileScroll from "./component/ProfileScroll";
import { AuthContext } from "../../../../context/authContext";
import { CircularProgress } from "@material-ui/core";

const FindFriends = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const { userId, institute } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    sendRequest(
      process.env.REACT_APP_BASE_URL + "/auth/getAllUsers",
      "POST",
      JSON.stringify({ userId, institute }),
      {
        "Content-Type": "application/json",
      }
    )
      .then((res) => {
        if (res.ok) {
          setUsers(res.users);
        }
      })
      .catch((err) => console.log(err));
  }, [institute, userId]);

  const contents = users.map((user, index) => {
    return (
      <ProfileCard
        profilePic={user.profilePic}
        name={user.name}
        institute={user.institute}
        email={user.email}
        followers={user.followers}
        userId={user.userId}
        followerId={user.userId}
        key={index}
      />
    );
  });

  return (
    <div className={style.container}>
      {isLoading && <CircularProgress style={{ color: "ornagered" }} />}
      {!!contents && !!contents[0] && (
        <ProfileScroll contents={contents} activeSlide={0} />
      )}
    </div>
  );
};

export default FindFriends;
