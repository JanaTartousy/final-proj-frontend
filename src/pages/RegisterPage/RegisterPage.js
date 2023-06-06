import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("image", image);

      const response = await axios.post(
        `${process.env.REACT_APP_URL}/admin/register`,
        formData
      );

      console.log(response);

      setUsername("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setImage("");
      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message || "Registration failed");
    }
  };

  return (
    <div class="register-container">
      <form class="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <div class="user-field">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label for="username">Username</label>
        </div>
        <div class="user-field">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label for="firstName">First Name</label>
        </div>
        <div class="user-field">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label for="lastName">Last Name</label>
        </div>
        <div class="user-field">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
        </div>
        <div class="user-field">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label for="password">Password</label>
        </div>
        <div class="user-field">
          <input type="file" id="image" onChange={handleImageChange} />
          <label for="image">Image</label>
        </div>
        <button type="submit ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Register
        </button>
        {/* </div> */}
      </form>
    </div>
  );
}

export default RegisterPage;
