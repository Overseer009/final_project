import React from "react";
import "./Timeline.css";

const TimelineItem = function (props) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: "#018f69" }}>
          hello
        </span>
        <time>2021-07-17</time>
        <p>description</p>
        <a>image url</a>
        <span className="circle">Month</span>
      </div>
    </div>
  );
};

export default TimelineItem;
