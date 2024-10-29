import React from "react";
// import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-[#111] py-10 flex w-full items-center justify-center h-[90vh] px-10">
        <div className="flex w-full items-center justify-evenly gap-4">
          <div className="w-1/2 h-[61vh] flex items-center justify-center border-[1px]">
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
          <div className=" flex flex-col w-1/2 h-[70vh] p-5 gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Get In Touch</h2>
            </div>

            <form className="flex flex-col gap-4" action="">
              <div className="flex w-full justify-between gap-5">
                <div className="w-full ">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="w-full ">
                  <input
                    className="w-full bg-[#111] px-3 py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between gap-5">
                <div className="w-full ">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="w-full">
                  <input
                    className="w-full px-3 bg-[#111] py-2 outline-none text-white border-[1px] border-gray-400 rounded"
                    type="text"
                    placeholder="Phone No."
                  />
                </div>
              </div>
              <div className="w-full">
                <textarea
                  className="w-full px-3 py-2 bg-[#111] outline-none text-white border-[1px] border-gray-400 rounded"
                  name="message"
                  id="message"
                  rows={8}
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="">
                <button className="bg-emerald-700 px-4 py-2">
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
