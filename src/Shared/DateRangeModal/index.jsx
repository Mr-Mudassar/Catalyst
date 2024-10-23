import "./dateRange.scss";
import { addDays } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { celendarIcon } from "../../Assets/Icon";
import { DateRange } from "react-date-range";

const DateRangeModal = ({
  dateRange,
  setDateRange,
  handleSelect,
  handleClearClick,
}) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const modalRef = useRef(null); // Create a ref for the modal

  const handleLabelClick = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setDatePickerVisible(false);
      }
    };

    if (isDatePickerVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDatePickerVisible]);

  return (
    <div className="main-dateRange position-relative">
      <label
        htmlFor="DateRange"
        className="custom-lable"
        onClick={handleLabelClick}
      >
        <div className="d-flex justify-content-center">
          <span className="pt-1 pe-2 fs-6">{celendarIcon}</span>
          <p className="m-0 pt-2">Date Range</p>
        </div>
      </label>
      {isDatePickerVisible && (
        <div
          className="position-absolute end-0 custom-top bg-white shadow-lg rounded-3"
          ref={modalRef} // Attach ref to the modal
        >
          <DateRange
            id="DateRange"
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            showSelectionPreview={true}
            ranges={dateRange}
            direction="vertical"
            maxDate={new Date()} // Disable future dates
          />

          <button
            onClick={handleClearClick}
            className="btn bg-green text-white py-1 px-2 mt-0 font-12 mx-3 mb-3"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default DateRangeModal;
