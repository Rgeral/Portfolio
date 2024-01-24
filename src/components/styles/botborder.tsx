// BorderBox.jsx
import React from "react";

const BotBorderBox = () => {
  return (
    <div className=" BottomRightBorder absolute bottom-2 right-2">
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
          borderTop: "5px solid rgba(0, 0, 0, 0)",
          borderLeft: "5px solid rgba(0, 0, 0, 0)",
          borderRight: "25px solid",
          borderBottom: "25px solid",
          borderBottomRightRadius: "15px",
          boxSizing: "border-box",
        }}
      ></svg>
    </div>
  );
};

export default BotBorderBox;
