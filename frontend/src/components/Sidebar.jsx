import React, { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = function (props) {

  const [instance, setInstance] = useState({
    name: "",
    colour: "",
    description: "",
    date: "",
    image: ""
  })

  return (
    <form className="createInstance" onSubmit={(e) => e.preventDefault()}>
      <div className="sidenav bg-dark">

        <h3 className="theName">{props.timelineName}</h3>

        <div className="enterName">
          <input
            className="name"
            type="text"
            placeholder="Enter Instance Name"
            value={instance.name}
            onChange={(event) => 
              setInstance({
                ...instance,
                name: event.target.value
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
            onChange={(event) => 
              setInstance({
                ...instance,
                colour: event.target.value
              })
            }
          >
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
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
                description: event.target.value
              })
            }
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
                date: event.target.value
              })
            }/>
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
                image: event.target.value
              })
            }}
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
