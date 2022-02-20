import React, { useState, useEffect } from "react";
import PreLoadImg from "../../../assets/img/LoadingImg.webp";

const LazyBackground = ({ src, styles, alt }) => {
  const [source, setSource] = useState(PreLoadImg);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return <img src={source} alt={alt} className={styles} />;
};

export default LazyBackground;
