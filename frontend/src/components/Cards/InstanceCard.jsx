import react from "react";

const InstanceCard = function (props) {
  let selectedInstance = localStorage.getItem("selectedInstance");
  selectedInstance = JSON.parse(selectedInstance);

  return (
    <section className="card">
      <div className="content">
        <div className="instDisplays">
          <span id="image">
            <img src="https://unsplash.com/photos/sQoIRY84a2E" />
          </span>
          <div className="info">
            <span id="title">{selectedInstance.name}</span>
            <span id="instDates">{selectedInstance.month} 14th</span>
          </div>
        </div>
        <div className="instDescription">
          <span>{selectedInstance.description}</span>
        </div>
        <div className="button">
          <button type="button" className="btn btn-secondary">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstanceCard;
