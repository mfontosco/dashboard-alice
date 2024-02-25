import React, { useState } from 'react';

const Switcher1 = ({switchLeftLabel,switchRightLabel}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <span className="text-xs mr-1">{switchLeftLabel}</span> {/* Label for OFF */}
        <div className="relative flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="block h-6 w-14 rounded-full bg-[#ffbfd1] flex items-center justify-end">
            <div className="dot absolute right-1 top-1 h-4 w-4 rounded-full bg-white transition"></div>
          </div>
        </div>
        <span className="text-xs ml-1">{switchRightLabel}</span> {/* Label for ON */}
      </label>
    </>
  );
};

export default Switcher1;
