import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem.jsx";

const Timeline = function (props) {
  return (
    <div className="timeline-container">
      {/* mapping data  */}
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </div>
  );
};

export default Timeline;
