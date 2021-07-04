import React from "react"
import {  Link  } from 'react-router-dom';
import "./Sidebar.css";


const Sidebar = function (props) {


  return (

    <div className="sidenav bg-dark">
      <p>{props.timelineName}</p>
      <div className="enterColour">
        <label for='colour'>Select Instance Colour:</label>
            <select className="instanceColours" name="Colours">
              <option value="1">Blue</option>
              <option value="2">Red</option>
              <option value="3">Green</option>
              <option value="4">Yellow</option>
              <option value="5">Orange</option>
            </select>
      </div>
      <div className="enterTitle">
        <input className="title" type="text" placeholder="Enter Instance Title" />
      </div>
      <div className="form-group">
          <textarea className="form-control" rows="3" placeholder="Enter your Instance Description"></textarea>
      </div>
      <div className="enterDate">
        <input className="date" type="date" placeholder="Enter Instance Date" />
      </div>
        <div className="form-group">
          <label for="exampleFormControlFile1">Instance Image</label>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
        </div>
    </div>

  )

};

export default Sidebar;