import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import AdminSignInForm from "../AdminSignInForm";
import SidePanel from "../../SidePanel/index";
import Images from "../../../Assets/Images/ImageHelper/index";
import AuthWrapper from "../../AuthWrapper/Index";

const AdminSignInWrapper = () => {
  return (
    <Row
      className="m-0 p-0 min-vh-100"
      style={{
        backgroundColor: "#006633",
      }}
    >
      <Col md={4} className="d-none d-md-flex p-0 justify-content-center align-items-center">
        <SidePanel
          imageSrc={Images.CUSTOM_IMAGE}
          title="Hi! Welcome "
          highlightText="Back"
          description="Don't have any account yet?"
          linkText="Sign Up"
          linkHref="/signUp"
        />
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper HeadingText="Admin Sign In">
          <AdminSignInForm />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(AdminSignInWrapper);
