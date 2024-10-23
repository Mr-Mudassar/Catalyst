import styles from "./style.module.scss";
import { Input, Label } from "reactstrap";
import React, { memo, useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputField = (props) => {
  const {
    type,
    value,
    name,
    icon,
    style,
    rows,
    label,
    disabled,
    labelIcon,
    className,
    placeholder,
    onBlurHandle,
    onChangeHandle,
    labelIconHandleIcon,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`text-green ${styles.inputWrapper}`}>
      <Label className="mb-0 p-0 fw-bold d-flex justify-content-between align-items-center">
        <span>{label}</span>{" "}
        {labelIcon && (
          <span className="cursorPointer" onClick={labelIconHandleIcon}>
            {labelIcon}
          </span>
        )}
      </Label>
      {icon && <div className={styles.leftIconWrapper}>{icon}</div>}
      <Input
        type={
          type === "password" ? (isPasswordVisible ? "text" : "password") : type
        }
        placeholder={placeholder}
        name={name}
        style={style}
        min={type === "number" ? 0 : ""}
        step={type === "number" ? "any" : ""}
        className={`form-control-lg w-100 border-green ${styles.inputDesign} ${
          type === "number" ? "remove-arrow" : ""
        } ${className}`}
        disabled={disabled}
        onChange={onChangeHandle}
        onBlur={onBlurHandle}
        value={value}
        rows={rows}
      />
      {type === "password" && (
        <div
          onClick={togglePasswordVisibility}
          className={styles.rightIconWrapper}
        >
          {isPasswordVisible ? <GoEyeClosed /> : <GoEye />}
        </div>
      )}
    </div>
  );
};

export default memo(InputField);
