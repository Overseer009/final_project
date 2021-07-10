import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Timeline.css";

const description =
  "This is a very big description to take up a bit more space than just a single word can.";

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
        <span className="tag" style={{ background: "#018f69" }}>
          {props.month}
        </span>
        {/* <time>{props.month}</time> */}
        <div className="eventList">
          <ul>
            {props.currentIn.map((element) => {
              if (element.month === props.month) {
                return (
                  <li>
                    <span
                      onClick={() => handleClick(element)}
                      key={element.name}
                    >
                      {element.name}
                    </span>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <button onClick={handleClickAdd}>Add Instance</button>

        {/* <a>Link</a> */}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
