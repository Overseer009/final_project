import React from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem.jsx";

const Timeline = function (props) {
  console.log(props.currentTimeline)
  const timelineBuilder = (start, end) => {

    // console.log(timelineData);
    const months = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    // const start = months{timelineData.start_month}
  };

//   timelineBuilder(props.currentTimeline)


    return (
    <div className="timeline-container">
        <span>something here</span>
      {/* mapping data  */}
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </div>
  );
};

export default Timeline;
