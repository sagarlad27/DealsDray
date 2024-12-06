import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../service/auth.service";
import photo from "../photos/backgroundPhoto.jpeg";
import "./login.css";

export default function UserLogin() {
  const navigate = useNavigate();
  const form = useRef();
  const [email, setEmail] = useState(""); // Changed from username for clarity
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handlers for input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

 
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
  
    AuthService.login(email, password).then(
      (response) => {
        // Check if login was successful
        if (response && response.accessToken) {
          console.log("Login successful", response);
          localStorage.setItem("accessToken", response.accessToken);
          localStorage.setItem("name", response.name);
          navigate("/dashboard");
        } else {
          setLoading(false);
          setMessage("Invalid credentials.");
        }
      },
      (error) => {
        console.error("Login error:", error);
        setLoading(false);
        setMessage(error.message || "Something went wrong. Please try again.");
      }
    );
  };
  

  return (
    <div>
      <img
        src={photo}
        className="card-img-top rounded-3"
        alt="Background"
        style={{ width: "1700px", height: "780px" }}
      />

      <form className="login" onSubmit={handleLogin} ref={form}>
        <h3>
          <b>Login to your account</b>
        </h3>

        {/* Email Input */}
        <div className="form-outline mb-2">
          <label className="form-label">Email ID</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        {/* Password Input */}
        <div className="form-outline mb-2">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        {/* Login Button */}
        <div className="text-center pt-1 mb-2 pb-1">
          <button
            className="btn btn-success btn-block fa-lg mb-3"
            type="submit"
            disabled={loading}
          >
            {loading && <span className="spinner-border spinner-border-sm"></span>}
            <span>Login</span>
          </button>

          {/* Error Message */}
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>

        {/* Register Link */}
        <div className="d-flex align-items-center justify-content-center pb-2">
          <p className="mb-2 me-2" style={{ color: "blue" }}>
            Don't have an account?
          </p>
          <button
            type="button"
            className="btn btn-outline-danger"
            style={{ backgroundColor: "white" }}
          >
            <Link to="/Register" style={{ color: "blue" }}>
              Create new
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
