import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import "./App.css";
const App = () => {
  const [options, setOptions] = useState("");
  const [states] = useState([
    {
      countryName: "India",
      weather: "10",
    },
    {
      countryName: "United Kingdom",
      weather: "12",
    },
    {
      countryName: "Canada",
      weather: "20",
    },
  ]);
  const [showData, setShowData] = useState([]);
  const findWeather = () => {
    const find = states.filter((res) => options.includes(res.countryName));
    setShowData(find);
  };

  return (
    <div>
      <Input input={options} setInput={setOptions} check={findWeather} />
      {showData.map((res, index) => {
        return (
          <Card
            key={index}
            countryWeather={res.weather}
            countryName={res.countryName}
          />
        );
      })}
    </div>
  );
};

export default App;
