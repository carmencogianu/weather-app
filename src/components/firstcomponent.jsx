import React, { useState } from "react";
import "../styles/first.css";

const Data = ({ changeStep }) => {
  const [value, setValue] = useState("city-name");
  return (
    <div className="datapage">
      <fieldset>
        <legend>Choose how you want to retrieve data</legend>
        <div className="elements">
          <div className="searchbox">
            <p>Choose one option</p>
            <select name="" id="" onChange={e => setValue(e.target.value)}>
              <option value="city-name">By city name</option>
              <option value="city-id">By city id</option>
              <option value="coordinates">By geographic coordinates</option>
              <option value="zip">By ZIP code</option>
            </select>
          </div>
          <div className="datepicker">
            <p>Choose a date</p>
            <input type="month" />
          </div>
        </div>
        <input
          type="submit"
          value="Next step"
          onClick={() => {
            changeStep(value);
          }}
        />
      </fieldset>
    </div>
  );
};

export default Data;
