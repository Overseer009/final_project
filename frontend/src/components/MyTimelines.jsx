import React from "react";
import "./MyTimelines.css";
import { useHistory } from "react-router-dom";



const MyTimelines = function (props) {
  const history = useHistory();


  const handleClick = (timeline) => {
    props.setCurrentTimeline(timeline)
    console.log("inside handleClick---->", timeline);
    history.push("/timeline")
  }

  return (
    <div className="timeline-list">
      <div className="timeline-list-content">
        <span className="timeline-list-title">My Timelines</span>
        <div className="list">
          {props.myTimelines.map((timeline) => {

            return <li onClick={() => handleClick(timeline)} key={timeline.id}>{timeline.name}</li>
          })}
        </div>
      </div>
    </div>
  )
}



export default MyTimelines;