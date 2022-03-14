import React from "react";

interface SegmentProps {
  content: string;
  className: string;
}

export const Segment: React.FC<SegmentProps> = (props) => {
  const { content, className, ...rest }  = props;
  return (
    <div
      className={className}
      style={{
        boxShadow: "rgb(34 36 38 / 15%) 0px 1px 1px 1px",
        padding: "1em",
        backgroundColor: "white"
        }}
        {...rest}
    >{content}</div>
  );
}


