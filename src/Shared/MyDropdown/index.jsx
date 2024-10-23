import React from "react";
import { Label } from "reactstrap";

const MyDropdown = (props) => {
  const {
    Options,
    className,
    name,
    onChangeHandle,
    onBlurHandle,
    placeholder,
    showPlaceholder = true,
    value,
    label,
    labelClass,
    disabled,
  } = props;

  return (
    <div className={`mb-0 customSelect text-custom-dark`}>
      <Label className={`${labelClass} mb-0 p-0 fw-bold`}>{label}</Label>
      <select
        className={`customDropdownRadius w-100 form-control-lg ${className}`}
        name={name}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
        disabled={disabled}
      >
        {showPlaceholder && <option value="">{placeholder}</option>}
        {Options &&
          Options?.map((item, index) => (
            <option key={index} value={item?.value}>
              {item.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default MyDropdown;
