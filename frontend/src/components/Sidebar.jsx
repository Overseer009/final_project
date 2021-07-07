import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = function (props) {
  const [instance, setInstance] = useState({
    timeline_id: 1,
    name: "",
    instance_colour_id: 0,
    description: "",
    date: "",
    image: "",
  });

  return (
    <form className="createInstance" onSubmit={(e) => e.preventDefault()}>
      <div className="sidenav bg-dark">
        <h3 className="theName">{props.currentTimeline.name}</h3>

        <div className="enterName">
          <input
            className="name"
            type="text"
            placeholder="Enter Instance Name"
            value={instance.name}
            onChange={(event) =>
              setInstance({
                ...instance,
                name: event.target.value,
              })
            }
            required
          />
        </div>

        <div className="enterColour">
          <label>Select Instance Colour:</label>
          <select
            className="instanceColours"
            name="Colours"
            value={instance.colour}
            onChange={(event) => {
              setInstance({
                ...instance,
                instance_colour_id: Number(event.target.value),
              });
            }}
            required
          >
            <option value="1">Blue</option>
            <option value="2">Red</option>
            <option value="3">Green</option>
            <option value="4">Yellow</option>
            <option value="5">Orange</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your Instance Description"
            value={instance.description}
            onChange={(event) =>
              setInstance({
                ...instance,
                description: event.target.value,
              })
            }
            required
          ></textarea>
        </div>

        <div className="enterDate">
          <input
            className="date"
            type="date"
            placeholder="Enter Instance Date"
            value={instance.date}
            onChange={(event) =>
              setInstance({
                ...instance,
                date: event.target.value,
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Instance Image Url</label>
          <input
            type="url"
            className="form-control"
            placeholder="https://example.com"
            value={instance.image}
            onChange={(event) => {
              setInstance({
                ...instance,
                image: event.target.value,
              });
            }}
            required
          ></input>
        </div>

        <button
          type="submit"
          className="btn btn-success btn-block"
          onClick={() => props.createInstance(instance)}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sidebar;
