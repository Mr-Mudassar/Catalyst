import React, { useState, memo } from "react";
import { Row, Col, FormGroup, Input, Label } from "reactstrap";
import PageHeading from "../../../Headings/PageHeading";
import Images from "../../../../Assets/Images/ImageStore";
import ShopingForm from "../ShopingForm";
import { useDispatch } from "react-redux";
const ShopingFormWrapper = () => {
  const [selectedOption, setSelectedOption] = useState("42662009471125");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="bg-tan  w-100  d-flex justify-content-center p-md-5 ">
      <Row className="m-0  col-md-10 col-lg-8 rounded-4 shadow p-3   bg-white">
        <Col md={7}>
          <PageHeading
            className={"fw-bold fs-1 text-center"}
            headingText={"KEEP THE CAT,"}
          />
          <h1 className="text-yellow fw-bold text-center">DITCH THE SMELL</h1>
          <p className="text-secondary mt-4 p-0 m-0">
            Choose your Catalyst Cat Litter Formula
          </p>
          <p className="text-secondary font-11 lineHeight">
            Each bag will last about 1 month for 1 cat and will be delivered to
            your doorstep!
          </p>
          <FormGroup className="d-flex align-items-center pb-2" check>
            <Input
              name="radio1"
              type="radio"
              value="42662009471125"
              checked={selectedOption === "42662009471125"}
              onChange={handleOptionChange}
              className="me-2 cursorPointer"
            />
            <Label
              className={`mb-0 ${
                selectedOption === "42662009471125" ? "text-green" : "text-gray"
              }`}
            >
              <Row className="align-items-center">
                <Col md={6} sm={12} xs={12}>
                  <h4 className="fw-bold text-nowrap mb-0">MULTI CAT</h4>
                </Col>
                <Col md={6} sm={12} xs={12}>
                  <span className="font-12 mb-0">(Best for multiple cats)</span>
                </Col>
              </Row>
            </Label>
          </FormGroup>
          <FormGroup className="d-flex align-items-center py-3" check>
            <Input
              name="radio1"
              type="radio"
              value="42661956550805"
              checked={selectedOption === "42661956550805"}
              onChange={handleOptionChange}
              className="me-2 cursorPointer"
            />
            <Label
              className={`mb-0 ${
                selectedOption === "42661956550805" ? "text-green" : "text-gray"
              }`}
            >
              <Row className="align-items-center">
                <Col md={7} sm={12} xs={12}>
                  <h4 className="fw-bold text-nowrap mb-0">HEALTHY CAT</h4>
                </Col>
                <Col md={5} sm={12} xs={12}>
                  <span className="font-12 mb-0">(Best for one cat)</span>
                </Col>
              </Row>
            </Label>
          </FormGroup>
          <FormGroup className="d-flex align-items-center py-3" check>
            <Input
              name="radio1"
              type="radio"
              value="42662019858581"
              checked={selectedOption === "42662019858581"}
              onChange={handleOptionChange}
              className="me-2 cursorPointer"
            />
            <Label
              className={`mb-0 ${
                selectedOption === "42662019858581" ? "text-green" : "text-gray"
              }`}
            >
              <Row className="align-items-center">
                <Col md={5} sm={12} xs={12}>
                  <h4 className="fw-bold text-nowrap mb-0">UNSCENTED</h4>
                </Col>
                <Col md={7} sm={12} xs={12}>
                  <span className="font-12 mb-0">
                    (Best for sensitive kitties (and humans)!)
                  </span>
                </Col>
              </Row>
            </Label>
          </FormGroup>
          <FormGroup className="d-flex align-items-center py-3" check>
            <Input
              name="radio1"
              type="radio"
              value="45119920930965"
              checked={selectedOption === "45119920930965"}
              onChange={handleOptionChange}
              className="me-2 cursorPointer"
            />
            <Label
              className={`mb-0 ${
                selectedOption === "45119920930965" ? "text-green" : "text-gray"
              }`}
            >
              <Row className={"align-items-center mb-0"}>
                <Col md={5} sm={12} xs={12}>
                  <h4 className="fw-bold text-nowrap mb-0">WOOD PELLETS</h4>
                </Col>
                <Col md={7} sm={12} xs={12}>
                  <span className="font-12 mb-0">
                    (Best for households who want a non-tracking and
                    non-clumping litter)
                  </span>
                </Col>
              </Row>
            </Label>
          </FormGroup>
          <p className="text-secondary mt-3 fw-bold">
            Who is the litter not good for?
          </p>
          <ul className="text-secondary mt-3">
            <li className="lineHeight fs-6">
              <small>
                Anyone with a litter robot (none of the litters work in an
                automatic litter box, sorry :disappointed: )
              </small>
            </li>
            <li className="lineHeight mt-2 fs-6">
              <small>
                Anyone who is allergic to pine (or has a cat who is allergic to
                pine)
              </small>
            </li>
          </ul>
        </Col>
        <Col md={5}>
          <div className="py-3">
            <img
              src={Images.GREEN_PACKAGE_LOGO_IMAGES}
              alt="img"
              className="img-fluid"
            />
          </div>
          <div>
            <img
              src={Images.GREEN_PACKAGE_LOGO_Image}
              alt="img"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={12} className="mt-4">
          <PageHeading headingText={"Delivery"} />
          <ShopingForm selectedOption={selectedOption} />
        </Col>
      </Row>
    </div>
  );
};

export default memo(ShopingFormWrapper);
