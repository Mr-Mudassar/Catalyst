import "./styles.scss";
import React, { memo } from "react";

const PageHeading = ({headingText, className, style}) => {
  return (
    <React.Fragment>
      <h2
        className={`fw-bold text-darkgreen  ${className} heading`}
        style={{ style, textTransform: "camelCase" }}
      >
        {headingText}
      </h2>
    </React.Fragment>
  );
};
export default memo(PageHeading);
