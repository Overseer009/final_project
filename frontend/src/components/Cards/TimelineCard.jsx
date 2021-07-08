import { react, useState } from "react";
import "./styles.css";

const TimelineCard = function (props) {
  let currentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(currentUser);

  const [timeline, setTimeline] = useState({
    user_id: currentUser.id,
    name: "",
    start_month: null,
    end_month: null,
  });

  return (
    <section className="card">
      <div className="content">
        <div className="title">
          <span id="title">Create New Timeline</span>
        </div>
        <div className="note">
          <span>Enter new Timeline name:</span>
        </div>
        <div className="enterName">
          <input
            className="name"
            type="text"
            placeholder="Enter Name"
            value={timeline.name}
            onChange={(event) =>
              setTimeline({
                ...timeline,
                name: event.target.value,
              })
            }
          />
        </div>
        <div className="note">
          <span>
            Enter the <strong>Start</strong> and <strong>End</strong> Month of
            your Timeline:
          </span>
        </div>
        <div className="scale">
          <label htmlFor="start">Select Start Month:</label>
          <select
            className="months"
            name="start"
            onChange={(event) =>
              setTimeline({
                ...timeline,
                start_month: parseInt(event.target.value),
              })
            }
          >
            <option>Select</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <label htmlFor="end">Select End Month:</label>
          <select
            className="months"
            name="end"
            onChange={(event) =>
              setTimeline({
                ...timeline,
                end_month: parseInt(event.target.value),
              })
            }
          >
            <option>Select</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.timelineData(timeline)}
          >
            Create
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimelineCard;
