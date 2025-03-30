import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import '../style/skill.css'; // Import your CSS file for styling

import image1 from '../assets/skillsImages/antd.png';
import image2 from '../assets/skillsImages/html.png';
import image3 from '../assets/skillsImages/css-3.png';
import image4 from '../assets/skillsImages/react.png';
import image5 from '../assets/skillsImages/nest.jpg';


import image6 from '../assets/skillsImages/express.png';
import image7 from '../assets/skillsImages/mongodb.png';
import image8 from '../assets/skillsImages/mysql.png';
import image9 from '../assets/skillsImages/oath.png';
import image10 from '../assets/skillsImages/bootstrap.png';
import image11 from '../assets/skillsImages/mui.png';
import image12 from '../assets/skillsImages/stripe.png';
import image13 from '../assets/skillsImages/sendgrid.png';


import image14 from '../assets/skillsImages/database-management.png';
import image15 from '../assets/skillsImages/aws.png';
import image16 from '../assets/skillsImages/emailjs.avif';
import image17 from '../assets/skillsImages/git.png';
import image18 from '../assets/skillsImages/firebase.png';
import image19 from '../assets/skillsImages/framer.png';
import image20 from '../assets/skillsImages/git.png';

import image21 from '../assets/skillsImages/tailwend.png';
import image22 from '../assets/skillsImages/quickbook.png';
import image23 from '../assets/skillsImages/docker.png';
import image24 from '../assets/skillsImages/socket.png';
import image25 from '../assets/skillsImages/typescript.png';
import image26 from '../assets/skillsImages/kafka.png';
import image27 from '../assets/skillsImages/redux.png';


function Skills({ darkMode }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const skillsElement = document.getElementById("skills");
            if (skillsElement) {
                const skillsPosition = skillsElement.getBoundingClientRect();
                if (skillsPosition.top < windowHeight * 0.75) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const trailSprings = useTrail(9, {
        transform: isVisible ? "translateY(0)" : "translateY(100px)",
        opacity: isVisible ? 1 : 0,
        from: { transform: "translateY(-100px)", opacity: 0 }
    });
    const skills1 = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
      
    ]
    const skills2 = [
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        
    ]
    const skills3 = [
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image10,
        image20,

    ]
    return (
        <div className="container text-center p-2 mt-5 max-w-screen-md mx-auto overflow-hidden">
            <span className={darkMode ? `text-white mt-5  ` : `text-dark mt-5  `} >
                <strong style={{
                    position: 'relative',
                    top: '10px',
                    fontSize: "25px"
                }}>Skills</strong>
            </span>
            <div
                id="skills"
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "200px",
                }}
            >
                
                {trailSprings.map((spring, index) => (
                    <div className="skills-row">
                        <animated.div
                            key={index}
                            style={{
                                ...spring,
                                height: "100px",
                                width: "140px",
                                marginRight: "-5px" ,
                                backgroundColor: "transparent",
                                color: "white",
                                // position:'relative',
                                // left:'100px'
                            }}
                            className="skill-card"
                        >
                            <img style={{
                                position: 'relative',
                                left: '0px',
                                width: '5rem',
                                height: '5rem'
                            }}
                                src={skills1[index]} />
                        </animated.div>
                    </div>
                ))}
            </div>
            <div
                id="skills2"
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "200px",
                }}
            >
                {trailSprings.map((spring, index) => (
                    <div className="skills-row2">
                        <animated.div
                            key={index}
                            style={{
                                ...spring,
                                height: "100px",
                                width: "140px",
                                marginRight: "-5px",
                                backgroundColor: "transparent",
                                color: "white",
                                // position:'relative',
                                // left:'100px'
                            }}
                            className="skill-card2"
                        >
                            <img style={{
                                position: 'relative',
                                left: '0px',
                                width: '5rem',
                                height: '5rem'
                            }} src={skills2[index]} />
                        </animated.div>
                    </div>
                ))}
            </div>
            <div
                id="skills3"
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "200px",
                }}
            >
                {trailSprings.map((spring, index) => (
                    <div className="skills-row3">
                        <animated.div
                            key={index}
                            style={{
                                ...spring,
                                height: "100px",
                                width: "140px",
                                marginRight: "-5px",
                                backgroundColor: "transparent",
                                color: "white",
                            }}
                            className="skill-card3"
                        >
                            <img style={{
                                position: 'relative',
                                left: '0px',
                                width: '5rem',
                                height: '5rem'
                            }} src={skills3[index]} />
                        </animated.div>
                    </div>
                ))}
            </div>

        </div>

    );
}

export default Skills;
