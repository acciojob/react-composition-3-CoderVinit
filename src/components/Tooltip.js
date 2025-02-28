import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="main">
      <div
        className="tooltip"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
        {isVisible && <span className="tooltiptext">{`${text}`}</span>}
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Tooltip;
