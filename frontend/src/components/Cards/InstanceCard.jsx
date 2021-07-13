import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const InstanceCard = function (props) {
  let selectedInstance = localStorage.getItem("selectedInstance");
  selectedInstance = JSON.parse(selectedInstance);
  console.log("THIS IS THE SELECTED INSTANCE", selectedInstance);

  const handleClick = (id) => {
    console.log("inside handleClick", id);
    props.deleteInstance(id);
  };

  const imageDisplay = (selectedInstance) => {
    if (selectedInstance.image) {
      return <img className="instanceImage" src={selectedInstance.image}></img>;
    }
    return (
      <FontAwesomeIcon
        value={{ color: "white" }}
        className="fontAwesome"
        icon={faHourglassHalf}
        size="6x"
        color="white"
      />
    );
  };

  return (
    <section className="time-card">
      <div className="container-instance">
        <div className="instanceContent">
          <div id="instanceCardDisplay" className="instDisplays">
            <div className="firstLine">
              <div id="image">{imageDisplay(selectedInstance)}</div>
              <div className="date-name">
                <span id="instanceDate" className="note">
                  <div id="instDates">
                    {selectedInstance.month} {selectedInstance.day}
                  </div>
                </span>
                <div id="instanceName" className="note">
                  <span id="instanceTitle">{selectedInstance.name}</span>
                </div>
              </div>
            </div>
            <div id="instanceDescription" className="note">
              <span>{selectedInstance.description}</span>
            </div>
          </div>
          <div className="button">
            <Link to="/editinstance">
              <button id="button">Edit</button>
            </Link>
            <button
              id="button"
              onClick={() => handleClick(selectedInstance.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstanceCard;
