import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Timeline.css";

const description =
  "This is a very big description to take up a bit more space than just a single word can.";

const TimelineItem = function (props) {
  let history = useHistory();

  const handleClick = () => {
    history.push("/addinstance");
    localStorage.setItem("currentMonth", JSON.stringify(props.month));
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
                localStorage.setItem(
                  "selectedInstance",
                  JSON.stringify(element)
                );
                return (
                  <li>
                    <Link key={element.name} to="/instancecard">
                      {element.name}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>

        <button onClick={handleClick}>Add Instance</button>

        {/* <a>Link</a> */}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
