import React, { memo, useEffect, useState } from "react";
import Images from "../../../Assets/Images/ImageStore";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const PackageRangeCards = ({progress2, handleProgressChange2, limitData, handleProgressChange1}) => {

  return (
    <Container className="p-0 m-0">
      <Row>
        <Col xs={12} md={6}>
          <Card className="bg-yellow_light rounded-4 mb-3 border-dark">
            <CardBody>
              <p className="text-green fw-bold fs-4">
                Monthly limit for no. of adopters
              </p>
              <Row>
                <Col xs={7} md={9}>
                  <p className="text-green fs-4">Limit</p>
                </Col>
                <Col xs={5} md={3}>
                  <p className="text-yellow fs-4 text-end">1000</p>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center m-0 p-0">
                <Col xs={2} className="p-0 m-0 text-center mb-3">
                  <img src={Images.PAW_ICON_IMAGE} alt="img" width={"30px"} />
                </Col>
                <Col xs={8} md={8} className="mt-4 p-0">
                  <input
                    type="range"
                    value={limitData}
                    max="1000"
                    min="0"
                    onChange={handleProgressChange1}
                    className={"rangeInput w-100 p-0 m-0"}
                  />
                  <div className="text-center mt-2">
                    <span className="text-center px-4 py-1 rounded-5 text-yellow shadow">
                      {limitData}
                    </span>
                  </div>
                </Col>
                <Col xs={2} className="m-0 p-0 text-center mb-3">
                  <img src={Images.PAW_ICON_IMAGE} alt="img" width={"30px"} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="bg-yellow_light rounded-4 mb-3 border-dark">
            <CardBody>
              <p className="text-green fw-bold fs-4">
                State wise monthly limit for Shelters{" "}
              </p>
              <Row>
                <Col xs={7} md={9}>
                  <p className="text-green fs-4">Limit</p>
                </Col>
                <Col xs={5} md={3}>
                  <p className="text-yellow fs-4 text-end">20,000</p>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center m-0 p-0">
                <Col xs={2} className="p-0 m-0 text-center mb-3">
                  <img src={Images.PAW_ICON_IMAGE} alt="img" width={"30px"} />
                </Col>
                <Col xs={8} md={8} className="mt-4 p-0">
                  <input
                    type="range"
                    value={progress2}
                    max="1000"
                    min="0"
                    onChange={handleProgressChange2}
                    className={"rangeInput w-100 p-0 m-0"}
                  />
                  <div className="text-center mt-2">
                    <span className="text-center px-4 py-1 rounded-5 text-yellow shadow">
                      {progress2}
                    </span>
                  </div>
                </Col>
                <Col xs={2} className="m-0 p-0 text-center mb-3">
                  <img src={Images.PAW_ICON_IMAGE} alt="img" width={"30px"} />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(PackageRangeCards);
