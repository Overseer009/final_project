import React, { useState } from "react";
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

  const [view, setView] = useState(false);
  console.log(view);

  const handleClickView = (view) => {
    view ? setView(false) : setView(true);
  };

  return (
    <div className="timeline-item">
      {view ? (
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
          <span
            className="circle"
            id="circle"
            onClick={() => handleClickView(view)}
          ></span>
        </div>
      ) : (
        <div className="timeline-item-content">
          <span
            style={{ display: "inline" }}
            className="circle"
            id="circle"
            onClick={() => handleClickView(view)}
          ></span>
          <span className="tag" style={{ color: "#fff" }}>
            {props.month}
          </span>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
