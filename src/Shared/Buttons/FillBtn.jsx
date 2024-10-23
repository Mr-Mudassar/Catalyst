import "./BtnStyle.scss";
import React, { memo } from "react";
import { Button } from "reactstrap";

const FillBtn = (props) => {
  const {
    icon,
    text,
    className,
    handleOnClick,
    disabled = false,
    type = "button",
  } = props;

  return (
    <Button
      className={`fillBtn fw-bold shadow-sm  ${className}`}
      onClick={handleOnClick}
      disabled={disabled}
      type={type}
    >
      {icon && icon}
      {text}
    </Button>
  );
};

export default memo(FillBtn);
