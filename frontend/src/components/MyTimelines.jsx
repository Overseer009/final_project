import React, { useEffect } from "react";
import "./MyTimelines.css";
import { useHistory } from "react-router-dom";

const MyTimelines = function (props) {
  const history = useHistory();

  let localUserTimelines = localStorage.getItem("userTimelines");
  localUserTimelines = JSON.parse(localUserTimelines);

  let currentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(currentUser);

  const handleClick = (timeline) => {
    localStorage.setItem("currentTimeline", JSON.stringify(timeline));
    history.push("/timeline");
  };

  const handleClickDelete = (timelineId) => {
    props.deleteTimeline(timelineId);
    props.getUserTimelines(currentUser);
  };

  useEffect(() => {
    props.setMyTimelines(localUserTimelines);
    console.log("after getUserTimelines", localUserTimelines);
  }, []);

  return (
    <div className="timeline-list">
      <div className="timeline-list-content">
        <span className="timeline-list-title">My Timelines</span>
        <div className="list">
          {props.myTimelines
            ? props.myTimelines.map((timeline) => {
                console.log(timeline);
                return (
                  <>
                    <li onClick={() => handleClick(timeline)} key={timeline.id}>
                      {timeline.name}
                    </li>
                    <button
                      onClick={() =>
                        handleClickDelete(timeline.id, currentUser)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                );
              })
            : localUserTimelines.map((timeline) => {
                console.log(timeline);
                return (
                  <>
                    <li onClick={() => handleClick(timeline)} key={timeline.id}>
                      {timeline.name}
                    </li>
                    <button
                      onClick={() =>
                        handleClickDelete(timeline.id, currentUser)
                      }
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default MyTimelines;
