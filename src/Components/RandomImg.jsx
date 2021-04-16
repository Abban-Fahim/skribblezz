import React, { useEffect, useState } from "react";
import env from "dotenv";
env.config();
const accessKey = process.env.REACT_APP_ACCESS;
const secret = process.env.REACT_APP_SECRET;

const RandomImg = (props) => {
  const [src, setSrc] = useState();
  useEffect(getImg, [props.img, props.num]);

  function getImg() {
    fetch(
      `https://api.unsplash.com/search/photos?orientation=landscape&query=${props.img}&client_id=${accessKey}&secret=${secret}`
    )
      .then((res) => res.json())
      //   .then((res) => console.log(res));
      .then((res) => setSrc(res.results[props.num].urls.raw));
  }

  return <img {...props} src={src} alt={props.img} />;
};

export default RandomImg;
