import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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

  const sortedCurrentInstances = props.currentIn.sort(function (a, b) {
    return a.day - b.day;
  });

  return (
    <div className="timeline-item">
      {view ? (
        <div
          className="timeline-item-content"
          onClick={() => handleClickView(view)}
        >
          <span className="tag">{props.month}</span>
          <div className="event-list">
            <div className="eventList">
              <ul className="ul-instance">
                {sortedCurrentInstances.map((element) => {
                  if (element.month === props.month) {
                    return (
                      <li
                        key={element.id}
                        className="instance-list"
                        style={{ color: "#fff" }}
                      >
                        <div className="list-items">
                          <div 
                            className="items-in-list"
                            onClick={() => handleClick(element)}
                            key={element.name}
                          >
                            <div className="instance-list-date">
                              <em>{element.month.substring(0, 3)}</em>
                              <em> {element.day}:&nbsp;&nbsp;</em>
                            </div>
                            <div id="instance-list-name">{element.name}</div>
                          </div>
                        </div>
                      </li>
                    );
                  }
                  return <div></div>;
                })}
              </ul>
            </div>
            <span className="add-new-event" onClick={handleClickAdd}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
          <span
            className="circle"
            id="circle"
            onClick={() => handleClickView(view)}
          ></span>
        </div>
      ) : (
        <div
          className="timeline-item-content"
          onClick={() => handleClickView(view)}
        >
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
