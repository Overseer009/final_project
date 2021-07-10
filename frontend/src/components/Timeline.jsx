import React, { Component, useEffect, useState } from "react";
import "./Timeline.css";
import TimelineItem from "./TimelineItem.jsx";

const Timeline = function (props) {
  const timelineBuilder = (start, end) => {
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

    let newTimeline = [];

    if (start > end) {
      for (let i = start; i <= 12; i++) {
        newTimeline.push(months[i]);
      }
      for (let i = 1; i <= end; i++) {
        newTimeline.push(months[i]);
      }
      return newTimeline;
    } else {
      for (let i = start; i < end + 1; i++) {
        newTimeline.push(months[i]);
      }
      return newTimeline;
    }
  };

  let localCurrentTimeline = localStorage.getItem("currentTimeline");
  localCurrentTimeline = JSON.parse(localCurrentTimeline);

  const newTimeline = timelineBuilder(
    localCurrentTimeline.start_month,
    localCurrentTimeline.end_month
  );

  const [currentInstances, setCurrentInstances] = useState([]);

  useEffect(() => {
    props.getInstances(localCurrentTimeline).then((res) => {
      setCurrentInstances(res);
    });
  }, []);

  return (
    <div className="timeline-container">
      <br></br>
      <div></div>
      {newTimeline.map((month) => {
        return (
          <TimelineItem
            key={month}
            month={month}
            currentIn={currentInstances}
            setSelectedInstance={props.setSelectedInstance}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
