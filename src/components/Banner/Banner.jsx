import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-contents">
          <div className="contents-left">
            <div className="span">
              <span>Welcome to my Portfolio!</span>
            </div>

            <div className="heading">
              <h1>Hello! I'm RAVI, Frontend Developer.</h1>
            </div>
            <div className="para">
              <p>
                An MCA-Graduate from{" "}
                <strong>Vellore Institute of Technology, Vellore</strong>
              </p>
              <div>
                <p>
                  <i
                    className="fas fa-map-marker-alt"
                    style={{
                      color: "crimson",
                      fontSize: "18px",
                      marginTop: "10px",
                    }}
                  ></i>{" "}
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
            <div className="btn">
              <button>Let's Connect!</button>
            </div>
          </div>
          <div className="contents-right">
            <div className="image-container">
              <img src="/banner-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
