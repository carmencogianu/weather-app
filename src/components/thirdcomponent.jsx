import React from "react";

const Name = () => {
  return (
    <div className="detailspage">
      <fieldset>
        <legend>Give us details</legend>
        <label htmlFor="">By city name</label>
        <input type="text" /> <br />
        <button>Get results</button>
      </fieldset>
    </div>
  );
};

export default Name;
