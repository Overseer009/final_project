import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

const Login = function (props) {

  const history = useHistory();

  let currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    history.push("/timelines/new")
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
      <form className="login" onSubmit={e => e.preventDefault()}>
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
          className="btn btn-success btn-block"
          onClick={() => props.loginUser(user)}
        >
          Submit
        </button>
        <p className="forgot-password text-right">
          No account? <Link to="/register">Register</Link>
        </p>
      </form>
    </>
  );
};

export default Login;
