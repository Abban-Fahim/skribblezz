import React from "react";
import RandomImg from "./RandomImg";

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
              <RandomImg img="unemployment" className="d-block" num={4} />
              <div className="carousel-caption">
                <h5>Read Now!</h5>
                <p>
                  Why Youth Uneployment Could Prove Disastrous for Today's
                  Economy
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <RandomImg img="cat" className="d-block" num={3} />
              <div className="carousel-caption">
                <h5>Second slide label</h5>
              </div>
            </div>
            <div className="carousel-item">
              <RandomImg img="cat" className="d-block" num={7} />
              <div className="carousel-caption">
                <h5>Third slide label</h5>
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
