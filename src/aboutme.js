import React from "react";
import styles from "./style/mystyle.module.css";
import AzamSVG from "./assets/icons/azam";
import me from "./assets/images/azamme.png";

function Aboutme({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? `container-fluid bg-dark  text-white text-center`
          : ` text-center container-fluid bg-white text-dark `
      }
    >
      <strong style={{ position: "relative", top: "100px", fontSize: "25px" }}>
        {" "}
        About Me
      </strong>
      <div className="row mt-5  ">
        <div className="col-sm-2"></div>
        <div className=" col-sm-8 mt-5 d-flex  p-3">
          <h5 className={`  ${styles.aboutMeHead}`}>
            <span
              className={darkMode ? `text-white mt-5  ` : `text-dark mt-5  `}
            ></span>

            <div className="d-flex">
              <div className={`${styles.aboutMeIconDiv}`}>
                {" "}
                <img width={200} height={300} src={me} />
              </div>
              <h6
                className={
                  darkMode
                    ? `text-white mt-4 mb-4 w-75`
                    : `text-dark mt-4 mb-4 w-75 `
                }
              >
                
               I am Azam Ali, a
                results-driven MERN stack developer with three years of
                experience in designing and implementing scalable web solutions.
                Currently, I am contributing my expertise at <a href="https://G-Tech.org/"> G-Teach Solution,.</a>. 
                where I specialize in building high-performance applications
                using MongoDB, Express.js, React, and Node.js. My passion for
                software development is fueled by a commitment to innovation,
                clean architecture, and efficient problem-solving. With a strong
                foundation in both front-end and back-end technologies, I excel
                at developing dynamic, responsive, and secure applications that
                enhance user experience and business efficiency. At G-Teach
                Solution, I collaborate with cross-functional teams to deliver
                cutting-edge digital solutions that align with industry best
                practices. I am always eager to explore new technologies,
                optimize workflows, and drive impactful projects. Feel free to
                connect with me for discussions on software development,
                technical collaboration, or innovative solutions.
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
