import React from "react";

const Card = ({ countryName, countryWeather }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{countryName}</h5>
        <p className="card-text">{countryWeather}</p>
      </div>
    </div>
  );
};

export default Card;
