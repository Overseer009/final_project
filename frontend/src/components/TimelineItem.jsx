import React from "react";
import { Link } from "react-router-dom";
import "./Timeline.css";

const description =
  "This is a very big description to take up a bit more space than just a single word can.";

const TimelineItem = function (props) {
  console.log(props);
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">

        
          <span className="tag">
            {props.month}
          </span>
          <div className="event-list">
          <div className="eventList">
            <ul>
              {props.currentIn.map((element) => {
                if (element.month === props.month) {
                  localStorage.setItem(
                    "selectedInstance",
                    JSON.stringify(element)
                  );
                  return (
                    <li style={{color: "#fff"}}>
                      <div className="list-items">
                        <span>
                          {element.name}
                        </span>
                        {/* <Link key={element.name} to="/instancecard">
                      </Link> */}
                      </div>

                    </li>
                  );
                }
              })}
            </ul>
            
          </div>
          <div className="make-it">
            <span className="add-new-event"> <strong>+</strong></span>
          </div>
          
        </div>
        
        <span className="circle" id="circle" ></span>    
      </div>
      
    </div>
  );
};

export default TimelineItem;
