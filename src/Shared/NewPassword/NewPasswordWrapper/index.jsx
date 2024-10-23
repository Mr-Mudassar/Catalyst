import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import SidePanel from "../../SidePanel";
import NewPasswordForm from "../NewPasswordForm";
import Images from "../../../Assets/Images/ImageHelper/index";
import PageHeading from "../../Headings/PageHeading";
import AuthWrapper from "../../AuthWrapper/Index";
const NewPasswordWrapper = () => {


  return (
    <Row
      className="m-0 p-0"
      style={{
        backgroundColor: "#006633",
      }}
    >
      <Col md={4} className="d-none d-md-flex p-0 justify-content-center align-items-center">
        <SidePanel
          imageSrc={Images.CUSTOM_IMAGE}
          title="Set your new"
          highlightText="password"
          description="Set a new password to secure your account"
          linkText=""
          linkHref=""
        />{" "}
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper HeadingText="New Password" className={'mb-3'}>
          <NewPasswordForm />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(NewPasswordWrapper);
