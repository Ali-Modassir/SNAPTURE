import React, { useState } from "react";
import style from "../../../style/NewsScroll.module.css";
import DoubleArrowRoundedIcon from "@material-ui/icons/DoubleArrowRounded";

export default (props) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.contents.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      <div className={style.slideC}>
        {props.contents.map((item, i) => (
          <React.Fragment key={i}>
            <div
              className={style.slide}
              style={{
                ...getStyles(i),
              }}
            >
              {item}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className={style.btns}>
        <DoubleArrowRoundedIcon
          onClick={prev}
          className={style.btn}
          fontSize="large"
          style={{ transform: "rotate(180deg)" }}
        />
        <DoubleArrowRoundedIcon
          onClick={next}
          className={style.btn}
          fontSize="large"
        />
      </div>
    </>
  );
};
