import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/admin/login`,
        {
          username,
          password,
        }
      );

      console.log(response.data);
      if (
        response.data.role === "admin" ||
        response.data.role === "superAdmin"
      ) {
        navigate("/dashboard");
      } else {
        navigate("/profile");
      }

      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message || "Login failed");
    }
  };

  return (
    <div
      className="login-container"
      style={{ background: "../../images/ancient.webp" }}
    >
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="/register" className="a2">
            Sign up!
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
