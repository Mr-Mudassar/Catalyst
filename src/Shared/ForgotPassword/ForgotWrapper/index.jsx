import React, { memo } from "react";

import { Col, Row } from "reactstrap";
import PageHeading from "../../Headings/PageHeading";
import SidePanel from "../../SidePanel";
import ForgotForm from "../ForgotForm";
import AuthWrapper from "../../AuthWrapper/Index";

const ForgotWrapper = () => {
  return (
    <Row
      className="m-0 p-0"
      style={{
        backgroundColor: "#006633",
      }}
    >
      <Col
        md={4}
        className="d-none d-md-flex justify-content-center align-items-center"
      >
        <SidePanel
          // imageSrc={Images.CUSTOM_IMAGE}
          title="Reset your account"
          highlightText="password"
          description="Set a new password to secure your account."
          linkText=""
          linkHref=""
        />{" "}
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper HeadingText="Forgot Password" className="mb-4">
          <ForgotForm />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(ForgotWrapper);
