import React from "react";

const Forecast = ({ forecastwhether, location }) => {
    return (

        <div className="mt-2 opacity-75">
            <h2>3 Day Forecast Whether of {location.name} {location.region}</h2>

            {forecastwhether.forecastday.map((data, index) => {
                return (

                    <div class=" bg-light accordion opacity-50 accordion-flush mt-3" id="accordionFlushExample" key={index}>

                        <div className="accordion-item">
                            <h2 className="accordion-header  ">
                                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div class="d-flex flex-row align-items-center mb-3 ">
                                        <div class="p-2"><span style={{opacity:"100%"}}> 📅 Day : {data.date} </span></div>
                                        <div class="p-2"><img src={data.day.condition.icon} /><span style={{opacity:"100%"}}>{data.day.condition.text}</span></div>
                                        <div class="p-2"><span style={{opacity:"100%"}}> Max Temp : {data.day.maxtemp_c}</span> </div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    {data.hour.map((data) => {
                                        return (
                                            <>
                                                <span style={{ color: 'red' }}>TIME</span> : {data.time} <span />
                                                <span style={{ color: 'red' }}>TEMPARATURE</span> : {data.temp_c}
                                                <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                <div class="progress-bar" style={{ width: `${data.temp_c}%` }}>{data.temp_c}</div>
                                                </div>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div >
    )
}
export default Forecast;