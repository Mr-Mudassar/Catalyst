import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import SidePanel from "../../SidePanel";
import SignInForm from "../SignInForm/index";
import AuthWrapper from "../../AuthWrapper/Index";
import Images from "../../../Assets/Images/ImageHelper/index";

const SignInWrapper = () => {
  return (
    <Row className="m-0 p-0 min-vh-100 bg-green">
      <Col
        md={4}
        className="d-none d-md-flex p-0 justify-content-center align-items-center"
      >
        <SidePanel
          imageSrc={Images.CUSTOM_IMAGE}
          title="Hi! Welcome "
          highlightText="back"
          description={
            <>
              <span>Don't have an account yet?</span>
              <br />
            </>
          }
          linkText="Apply to be a Catalyst Shelter Partner!"
          linkHref="/signUp"
        />
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper HeadingText="Shelter Sign In">
          <SignInForm />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(SignInWrapper);
