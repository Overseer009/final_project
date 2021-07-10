import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditInstance = function (props) {
  let currentTimeline = localStorage.getItem("currentTimeline");
  currentTimeline = JSON.parse(currentTimeline);
  let history = useHistory();

  let selectedInstance = localStorage.getItem("selectedInstance");
  selectedInstance = JSON.parse(selectedInstance);
  const {
    day,
    description,
    id,
    image,
    instance_colour_id,
    month,
    name,
    timeline_id,
  } = selectedInstance;

  const [date, setDate] = useState();
  const [instance, setInstance] = useState({
    timeline_id: currentTimeline.timeline_id,
    instance_id: id,
    instance_colour_id: instance_colour_id,
    name: name,
    description: description,
    image: image,
    month: month,
    day: day,
  });

  const handleClick = (instance) => {
    props.editInstance(instance);
    history.push("/timeline");
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: "#018f69" }}></span>
        <form onSubmit={(e) => e.preventDefault()} className="addInstance">
          <label className="name">Name</label>
          <input
            type="text"
            id="name"
            value={instance.name}
            onChange={(event) =>
              setInstance({
                ...instance,
                name: event.target.value,
              })
            }
          ></input>
          <label className="name">Description</label>
          <input
            type="text"
            id="description"
            value={instance.description}
            onChange={(event) =>
              setInstance({
                ...instance,
                description: event.target.value,
              })
            }
          ></input>
          <label className="name">Picture URL</label>
          <input
            type="url"
            id="url"
            value={instance.url}
            onChange={(event) =>
              setInstance({
                ...instance,
                image: event.target.value,
              })
            }
          ></input>
          <label>Start date:</label>

          <input
            type="date"
            id="date-picker"
            value={date}
            onChange={(event) => {
              const dateNum = new Date(event.target.value);
              const monthString = monthNames[dateNum.getMonth()];
              const dayNum = dateNum.getUTCDate();
              setInstance({
                ...instance,
                month: monthString,
                day: dayNum,
              });
            }}
            min={`2021-${currentTimeline.start_month}-01`}
            max={`2021-${currentTimeline.end_month}-31`}
          ></input>
          <button onClick={() => handleClick(instance)}>Save Instance</button>
        </form>

        <div className="eventList">add a bunch of information in here</div>
      </div>
    </div>
  );
};

export default EditInstance;