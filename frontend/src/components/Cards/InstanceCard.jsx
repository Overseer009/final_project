import React from "react";
import { Link } from "react-router-dom";
import useVisualMode from "../../hooks/useVisualMode";

const InstanceCard = function (props) {
  let selectedInstance = localStorage.getItem("selectedInstance");
  selectedInstance = JSON.parse(selectedInstance);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const EDIT = "EDIT";
  console.log("THIS IS THE SELECTED INSTANCE", selectedInstance);

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <section className="card">
      <div className="content">
        <div className="instDisplays">
          <span id="image">
            <img src="https://unsplash.com/photos/sQoIRY84a2E" />
          </span>
          <div className="info">
            <span id="title">{selectedInstance.name}</span>
            <span id="instDates">{selectedInstance.month} 14th</span>
          </div>
        </div>
        <div className="instDescription">
          <span>{selectedInstance.description}</span>
        </div>
        <div className="button">
          <Link to="/editinstance">
            <button className="btn btn-secondary">Edit</button>
          </Link>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </section>
  );
};

export default InstanceCard;
