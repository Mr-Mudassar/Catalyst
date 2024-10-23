import React, { memo } from "react";

const SubHeading = (props) => {
  const { headingText, className } = props;
  return (
    <React.Fragment>
      <h4 className={`fw-400 text-custom-dark p-2 ${className}`}>{headingText}</h4>
    </React.Fragment>
  );
};
export default memo(SubHeading);
