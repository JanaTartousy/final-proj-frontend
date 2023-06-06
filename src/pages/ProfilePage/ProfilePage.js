import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProfilePage.css";
import profileImage from "../../images/user.webp";
import Navbar from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer.js";

function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/admin`);

        setUserData(response.data);
      } catch (error) {
        console.log(error);
        // Handle error while fetching user data
      }
    };

    const userData = localStorage.getItem("userData");
    setUserProfile(JSON.parse(userData));
    console.log(userProfile);
    fetchUserData();
  }, []);

  return (
    <div className="profile-wrap-container">
      <Navbar />
      <h2 className="profile-title">Profile</h2>
      <section className="profile-whole">
        <img src={profileImage} alt="User Profile" className="profile-image" />
        <section className="profile-informations">
          {/* {userProfile ? ( */}
          <>
            <p className="profile-info">
              Username: {userProfile && userProfile.username}
            </p>
            <p className="profile-info">
              Email: {userProfile && userProfile.email}
            </p>
          </>
          {/* // ) : ( */}
          {/* //   <p>No data, please login.</p> */}
          {/* // )} */}
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default ProfilePage;
