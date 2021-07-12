import React, { useEffect } from "react";
import "./MyTimelines.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    props.deleteTimeline(timelineId, currentUser);
  };

  const handleClickCreateTimeline = () => {
    history.push("/timelines/new");
  };
  console.log(props.myTimelines);
  useEffect(() => {
    props.setMyTimelines(localUserTimelines);
  }, []);
  return (
    <div className="timeline-list">
      <div className="timeline-list-content">
        <span className="timeline-list-title">My Timelines</span>
        <div className="list">
          {props.myTimelines !== undefined && props.myTimelines.length > 0 ? (
            props.myTimelines.map((timeline) => {
              return (
                <div key={timeline.id} className="my-timeline-list">
                  <li
                    className="items-of-list"
                    onClick={() => handleClick(timeline)}
                  >
                    {timeline.name}
                  </li>
                  <div className="button">
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleClickDelete(timeline.id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="note">
              <em>
                Click{" "}
                <strong onClick={() => handleClickCreateTimeline()}>
                  Here
                </strong>{" "}
                to create a timeline.
              </em>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTimelines;
