import React, { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label>
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default Checkbox;
