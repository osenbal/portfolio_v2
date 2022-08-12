import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./index.css";

function Contacts() {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState("");
  const [popupMessagError, setPopupMessageError] = useState("");

  const [popupStatus, setPopupStatus] = useState(false);
  const [popupStatusError, setPopupStatusError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          e.target.reset();
          setPopupMessage("Message sent successfully");
          setPopupStatus(true);
          setInterval(() => {
            setPopupStatus(false);
          }, 5000);
        },
        () => {
          setPopupMessageError("Sory, Failed to send message");
          setPopupStatusError(true);
          setInterval(() => {
            setPopupStatusError(false);
          }, 5000);
        }
      );
  };
  return (
    <>
      {popupStatus ? (
        <div className="popup  popup--show-success">
          <p className="popup__message">{popupMessage}</p>
        </div>
      ) : (
        <></>
      )}
      {popupStatusError ? (
        <div className="popup  popup--show-error">
          <p className="popup__message">{popupMessagError}</p>
        </div>
      ) : (
        <></>
      )}

      <section className="contact container section" id="contact">
        <h2 className="section__title">Get In Touch</h2>
        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">
              Don't like forms? Send me an email. 👋
            </p>
          </div>

          <form onSubmit={sendEmail} ref={form} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  name="user_name"
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <input
                  name="user_email"
                  type="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>
            </div>

            <div className="contact__form-div">
              <input
                name="subject"
                type="text"
                className="contact__form-input"
                placeholder="Insert your subject"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button type="submit" className="btn contact__btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contacts;
