import React from "react";

const Display = (props) => {
  let {display, setDisplay} = props;
  return (
    <div className={'display'}>
      {/* Display any props data here */}
      <p>{display}</p>
    </div>
  )
};

export default Display;
