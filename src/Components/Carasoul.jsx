import React from "react";
import main from "./../main.jpg";

const Carasoul = (props) => {
  return (
    <div className="container-fluid body">
      <div className="row">
        <div id="cara" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#cara"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#cara"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#cara"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              onClick={() => props.setNews("news")}
            >
              <img src={main} alt="online eudcation" className="d-block" />
              <div className="carousel-caption">
                <h5>Read Now!</h5>
                <p style={{ color: "black" }}>
                  Online Education: The Good, The Bad, The Ugly
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://static.toiimg.com/photo/msid-75348368/75348368.jpg?79167"
                alt=""
                className="d-block"
              />
              <div className="carousel-caption">
                <h5>10 Special ways to celebrate Ramadan in UAE with kids</h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.vox-cdn.com/thumbor/3aNZ4_wR7h2GhR_e7BbuxZq1KAg=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22408810/Exu93_nU8AAMAiC.jpg"
                alt="space"
                className="d-block"
              />
              <div className="carousel-caption">
                <h5>
                  SpaceX is adding a glass dome on Crew Dragon for 360 views of
                  space
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cara"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cara"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carasoul;
