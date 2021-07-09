import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const description =
  "This is a very big description to take up a bit more space than just a single word can.";

const TimelineItem = function (props) {
  console.log(props);
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

        <button>PLUS event</button>

        {/* <a>Link</a> */}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
