import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const InstanceCard = function (props) {
  let selectedInstance = localStorage.getItem("selectedInstance");
  selectedInstance = JSON.parse(selectedInstance);
  console.log("THIS IS THE SELECTED INSTANCE", selectedInstance);
  let history = useHistory();

  const handleClick = (id) => {
    console.log("inside handleClick", id);
    props.deleteInstance(id);
    history.push("/timeline");
  };

  return (
    <section className="card">
      <div className="content">
        <div className="instDisplays">
          <span id="image">
            {/* <img src="https://unsplash.com/photos/sQoIRY84a2E" /> */}
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
          <button
            onClick={() => handleClick(selectedInstance.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstanceCard;
