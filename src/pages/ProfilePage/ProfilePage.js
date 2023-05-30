import React from "react";
import "./ProfilePage.css";
import profileImage from "../../images/user.webp";
import Navbar from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer.js";

function ProfilePage() {
  return (
    <div className="profile-wrap-container">
      <Navbar />
      <h2 className="profile-title">Profile</h2>
      <section className="profile-whole">
        <img src={profileImage} alt="User Profile" className="profile-image" />
        <section className="profile-informations">
          <p className="profile-info">Username: </p>

          <p className="profile-info">Email: </p>
        </section>
      </section>
      <Footer/>
    </div>
  );
}

export default ProfilePage;
