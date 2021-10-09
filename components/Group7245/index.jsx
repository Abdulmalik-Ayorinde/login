import React from "react";
import "./Group7245.css";

function Group7245(props) {
  const { name, fullName } = props;

  return (
    <div className="group-7245">
      <div className="overlap-group2">
        <div className="rectangle-2396-1 border-1px-mist-gray"></div>
        <div className="name montserrat-normal-onyx-12px">{name}</div>
        <div className="overlap-group-1">
          <div className="full-name montserrat-medium-sonic-silver-14px">{fullName}</div>
        </div>
      </div>
    </div>
  );
}

export default Group7245;
