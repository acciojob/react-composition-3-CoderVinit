import React from "react";
import "./../styles/App.css";
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div className="container">
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip">
        <h2 style={{display:'inline-block'}}>Hover over me</h2>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p style={{ display: "inline-block"}}>
          Hover over me to see another tooltip
        </p>
      </Tooltip>
    </div>
  );
};

export default App;
