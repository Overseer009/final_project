import React from "react";
import "./MyTimelines.css";
import { useHistory } from "react-router-dom";

const MyTimelines = function (props) {
  const history = useHistory();

  let localUserTimelines = localStorage.getItem("userTimelines");

  localUserTimelines = JSON.parse(localUserTimelines);
  console.log("local User Timelines -------->", localUserTimelines);

  const handleClick = (timeline) => {
    localStorage.setItem("currentTimeline", JSON.stringify(timeline));
    console.log("inside handleClick---->", timeline);
    history.push("/timeline");
  };

  return (
    <div className="timeline-list">
      <div className="timeline-list-content">
        <span className="timeline-list-title">My Timelines</span>
        <div className="list">
          {localUserTimelines.map((timeline) => {
            return (
              <li onClick={() => handleClick(timeline)} key={timeline.id}>
                {timeline.name}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyTimelines;
