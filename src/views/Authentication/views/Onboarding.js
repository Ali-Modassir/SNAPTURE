import React, { useState, useEffect, useContext } from "react";
import style from "../styles/Onboarding.module.css";
import instituteData from "./universitydata.json";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { Avatar, CircularProgress } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useHttpClient } from "../../../customHooks/httpHook";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/authContext";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [userName, setUserName] = useState("");
  const [instTyped, setInstType] = useState("");
  const [institute, setInstitute] = useState("");
  const [options, setOptions] = useState([]);
  const [errorMsgUname, setErrorMsgUname] = useState("");
  const [errorMsgInst, setErrorMsgInst] = useState("");
  const { userId, userEmail, login } = useContext(AuthContext);
  const [token, setToken] = useState(null);

  const { sendRequest, isLoading } = useHttpClient();

  const navigationStack = (
    <div className={style.cursorStack}>
      {[...Array(4)].map((a, idx) => (
        <div
          className={`${style.stack} ${idx === step && style.active}`}
          key={idx}
        />
      ))}
    </div>
  );

  const heading = <div className={style.heading}>Setting Up . . . .</div>;

  const nextStepHandler = () => setStep((prev) => prev + 1);
  const prevStepHandler = () => setStep((prev) => prev - 1);

  const fileChangeHandler = (e) => setFile(e.target.files[0]);

  const [previewSrc, setPreviewSrc] = useState("");
  const [file, setFile] = useState(null);
  const fileReader = new FileReader();
  fileReader.onload = () => setPreviewSrc(fileReader.result);
  if (file) fileReader.readAsDataURL(file);

  useEffect(() => {
    if (userName.length === 0) return;
    if (userName.length <= 4)
      setErrorMsgUname("Username must be min 4 letters long");
    else setErrorMsgUname("");
  }, [userName]);

  useEffect(() => {
    if (!instTyped && !institute) return;
    if (!!institute) setErrorMsgInst("");
    else setErrorMsgInst("Please select your institute from given options");
  }, [institute, instTyped]);

  useEffect(() => {
    if (instTyped.length == 0) setInstitute(null);
  }, [instTyped]);

  useEffect(() => {
    if (instTyped === null || !instTyped) return setOptions([]);
    const opt = instituteData
      .filter((inst, idx) => {
        return inst.university_name
          .toLowerCase()
          .includes(instTyped.toLowerCase());
      })
      .slice(0, 3);
    if (opt !== null) setOptions(opt);
  }, [instTyped]);

  const formSubmitHandler = () => {
    const api = `${process.env.REACT_APP_BASE_URL}/auth/profileUpdate`;
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("userName", userName);
    formData.append("institute", institute);
    if (file) {
      formData.append("profilePic", file);
    }

    sendRequest(api, "POST", formData)
      .then((res) => {
        if (res.ok) {
          setToken(res.token);
          setStep((prev) => prev + 1);
          toast.success("Welcome to Snapture");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const redirectHandler = () => {
    login(userName, userEmail, userId, institute, token);
  };

  if (step === 0) {
    return (
      <div className={style.container}>
        <div className={style.content}>
          {heading}
          {navigationStack}
          <div className={style.label}>
            Add your username<span>*</span>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              className={style.input}
              placeholder="@username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              autoFocus
            />
            <div className={style.errorLabel}>{errorMsgUname}</div>
          </div>
          <div className={style.btnContainer}>
            <button
              className={style.navigationBtn}
              onClick={nextStepHandler}
              disabled={userName.length <= 4}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  } else if (step === 1) {
    return (
      <div className={style.container}>
        <div className={style.content}>
          {heading}
          {navigationStack}
          <div className={style.label}>
            Which Institute you belong?<span>*</span>
          </div>
          <div className={style.inputWrapper}>
            <input
              type="text"
              className={style.input}
              placeholder="write atleast 4 letters..."
              onChange={(e) => setInstType(e.target.value)}
              value={instTyped}
              autoFocus
            />
            <div className={style.errorLabel}>{errorMsgUname}</div>
            <div className={style.optionContainer}>
              {options.map((opt, idx) => {
                return (
                  <div
                    className={style.option}
                    onClick={() => {
                      setInstitute(opt.university_name);
                      setInstType(opt.university_name);
                      setOptions([]);
                    }}
                    key={idx}
                  >
                    {opt.university_name}
                  </div>
                );
              })}
            </div>
            <div className={style.errorLabel}>{errorMsgInst}</div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.navigationBtn} onClick={prevStepHandler}>
              Prev
            </button>
            <button
              className={style.navigationBtn}
              onClick={nextStepHandler}
              disabled={!institute}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  } else if (step === 2) {
    return (
      <div className={style.container}>
        <div className={style.content}>
          {heading}
          {navigationStack}
          <div className={style.label}>Add your profile picture</div>
          <div className={style.inputFileWrapper}>
            <input
              type="file"
              name="profilePic"
              accept=".png,.jpeg,.jpg"
              id="profilePicBtn"
              className={style.profile_input_file}
              onChange={fileChangeHandler}
            />
            <Avatar
              src={previewSrc || "/broken-image.jpg"}
              style={{
                height: "180px",
                width: "180px",
                backgroundColor: "inherit",
              }}
            />
            <div className={style.profileManageBtns}>
              <label htmlFor="profilePicBtn" className={style.profileMangBtn}>
                <AddIcon />
                <span>Add</span>
              </label>
              {file && (
                <label
                  className={style.profileMangBtn}
                  onClick={() => {
                    setFile(null);
                    setPreviewSrc(null);
                  }}
                >
                  <DeleteOutline />
                  <span>Delete</span>
                </label>
              )}
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.navigationBtn} onClick={prevStepHandler}>
              Prev
            </button>
            <button className={style.navigationBtn} onClick={formSubmitHandler}>
              {file ? "Next" : "Skip"}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.greetings}>
            <CheckCircleIcon />
            <div className={style.heading1}>Congratulations!</div>
            <div className={style.heading2}>You now a member of Snapture</div>
            <button className={style.continuebtn} onClick={redirectHandler}>
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Onboarding;
