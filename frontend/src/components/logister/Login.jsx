import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Login = function (props) {
  const [user, setUser] = useState({
    email: null,
    password: null,
  });

  console.log(user);

  return (
    <form className="login">
      <h3>Sign In</h3>

      <div className="form-group">
        <label className="email">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={user.email}
          onChange={(event) =>
            setUser({
              ...user,
              email: event.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label className="label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
      </div>

      <button
        type="submit"
        className="btn btn-success btn-block"
        // onSubmit={(event) => event.preventDefault()}
        onClick={(event) => props.loginInfo(user, event)}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        No account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
