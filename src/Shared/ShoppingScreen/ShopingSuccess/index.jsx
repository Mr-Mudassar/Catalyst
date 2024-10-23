import React, { memo } from "react";
import Images from "../../../Assets/Images/ImageStore";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
const ShopingSuccess = () => {
  return (
    <Row className=" m-0">
      <Col className=" p-md-0 p-sm-2">
        <Card className=" text-center shadow-sm">
          <img
            src={Images.SUCCESS_BOX_Image}
            alt="successbox"
            className="img-fluid text-center p-5"
          />
          <CardBody>
            <CardText className="text-green">
              <h1 className="fw-bold ">Congratulations!</h1>
              <p className="m-0">You’ve got free litter headed to you! You should receive it in about 3-5 business days (and likely sooner). Thank you for joining the revolution! We’ll follow up with transition instructions and tips & tricks closer to the time 😸</p>
            </CardText>
          </CardBody>
          <CardFooter>
            <Link to={"https://catalystpet.com/pages/5-reasons"} className="text-yellow">
              Got it. Thanks!
            </Link>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default memo(ShopingSuccess);