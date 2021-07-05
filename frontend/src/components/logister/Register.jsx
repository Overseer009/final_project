import React, { useState } from "react";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";

const Register = function (props) {
  
  let history = useHistory();

  let currentUser = localStorage.getItem("currentUser");

  if (currentUser) {
    history.push("/timelines/new");
  }

  currentUser = JSON.parse(currentUser);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form className="login" onSubmit={(e) => e.preventDefault()}>
      <h3>Register</h3>

      <div className="form-group">
        <label className="email">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={user.name}
          onChange={(event) =>
            setUser({
              ...user,
              name: event.target.value,
            })
          }
        />
      </div>

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
            setUser({
              ...user,
              password: event.target.value,
            })
          }
        />
      </div>

      <button
        type="submit"
        className="btn btn-success btn-block"
        onClick={() => props.registerUser(user)}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Already have any account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
