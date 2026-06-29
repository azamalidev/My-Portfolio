import React from "react";
import profileImg from "../images/profile-image-2-removebg-preview.png";

function ItsMe() {
  return (
    <div className="itsme-wrapper">
      <img src={profileImg} alt="Azam Ali" className="itsme-img" />
    </div>
  );
}

export default ItsMe;
