// BorderBox.jsx
import React from "react";

const TopBorderBox = () => {
  return (
    <div className="TopLeftBorder px-[12px] absolute top-2 left-0">
      <svg
        height="300"
        width="300"
        style={{
          margin: "10px",
          padding: "20px",
          borderStyle: "inset",
          display: "inline-block",
          backgroundColor: "white",
          borderWidth: "20px",
          borderTop: "25px solid",
          borderLeft: "25px solid",
          borderRight: "5px solid rgba(0, 0, 0, 0)",
          borderBottom: "5px solid rgba(0, 0, 0, 0)",
          borderTopLeftRadius: "15px",
          boxSizing: "border-box",
        }}
      ></svg>
    </div>
  );
};

export default TopBorderBox;
