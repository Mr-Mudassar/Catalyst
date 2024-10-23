import OtpForm from "../OtpForm";
import { Col, Row } from "reactstrap";
import SidePanel from "../../SidePanel";
import React, { memo, useState } from "react";
import PageHeading from "../../Headings/PageHeading";
import Images from "../../../Assets/Images/ImageHelper/index";
import AuthWrapper from "../../AuthWrapper/Index";

const OtpWrapper = () => {
  const [otp, setOtp] = useState();
  return (
    <Row
      className="m-0 p-0 bg-green"
     
    >
      <Col md={4} className="d-none d-md-flex p-0 justify-content-center align-items-center">
        <SidePanel
          imageSrc={Images.CUSTOM_IMAGE}
          title="OTP Verification "
          highlightText=""
          description="Enter the OTP sent to your email to verify your identity"
          linkText=""
          linkHref=""
        />
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper>
          <OtpForm
            name={"otpInput"}
            value={otp}
            handleOnChange={(value) => setOtp(value)}
          />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(OtpWrapper);
