import React, { useEffect, useState, useContext } from "react";
import ProfileCard from "./component/ProfileCard";
import style from "../../style/FindFriends.module.css";
import { useHttpClient } from "../../../../customHooks/httpHook";
import ProfileScroll from "./component/ProfileScroll";
import { AuthContext } from "../../../../context/authContext";
import { CircularProgress } from "@material-ui/core";

const FindFriends = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const auth = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    sendRequest(
      process.env.REACT_APP_BASE_URL + "/auth/getAllUsers/" + auth.userId
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setUsers(res.users);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const contents = users.map((user, index) => {
    if (user.userId === auth.userId) return;
    return (
      <ProfileCard
        profilePic={user.profilePic}
        name={user.name}
        institute={user.institute}
        email={user.email}
        followers={user.followers}
        userId={auth.userId}
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
