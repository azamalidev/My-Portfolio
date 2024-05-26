import React, { useState } from "react";
import '../style/skill.css'; // Import your CSS file for styling
import styles from "../style/mystyle.module.css"
import { Progress, Modal, notification, Button } from "antd";


function Services({ darkMode }) {
    const [modelData, setmodelData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [services, setServices] = useState([
        {
            id: 1,
            title: "Web Appication",
            detail:
                "I can developed different types of websites like Portfolio , E-commerence , Banking , Management systems and introductory website. ",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#3FFF00"
                    class="bi bi-code-slash"
                    viewBox="0 0 16 16"
                >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
            ),
            image:
                "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
            detailMore:
                "Different type of management system which i can build such as (Shop, hospital, school and collage etc) I can developed both frontend and backend in Next.js/React and express.js/Nest.js ",
            rank: { "React.js": 91, "Next.js": 87, "Express/Nest.js": 80 },
            framWorks: ['Node', 'React.js', 'Next.js', 'Express.js', 'Nest.js', 'Typescript', 'MongoDb', 'MySql', 'Postgres',]
        },
        {
            id: 2,
            title: "Mobile Application",
            detail:
                "I can developed different types of Mobile Application in react Native. I can developed restorent , banking and hotel apps. ",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#3FFF00"
                    class="bi bi-phone-flip"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"
                    />
                </svg>
            ),
            image:
                "https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg",
            detailMore:
                "Different type of mobile apps which i can build such as (Attendance system, music or movie apps  etc) I can developed both frontend and backend in React native and Express.js ",
            rank: { "React.Native": 80, "Express/Nest.js": 80 },
            framWorks: ['React Native', 'App Store deployment', 'Google Play deployment','Ongoing app maintenance' ]

        },
        // {
        //     id: 3,
        //     title: "Cross Platform Application",
        //     detail:
        //         "I can developed different types of Hybird and Cross Platform Appications for both mobile and web. ",
        //     icon: (
        //         <>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 width="35"
        //                 height="35"
        //                 fill="#3FFF00"
        //                 class="bi bi-laptop"
        //                 viewBox="0 0 16 16"
        //             >
        //                 <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        //             </svg>
        //             <svg
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 width="35"
        //                 height="35"
        //                 fill="#3FFF00"
        //                 class="bi bi-phone"
        //                 viewBox="0 0 16 16"
        //             >
        //                 <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
        //                 <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        //             </svg>
        //         </>
        //     ),
        //     framWorks: ['Node', 'React.js', 'Next.js', 'Express.js', 'Nest.js', 'Typescript', 'MongoDb', 'MySql', 'Postgres',],
        //     image:
        //         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD02kGxKsQu32jvATGml2ZBO6MZk0JPq_N3mvNIGctkiE4qBitSGp9r0vwXfR8NYiphQg&usqp=CAU",
        // },
        {
            id: 3,
            title: "Deployment",
            detail:
                "I have extensive experience deploying applications on a variety of platforms, ensuring robust and scalable solutions for your projects ",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3FFF00" class="bi bi-database-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
                    <path d="M12.096 6.223A5 5 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.5 4.5 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.5 4.5 0 0 1-.813-.927Q8.378 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.6 4.6 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10q.393 0 .774-.024a4.5 4.5 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777M3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4" />
                </svg>
            ),
            framWorks: ['Cyclic', 'Railway', 'Heroku', 'Vercel','Render', 'NameCheap', 'AWS Cloud Server', 'Firebase'],
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD02kGxKsQu32jvATGml2ZBO6MZk0JPq_N3mvNIGctkiE4qBitSGp9r0vwXfR8NYiphQg&usqp=CAU",
        },

    ]);
    return (
        <div className="container text-center  mt-5">
            <span
                className={
                    darkMode
                        ? `text-white mt-5 mb-5  ${styles.servicestext} `
                        : `text-dark mt-5 mb-5 ${styles.servicestext}  `
                }
            >
                <strong>Services</strong>
            </span>
            <div className="mt-5 row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 mb-5" style={{ textAlign: "center", display: 'flex' }}>
                    <div className="row mt-5">
                        {services.map((item, id) => {
                            return (
                                <div
                                    key={id}
                                    class={
                                        darkMode
                                            ? ` m-3 row rounded  ${styles.cardAfter}`
                                            : ` m-3 mb-5 row rounded ${styles.card}`
                                    }
                                    style={{
                                        width: "18rem",
                                        display: "flex",
                                        flexWrap: "wrap",
                                        // justifyContent: "space-around",
                                    }}
                                >
                                    <div className="mt-4">{item.icon}</div>

                                    <div class=" text-center">
                                        <h5 style={{ color: '#3FFF00' }}
                                         class="card-title">{item.title}</h5>
                                        <p class="card-text mb-5  p-1 rounded" style={darkMode ?  { fontWeight:'600',background:'#212529', color:'white', position:'relative', left:'-30px',top:'10px', width:'300px'} : { fontWeight:'600',background:'white', color:'#6C757D', position:'relative', left:'-30px',top:'10px', width:'300px'}}>{item.detail}</p>
                                        {item.framWorks.map((data, index) => {
                                            return <Button style={{color:"#6C757D",fontWeight:'600', background:'#3FFF00', border:'1px solid #4070F4'}} key={index} className=" mb-1">{data}</Button>
                                        })}
                                        <div className="row justyfy-content-center align-item-center">
                                            <div className="col-4"></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className="col-sm-1 fixed-top"
                    style={{ top: "90%", left: "90%" }}
                >

                </div>
            </div>
        </div>

    );
}

export default Services;
