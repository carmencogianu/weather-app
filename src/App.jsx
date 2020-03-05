import React, { useState } from "react";
import "./index.css";
import Header from "./components/header";
import Data from "./components/firstcomponent.jsx";
import Details from "./components/secondcomponent.jsx";
import Name from "./components/thirdcomponent.jsx";
import Id from "./components/fourthcomponent.jsx";
import Zip from "./components/fifthcomponent.jsx";

function App() {
  const [step, changeStep] = useState("first");

  return (
    <div className="app">
      <Header />
      {step === "first" && <Data changeStep={changeStep} />}
      {step === "city-name" && <Name />}
      {step === "coordinates" && <Details />}
      {step === "city-id" && <Id />}
      {step === "zip" && <Zip />}
    </div>
  );
}

export default App;
