import React, { useState } from "react";
import "./AddInstance.css";

const AddInstance = function (props) {
  let currentTimeline = localStorage.getItem("currentTimeline");
  currentTimeline = JSON.parse(currentTimeline);

  let currentMonth = localStorage.getItem("currentMonth");
  currentMonth = JSON.parse(currentMonth);

  const currentMonthAsNumber = props.getMonthFromString(currentMonth);

  const formattedMonth = props.prependZero(currentMonthAsNumber);
  const startDate = `2021-${formattedMonth}-01`;

  const [date, setDate] = useState(startDate);
  const [newInstance, setInstance] = useState({
    timeline_id: currentTimeline.id,
    instance_colour_id: 1,
    name: "",
    description: "",
    image: "",
    month: currentMonth,
    day: 1,
  });

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
    <div className="new-instance-item">
      <div className="new-instance-item-content">
        <span className="tag" style={{ background: "#018f69" }}></span>
        <form id="addInstance">
          <label className="name">Name</label>
          <input
            type="text"
            id="name"
            value={newInstance.name}
            onChange={(event) =>
              setInstance({
                ...newInstance,
                name: event.target.value,
              })
            }
          ></input>
          <label className="name">Description</label>
          <input
            type="text"
            id="description"
            value={newInstance.description}
            onChange={(event) =>
              setInstance({
                ...newInstance,
                description: event.target.value,
              })
            }
          ></input>
          <label className="name">Picture URL</label>
          <input
            type="url"
            id="url"
            value={newInstance.url}
            onChange={(event) =>
              setInstance({
                ...newInstance,
                image: event.target.value,
              })
            }
          ></input>
          <label>Date:</label>

          <input
            type="date"
            id="date-picker"
            value={date}
            onChange={(event) => {
              console.log(event.target.value);
              const dateNum = new Date(event.target.value);
              const monthString = monthNames[dateNum.getMonth()];
              const dayNum = dateNum.getUTCDate();
              setDate(event.target.value);
              setInstance({
                ...newInstance,
                month: monthString,
                day: dayNum,
              });
            }}
            min={`2021-${currentTimeline.start_month}-01`}
            max={`2021-${currentTimeline.end_month}-31`}
          ></input>
          <button onClick={() => props.createInstance(newInstance)}>
            Save Instance
          </button>
        </form>

        {/* <div className="eventList">add a bunch of information in here</div> */}
      </div>
    </div>
  );
};

export default AddInstance;
