import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddInstance.css";

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

  const currentMonthAsNumber = props.getMonthFromString(selectedInstance.month);

  const formattedMonth = props.prependZero(currentMonthAsNumber);

  const formattedDay = props.formatDay(selectedInstance.day);
  console.log(selectedInstance.day);

  const [date, setDate] = useState(`2021-${formattedMonth}-${formattedDay}`);
  console.log(date);
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
  // <button onClick={() => handleClick(instance)}>Save Instance</button>;
  return (
    <section className="time-card">
      <div className="container-newTimeline">
        <div className="content">
          <div className="title">
            <span id="title">Edit Your Instance</span>
          </div>
          {/* <span className="tag" style={{ background: "#018f69" }}></span> */}
          <form
            id="editInstance"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick(instance);
            }}
          >
            <div className="note">
              <span>
                <em>Name*</em>
              </span>
            </div>
            <div className="enterName">
              <input
                required
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
            </div>
            <div className="note">
              <span>
                <em>Description*</em>
              </span>
            </div>
            <div className="enterName">
              <textarea
                required
                type="text"
                id="description"
                value={instance.description}
                onChange={(event) =>
                  setInstance({
                    ...instance,
                    description: event.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="note">
              <span>
                <em>Image URL</em>
              </span>
            </div>
            <div className="enterName">
              <input
                type="url"
                id="url"
                value={instance.image}
                onChange={(event) =>
                  setInstance({
                    ...instance,
                    image: event.target.value,
                  })
                }
              ></input>
            </div>
            <div className="note">
              <span>
                <em>Date*</em>
              </span>
            </div>
            <div className="enterName">
              <input
                required
                type="date"
                id="date-picker"
                value={date}
                onChange={(event) => {
                  const dateNum = new Date(event.target.value);
                  const monthString = monthNames[dateNum.getMonth()];
                  const dayNum = dateNum.getUTCDate();
                  setDate(event.target.value);
                  setInstance({
                    ...instance,
                    month: monthString,
                    day: dayNum,
                  });
                }}
                min={`2021-${currentTimeline.start_month}-01`}
                max={`2021-${currentTimeline.end_month}-31`}
              ></input>
            </div>
            <div className="new-instance-button">
              <button
                form="editInstance"
                type="submit"
                id="button"
                value="Submit"
              >
                Save
              </button>
              <button id="button" onClick={history.goBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditInstance;
