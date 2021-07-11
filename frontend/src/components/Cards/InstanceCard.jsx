import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./styles.css";

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
    <section className="time-card">
      <div className="container-instance">
        <div className="instanceContent">
          <div id="instanceCardDisplay" className="instDisplays">
            <div className="firstLine">
              <div id="image">
                <img
                  className="instanceImage"
                  src={selectedInstance.image}
                  alt="https://api.freelogodesign.org/files/4f9bfa98572c45a98f0fb5f55bb0b168/thumb/logo_200x200.png?v=637616367530000000"
                />
              </div>
              <div className="date-name">
                <span id="instanceDate" className="note">
                  <div id="instDates">
                    {selectedInstance.month} {selectedInstance.day}
                  </div>
                </span>
                <div id="instanceName" className="note">
                  <em id="instanceTitle">{selectedInstance.name}</em>
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
