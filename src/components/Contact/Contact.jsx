import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css'

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const fullName = `${e.target.first_name.value} ${e.target.last_name.value}`;

    e.target.fullName.value = fullName;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        alert("Message Sent Successfully!");
      })
      .catch((error) => {
        console.log(error.text);
        alert("Message Sending Failed.");
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setContactNo("");
    setMessage("");
  };
  return (
    <>
      <div
        id="contact"
        className="bg-[#111] py-10 flex w-full items-center justify-center h-[90vh] px-10"
      >
        <div id="contact-card" className="flex w-full items-center justify-evenly gap-4">
          <div id="geo-card" className="w-1/2 h-[61vh] flex items-center justify-center border-[1px]">
            <iframe
              src="https://maps.google.com/maps?q=Bengaluru,%20Karnataka&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              className="w-full h-[100%]"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
          <div id="form-card" className=" flex flex-col w-1/2 h-[70vh] p-5 gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Get In Touch</h2>
            </div>

            <form className="flex flex-col gap-4" onSubmit={sendEmail}>
              <div className="flex w-full justify-between gap-5">
                <div className="w-full ">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full ">
                  <input
                    className="w-full bg-[#111] px-3 py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between gap-5">
                <div className="w-full ">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="email"
                    name="userEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    name="phoneno"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  className="w-full px-3 py-2 bg-[#111] outline-none text-white border-[1px] border-gray-400 rounded"
                  name="message"
                  value={message}
                  rows={8}
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <input type="hidden" name="fullName" />
              </div>
              <div className="">
                <button type="submit" className="bg-emerald-700 px-4 py-2">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
