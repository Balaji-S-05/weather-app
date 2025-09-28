import React from 'react';

const Current = ({ currentweather, location }) => {
  return (
    <div className="container mt-3 opacity-75">
      <h2 className="text-center">Current Weather in {location.name}, {location.region}</h2>

      <div className="row g-3 mt-3">

        {/* Col 1 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card rounded-4 h-100">
            <div className="card-body text-center">
              <h5 className="card-title d-flex align-items-center justify-content-center gap-2">
                <img 
                  src={currentweather.condition.icon} 
                  alt="Weather Icon" 
                  style={{ width: "40px", height: "25px" }} 
                />
                {currentweather.condition.text}
              </h5>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card rounded-4 h-100">
            <div className="card-body text-center">
              <h5 className="card-title">TEMP (°C): {currentweather.temp_c}</h5>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card rounded-4 h-100">
            <div className="card-body text-center">
              <h5 className="card-title">TEMP (°F): {currentweather.temp_f}</h5>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="col-12 col-sm-6 col-md-3">
          <div className="card rounded-4 h-100">
            <div className="card-body text-center">
              <h5 className="card-title">HUMIDITY: {currentweather.humidity}%</h5>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Current;