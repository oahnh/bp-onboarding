import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, position, description, email, imgPath }) => {
  return (
    <div className="card">
      <div className="pfp" style={{ background: { imgPath } }}>
        {/* <img src={imgPath} alt="Noah with x" /> */}
      </div>
      <div className="description">
        <div className="personalInfo">
          <h4>{name}</h4>
          <p>{position}</p>
        </div>
        <p>{description}</p>
      </div>
      <button className="contactButton">{email}</button>
      <div className="socialsContainer"></div>
    </div>
  );
};

export default ProfileCard;
