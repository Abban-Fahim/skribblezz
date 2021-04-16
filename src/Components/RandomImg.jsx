import React, { useEffect, useState } from "react";
const accessKey = "-mon2y53XNO6bOMaM_ZKsjftNg6VIqzS8BBUt-H2dA4";
const secret = "1c_RVggSmUvczeNTbAEcwgPMfTflCD-Ydw9lYLcZVsA";

const RandomImg = (props) => {
  const [src, setSrc] = useState();
  useEffect(getImg, [props.img]);

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
