import React from "react";
import "../styles/second.css";

const Details = () => {
  return (
    <div className="detailspage">
      <fieldset>
        <legend>Give us details</legend>
        <fieldset>
          <legend>By latitude and longitude</legend>
          <label htmlFor="">Latitude</label>
          <input type="text" />
          <label htmlFor="">Longitude</label>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>By latitude and longitude</legend>
          <label htmlFor="">City name/id or ZIP</label>
          <input type="text" /> <br />
          <button>Get results</button>
        </fieldset>
      </fieldset>
    </div>
  );
};

export default Details;
