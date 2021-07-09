import React from "react";
import "./Timeline.css";


const description =
  "This is a very big description to take up a bit more space than just a single word can. This is a very big description to take up a bit more space than just a single word can. This is a very big description to take up a bit more space than just a single word can.";

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
          <span>LISTE OF EVENTS</span>
        </div>

        <button>PLUS event</button>

        {/* <a>Link</a> */}
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimelineItem;
