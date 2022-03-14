import React from "react";

export const Placeholder: React.FC = (props) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        fontSize: "10px",
        backgroundColor: "yellow",
        border: "red 1px dashed"
        }}
        {...props}
    />
  );
}


