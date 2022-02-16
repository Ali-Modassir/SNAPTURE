import React, { useState, useContext } from "react";
import { CircularProgress } from "@material-ui/core";
import style from "../../style/ProfileForm.module.css";
import { toast } from "react-toastify";
import { useHttpClient } from "../../../../customHooks/httpHook";
import { AuthContext } from "../../../../context/authContext";

const FeedBack = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const { userName, userEmail } = useContext(AuthContext);
  const [data, setData] = useState({
    name: userName,
    email: userEmail,
    description: "",
  });

  const submitFeedback = () => {
    setTimeout(() => {
      sendRequest(
        `${process.env.REACT_APP_BASE_URL}/auth/feedback`,
        "POST",
        JSON.stringify(data),
        {
          "Content-Type": "application/json",
        }
      )
        .then((res) => {
          if (res.ok) {
            toast.success("Feedback Submitted", { position: "top-right" });
            setData({ ...data, description: "" });
          }
        })
        .catch((err) => console.log(err));
    }, 1000);
  };
  return (
    <div className={style.container}>
      <div className={style.form_row}>
        <textarea
          rows="4"
          placeholder="Add a Feedback"
          name="Description"
          required
          style={{ width: "100%" }}
          className={style.profile_input}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          value={data.description}
        />
      </div>
      {isLoading ? (
        <CircularProgress style={{ color: "#c3073f" }} />
      ) : (
        <button
          className={style.profile_btn}
          style={{ color: "white" }}
          onClick={submitFeedback}
        >
          SEND
        </button>
      )}
    </div>
  );
};

export default FeedBack;
