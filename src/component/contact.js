import React, { useState, useRef } from "react";
import styles from "../mystyle.module.css";
import image from "../assets/images/me.png";
import emailjs from "@emailjs/browser";
import { notification } from "antd";
function ContactUs({ darkMode }) {
    const form = useRef();
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [api] = notification.useNotification();

    const sendEmail = (e) => {
      e.preventDefault();
  
      if (user && email && message) {
        emailjs
          .sendForm(
            "service_es7gy41",
            "template_4j28ysi",
            form.current,
            "UrR8OS3JjUBMKVWNf"
          )
          .then(
            (result) => {
              console.log(result.text);
              const val = "top";
              api.open({
                message: "Email has been send to Mr.Azam Ali",
                style: {
                  width: 300,
                },
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg>
                ),
                val,
              });
              form.reset();
            },
            (error) => {}
          );
      } else {
        const val = "top";
        api.open({
          message: "Please fill all fields!",
          style: {
            width: 300,
          },
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-exclamation-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          ),
          val,
        });
      }
    };
  return (
    <div
        className="mt-5 row bg-primary"
        style={{
          textAlign: "center",
          background:
            " linear-gradient(to right, #4070f4, rgba(239, 242, 244, 1.893))",
        }}
      >
        <span
          className={
            darkMode
              ? `text-white mt-5 mb-5  ${styles.servicestext} `
              : `text-dark mt-5 mb-5 ${styles.servicestext}  `
          }
        >
          <strong
            className="mb-5 p-2 text-white"
            style={{ position: "relative", top: "-50px" }}
          >
            Contact Me
          </strong>
        </span>
        <div className="col-sm-4 d-flex">
          <img
            className={`${styles.footerImage} rounded shadow`}
            width={300}
            height={300}
            src={image}
          />
        </div>
        <div className="col-sm-2 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white" : "black"}
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <h6 className="text-white">aazam7246@gmail.com</h6>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill={darkMode ? "white" : "black"}
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <h6 className="text-white">+92327387008</h6>
          </div>
        </div>
        <div className="col-sm-6 mb-5" style={{ textAlign: "center" }}>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              className={`${styles.contactInput} rounded m-2`}
              name="user_name"
              placeholder="Your Name"
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              type="email"
              className={`${styles.contactInput} rounded m-2`}
              placeholder="Your Email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={`${styles.contactInput} rounded m-2`}
              placeholder="Query You Have"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />

            <input
              className={`${styles.submitButton} d-block p-2 mt-2 text-white`}
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <div className="footer text-center mt-3 mb-3">
          <h5 className={darkMode ? "text-white" : "text-dark"}>
            Azam Ali © 2023
          </h5>
        </div>
      </div>
  );
}

export default ContactUs;
