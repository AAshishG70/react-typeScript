import React, { useState } from "react";

const Checkbox = ({ text }: { text: string }) => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <label>
        <input type="checkbox" />
      </label>
      <div>{text}</div>
    </div>
  );
};

export default Checkbox;
