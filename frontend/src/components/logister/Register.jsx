import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Register = function () {
  return (
    <form className="login">
      <h3>Register</h3>

      <div className="form-group">
        <label className="email">Name</label>
        <input type="text" className="form-control" placeholder="Enter name" />
      </div>

      <div className="form-group">
        <label className="email">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label className="label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-success btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Already have any account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
