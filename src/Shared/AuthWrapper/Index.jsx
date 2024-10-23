import React from "react";
import PageHeading from "../Headings/PageHeading";
import "./authWrapper.scss";
import { Col, Container, Row } from "reactstrap";
const AuthWrapper = ({ children, HeadingText, className }) => {
  return (
    <Container fluid className=" AuthWrapper h-100 ">
      <Row className="justify-content-center align-items-center h-100 ">
        <Col sm="8" className="">
          <PageHeading headingText={HeadingText} className={className} />
          <span className="">{children}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthWrapper;
