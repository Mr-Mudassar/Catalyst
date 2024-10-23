import { format } from "date-fns";
import React, { memo } from "react";
import { Col, Container, Row } from "reactstrap";

const AdopterDetailsCard = ({ fetchSingleAdopters }) => {
  return (
    <Container>
      {/* Email */}
      <Row>
        <Col xs={4}>
          <p className="text-green fw-bolder">Email:</p>
        </Col>
        <Col xs={8}>
          <p className="fw-bold">{fetchSingleAdopters?.email}</p>
        </Col>
      </Row>

      {/* Redeem Status */}
      <Row>
        <Col xs={4}>
          <p className="text-green fw-bolder">Redeem Status:</p>
        </Col>
        <Col xs={8}>
          <p className="fw-bold">
            {fetchSingleAdopters?.redemStatus ? "True" : "False"}
          </p>
        </Col>
      </Row>

      {/* Invite Date */}
      {fetchSingleAdopters?.createdAt && (
        <Row>
          <Col xs={4}>
            <p className="text-green fw-bolder">Invite Date:</p>
          </Col>
          <Col xs={8}>
            <p className="fw-bold">
              {format(new Date(fetchSingleAdopters.createdAt), "yyyy-MM-dd")}
            </p>
          </Col>
        </Row>
      )}

      {/* Redemption Date */}
      {fetchSingleAdopters?.redemDate && (
        <Row>
          <Col xs={4}>
            <p className="text-green fw-bolder">Redemption Date:</p>
          </Col>
          <Col xs={8}>
            <p className="fw-bold">
              {format(new Date(fetchSingleAdopters.redemDate), "yyyy-MM-dd")}
            </p>
          </Col>
        </Row>
      )}

      {/* Adopter Orders Section */}
      {fetchSingleAdopters.redemStatus === true &&
        fetchSingleAdopters?.AdopterOrders?.length !== 0 && (
          <>
            {/* State */}
            <Row>
              <Col xs={4}>
                <p className="text-green fw-bolder">State:</p>
              </Col>
              <Col xs={8}>
                <p className="fw-bold">
                  {fetchSingleAdopters?.AdopterOrders[0]?.state}
                </p>
              </Col>
            </Row>

            {/* City */}
            <Row>
              <Col xs={4}>
                <p className="text-green fw-bolder">City:</p>
              </Col>
              <Col xs={8}>
                <p className="fw-bold">
                  {fetchSingleAdopters?.AdopterOrders[0]?.city}
                </p>
              </Col>
            </Row>

            {/* Zip Code */}
            <Row>
              <Col xs={4}>
                <p className="text-green fw-bolder">Zip Code:</p>
              </Col>
              <Col xs={8}>
                <p className="fw-bold">
                  {fetchSingleAdopters?.AdopterOrders[0]?.zipCode}
                </p>
              </Col>
            </Row>

            {/* Address */}
            <Row>
              <Col xs={4}>
                <p className="text-green fw-bolder">Address:</p>
              </Col>
              <Col xs={8}>
                <p className="fw-bold">
                  {fetchSingleAdopters?.AdopterOrders[0]?.address}
                </p>
              </Col>
            </Row>

            {/* Apartment */}
            <Row>
              <Col xs={4}>
                <p className="text-green fw-bolder">Apartment:</p>
              </Col>
              <Col xs={8}>
                <p className="fw-bold">
                  {fetchSingleAdopters?.AdopterOrders[0]?.apartment}
                </p>
              </Col>
            </Row>
          </>
        )}
    </Container>
  );
};

export default memo(AdopterDetailsCard);
