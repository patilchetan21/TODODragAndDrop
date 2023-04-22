import React from 'react';

function Checkbox({ isChecked, onCheck }) {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500 transition duration-150 ease-in-out"
        checked={isChecked}
        onChange={onCheck}
      />
    </label>
  );
}

export default Checkbox;
