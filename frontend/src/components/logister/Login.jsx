import React from "react";
import "./styles.css";

const Login = function () {
  return (
    <form className="login">
      <h3>Sign In</h3>

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
        No account? <a href="#">Register Here</a>
      </p>
    </form>
  );
};

export default Login;
