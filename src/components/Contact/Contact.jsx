import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-main-container">
        <div className="contact-contents">
          <div className="image">
            {/* <img src="./image_02.png" alt="" /> */}
            <iframe
              src="https://maps.google.com/maps?q=Bengaluru,%20Karnataka&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              width="620"
              height="460"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
          <div className="contact-form">
            <div className="form-contents">
              <h2>Get In Touch</h2>
              <div className="name">
                <div className="fname">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="lname">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="email-mobile">
                <div className="email">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="phoneno">
                  <input type="text" placeholder="Phone No." />
                </div>
              </div>
              <div className="message">
                <textarea
                  name="message"
                  id="message"
                  rows={8}
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="submit-button">
                <button>SEND YOUR MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
