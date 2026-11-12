import React from "react";

function Options(props) {
  const { options } = props;

  return options.map((option, idx) => {
    return (
      <option key={option.id} value={option.id}>
        {option.displayName}
      </option>
    );
  });
}

export default Options;
