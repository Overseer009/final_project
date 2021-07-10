import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Timeline.css";

const TimelineItem = function (props) {
  let history = useHistory();

  const handleClickAdd = () => {
    history.push("/addinstance");
    localStorage.setItem("currentMonth", JSON.stringify(props.month));
  };

  const handleClick = (element) => {
    history.push("/instancecard");
    localStorage.setItem("selectedInstance", JSON.stringify(element));
  };

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">{props.month}</span>
        <div className="event-list">
          <div className="eventList">
            <ul>
              {props.currentIn.map((element) => {
                if (element.month === props.month) {
                  return (
                    <li style={{ color: "#fff" }}>
                      <div className="list-items">
                        <span
                          onClick={() => handleClick(element)}
                          key={element.name}
                          to="/instancecard"
                        >
                          {element.name}
                        </span>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="make-it">
            <span className="add-new-event" onClick={handleClickAdd}>
              <strong>+</strong>
            </span>
          </div>
        </div>
        <span className="circle" id="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
