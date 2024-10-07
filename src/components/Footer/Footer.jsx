import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-icons">
          <div className="footer-logo">
            <h2>RP-01</h2>
            <p>
              <strong>Email: </strong>
              <a href="mailto:ravikumarpatel2001@gmail.com">
                ravikumarpatel2001@gmail.com
              </a>
            </p>
          </div>
          <div className="social-icons-container">
            <div className="text">
              <h3>Connect with Me!</h3>
            </div>

            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/ravi-kumar-patel-01a9a8247/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" style={{ color: "#0077b5" }}></i>
              </a>
              <a
                href="https://github.com/ravikrpatel01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" style={{ color: "#333" }}></i>
              </a>
              <a
                href="https://www.facebook.com/ravikrpatel01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
              </a>
              <a
                href="https://www.instagram.com/ravikrpatel_01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-instagram"
                  style={{ color: "#e4405f" }}
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          Copyright{" "}
          <i
            className="fas fa-copyright"
            style={{ color: "rgb(70, 70, 70)", marginLeft: "2px" }}
          ></i>{" "}
          2024 | All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
