import react from 'react';

const InstanceCard = function () {


  return (

    <section className="card">
      <div className="content">
        <div className='instDisplays'>
          <span id='image'><img src='https://unsplash.com/photos/sQoIRY84a2E' /></span>
          <div className='info'>
            <span id='title'>Birthday Party</span>
            <span id='instDates'>Febuary 14th - Febuary 17th</span>
          </div>
        </div>
        <div className='instDescription'>
          <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
        </div>
        <div className="button">
          <button type="button" className="btn btn-secondary">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    </section>  
  )
}

export default InstanceCard;