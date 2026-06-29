import React from "react";
import styles from "../style/mystyle.module.css";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Application",
      detail:
        "I can develop different types of websites like Portfolio, E-commerce, Banking, Management systems and introductory websites.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3FFF00" viewBox="0 0 16 16">
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
      ),
      framWorks: ['Node', 'React.js', 'Next.js', 'Express.js', 'Nest.js', 'Typescript', 'MongoDb', 'MySql', 'Postgres']
    },
    {
      id: 2,
      title: "Mobile Application",
      detail:
        "I can develop different types of Mobile Applications in React Native. I can develop restaurant, banking and hotel apps.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3FFF00" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z" />
        </svg>
      ),
      framWorks: ['React Native', 'App Store deployment', 'Google Play deployment', 'Ongoing app maintenance']
    },
    {
      id: 3,
      title: "Deployment",
      detail:
        "I have extensive experience deploying applications on a variety of platforms, ensuring robust and scalable solutions for your projects.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3FFF00" viewBox="0 0 16 16">
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
          <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
        </svg>
      ),
      framWorks: ['Cyclic', 'Railway', 'Heroku', 'Vercel', 'Render', 'NameCheap', 'AWS Cloud Server', 'Firebase']
    }
  ];

  return (
    <div className="container text-center mt-5">
      <div className={styles.sectionHeader}>
        <div className={styles.sectionEyebrow}><svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>What I Do</div>
        <h2 className={styles.sectionTitle}>Services</h2>
        <p className={styles.sectionSubtitle}>
          End-to-end development services from concept to deployment, tailored to your business needs.
        </p>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((item) => (
          <div key={item.id} className={styles.serviceCard}>
            <div className={styles.serviceCardGlow}></div>
            <div className={styles.serviceIconWrap}>{item.icon}</div>
            <h5 className={styles.serviceTitle}>{item.title}</h5>
            <p className={styles.serviceDesc}>{item.detail}</p>
            <div className={styles.serviceTechWrap}>
              {item.framWorks.map((tech, i) => (
                <span key={i} className={styles.serviceTech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
