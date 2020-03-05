import React from "react";

const Zip = () => {
  return (
    <div className="detailspage">
      <fieldset>
        <legend>Give us details</legend>
        <label htmlFor="">By city ZIP code</label>
        <input type="number" />
        <br />
        <button>Get results</button>
      </fieldset>
    </div>
  );
};

export default Zip;
