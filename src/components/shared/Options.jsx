import React from "react";

function Options({ options }) {
  return options.map((option) => {
    return (
      <option key={option.id} value={option.id}>
        {option.displayName}
      </option>
    );
  });
}

export default Options;
