import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";

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

    const allSkills = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9,
        image11, image12, image13, image14, image15, image16, image17, image18, image19,
        image21, image22, image23, image24, image25, image26, image27, image10, image20
    ];

    const trailSprings = useTrail(allSkills.length, {
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.9)",
        opacity: isVisible ? 1 : 0,
        from: { transform: "translateY(-50px) scale(0.9)", opacity: 0 },
        config: { tension: 200, friction: 20 }
    });

    return (
        <div className="container text-center p-2 mt-5 max-w-screen-lg mx-auto overflow-hidden">
            <span className={darkMode ? `text-white mt-5` : `text-dark mt-5`} style={{ fontSize: "25px" }}>
                <strong>Skills</strong>
            </span>
            <div id="skills" className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 mt-8 justify-items-center">
                {trailSprings.map((spring, index) => (
                    <animated.div
                        key={index}
                        style={spring}
                        className={`p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                            darkMode ? 'bg-gray-800 hover:bg-gray-700 border-gray-600' : 'bg-white hover:bg-gray-50 border-gray-200'
                        } border`}
                    >
                        <img
                            src={allSkills[index]}
                            alt={`Skill ${index + 1}`}
                            className="w-16 h-16 object-contain mx-auto"
                        />
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;