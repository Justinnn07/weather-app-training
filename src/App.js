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
    {
      countryName: "France",
      weather: "30",
    },
  ]);
  const [showData, setShowData] = useState([]);
  const findWeather = () => {
    const find = states.filter((res) => options.includes(res.countryName));
    setShowData(find);
  };
  return (
    <div className="app">
      <Input
        input={options}
        setInput={setOptions}
        check={findWeather}
        array={states}
      />
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
