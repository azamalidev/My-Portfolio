import React from "react";
import styles from "./style/mystyle.module.css";
import AzamSVG from "./assets/icons/azam";
import me from './assets/images/azamme.png'

function Aboutme({ darkMode }) {
  return (
    <div
      className={
        darkMode ? `container-fluid bg-dark  text-white text-center` : ` text-center container-fluid bg-white text-dark `
      }
    >
      <strong  style={{position:'relative', top:'100px',
    fontSize: "25px"}}> About Me</strong>
      <div className="row mt-5  ">
        <div className="col-sm-2"></div>
        <div className=" col-sm-8 mt-5 d-flex  p-3">
          <h5 className={`  ${styles.aboutMeHead}`}>
            <span
              className={darkMode ? `text-white mt-5  ` : `text-dark mt-5  `}
            >
              
            </span>

            <div className="d-flex">
              <div className={`${styles.aboutMeIconDiv}`}>
                {" "}
                <img width={200} height={300} src={me}/>
              </div>
              <h6
                className={
                  darkMode
                    ? `text-white mt-4 mb-4 w-75`
                    : `text-dark mt-4 mb-4 w-75 `
                }
              >
                I am Azam, and I am currently working as a MERN stack developer at <a href="https://mercurysols.org/">MercurySole.</a>. I have a passion for building web applications and a strong foundation in the MERN (MongoDB, Express.js, React, Node.js) stack, which allows me to create dynamic and responsive web solutions.

                My journey in the world of software development started with a fascination for technology and a desire to create meaningful and innovative applications. Over the years, I have honed my skills in front-end and back-end development, and I enjoy solving complex problems through clean and efficient code.

                At MercurySole, I have had the opportunity to work on a variety of projects, collaborating with a talented team to deliver cutting-edge solutions for our clients. 

                As a MERN stack developer.I look forward to contributing my expertise to our projects and helping the company achieve its goals.

                Feel free to reach out to me for any development-related inquiries or to discuss potential collaborations. {" "}
              </h6>

            </div>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Aboutme;
