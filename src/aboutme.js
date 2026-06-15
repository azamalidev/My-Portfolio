import React from "react";
import { motion } from "framer-motion";
import styles from "./style/mystyle.module.css";
import AzamSVG from "./assets/icons/azam";
import me from "./assets/images/profile-image-2.jpeg";

function Aboutme({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? `container-fluid bg-dark text-white`
          : `container-fluid bg-white text-dark`
      }
    >
      <div className={`${styles.aboutMeSection} p-4 p-md-5 my-5`}>
        <div className="row align-items-center gx-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.div
              className={styles.aboutMeImage}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <img
                src={me}
                alt="Azam Ali"
                className="img-fluid w-100"
              />
            </motion.div>
          </div>

          <div className="col-md-8">
            <div className="d-flex align-items-center mb-3">
              <span className={styles.aboutMeLabel}>About Me</span>
              <h2 className={styles.aboutMeTitle}>Professional MERN Stack Developer</h2>
            </div>

            <p className={styles.aboutMeBody}>
              I am Azam Ali, a results-driven MERN stack developer with three
              years of experience designing and implementing scalable web
              solutions. I currently contribute my expertise at{' '}
              <a href="https://G-Tech.org/" className={styles.aboutMeLink}>
                G-Teach Solution
              </a>, where I build high-performance applications using
              MongoDB, Express.js, React, and Node.js.
            </p>
            <p className={styles.aboutMeBody}>
              My work is grounded in clean architecture, efficient problem-solving,
              and user-centered design. I develop responsive, secure applications
              that improve user experience and business efficiency, and I enjoy
              collaborating with cross-functional teams to deliver innovative
              digital solutions.
            </p>

            <div className="row mt-4">
              <div className="col-sm-6 mb-3">
                <div className={styles.aboutMeStat}>
                  <strong>4+ Years</strong>
                  <span>Experience</span>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className={styles.aboutMeStat}>
                  <strong>React</strong>
                  <span>Modern UI</span>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className={styles.aboutMeStat}>
                  <strong>REST & GraphQL</strong>
                  <span>API Integration</span>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className={styles.aboutMeStat}>
                  <strong>Team Collaboration</strong>
                  <span>Agile Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
