import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../../context/authContext";
import { useHttpClient } from "../../../customHooks/httpHook";
import { toast } from "react-toastify";

//Callback --login with google
const OAuth = () => {
  const auth = useContext(AuthContext);
  const { sendRequest, isLoading } = useHttpClient();
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      sendRequest(process.env.REACT_APP_BASE_URL + "/auth/oauth/" + token)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            toast.success("Logged In", { position: "top-right" });
            auth.login(
              response.userName,
              response.userEmail,
              response.userId,
              response.token
            );
          } else {
            toast.error(response.message, { position: "top-right" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && <CircularProgress />}
      <h2>{!token && "Token Expired"}</h2>
    </div>
  );
};

export default OAuth;
