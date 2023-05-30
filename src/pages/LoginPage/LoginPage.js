import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/admin/login`, {
        username,
        password
      });

      // Handle the successful login response
      console.log(response.data); // You can customize this based on your API response

      // Clear the form
      setUsername("");
      setPassword("");
      setError("");
    } catch (error) {
      // Handle the error response
      console.log(error.response.data); // You can customize this based on your API response
      setError(error.response.data.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
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