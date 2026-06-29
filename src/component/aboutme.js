import React from "react";
import styles from "../style/mystyle.module.css";

function Aboutme() {
  return (
    <div className="container-fluid" style={{ background: 'var(--cyber-bg)' }}>
      <div className="row mt-5">
        <div className="col-sm-2"></div>
        <div className="col-sm-8 mt-5 d-flex p-5">
          <h5 className={`${styles.aboutMeHead}`}>
            <span className="text-white mt-5">
              <strong>About Me</strong>
            </span>
            <div className="d-flex">
              <h6 className="text-white mt-4 mb-4 w-75">
                I'm a Full-Stack MERN Developer with 5+ years of professional experience helping startups, agencies, and businesses build modern, scalable web applications. My expertise includes React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, TypeScript, REST APIs, and Tailwind CSS. I have developed CRM systems, SaaS platforms, business management tools, dashboards, fintech solutions, and custom web applications for international clients. I focus on clean architecture, performance optimization, responsive UI, API integration, and delivering production-ready applications. Whether you need a complete web application, frontend development, backend APIs, or long-term development support, I'm committed to delivering reliable, maintainable, and high-quality solutions that exceed expectations.
              </h6>
              <div className={`${styles.aboutMeIconDiv}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="white"
                  className="bi bi-file-person-fill m-2 stretched-link"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                </svg>
              </div>
            </div>
          </h5>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Aboutme;
