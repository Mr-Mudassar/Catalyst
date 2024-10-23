import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import SignUpForm from "../SignupForm";
import SidePanel from "../../SidePanel";
import PageHeading from "../../Headings/PageHeading";
import Images from "../../../Assets/Images/ImageHelper/index";
import AuthWrapper from "../../AuthWrapper/Index";
import { useNavigate } from "react-router-dom";

const SignUpWrapper = () => {
  const navigate = useNavigate();
  const NavigateToLogin = () => {
    navigate("/shelterLogin");
  };

  return (
    <Row className="  m-0 p-0  bg-green ">
      <Col
        md={4}
        className="d-none d-md-flex justify-content-center align-items-center"
      >
        <SidePanel
          imageSrc={Images.CUSTOM_IMAGE}
          title="Let's create your "
          highlightText="account"
          description="Already have an account?"
          linkText="Sign In"
          linkHref="/shelterLogin"
        />
      </Col>
      <Col md={8} className="min-vh-100 p-0">
        <AuthWrapper HeadingText="Sign Up">
          <SignUpForm
            type="signUp"
            apiEndpoint={"/shelter/signupShelter"}
            buttonText={"SIGN UP"}
            navigate={NavigateToLogin}
          />
        </AuthWrapper>
      </Col>
    </Row>
  );
};

export default memo(SignUpWrapper);
