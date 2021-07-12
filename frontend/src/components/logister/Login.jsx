import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

const Login = function (props) {
  const history = useHistory();

  let currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    history.push("/timelines/new");
  }

  currentUser = JSON.parse(currentUser);
  // const handleClick = () => {
  //   history.push("/timelines/new");
  // };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <div className="container-logister">
        <form className="logister text" onSubmit={(e) => e.preventDefault()}>
          <div className="logister-title">
            <h3>Sign In</h3>
          </div>

          <div className="form-group">
            <label className="email text">Email</label>
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
            className="logister-button"
            onClick={() => props.loginUser(user)}
          >
            Submit
          </button>
          <p className="forgot-password">
            No account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
