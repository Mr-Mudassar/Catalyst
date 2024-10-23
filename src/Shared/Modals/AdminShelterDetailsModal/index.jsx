import { format } from "date-fns";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Modal, ModalBody, Col, Container, Row } from "reactstrap";
import {
  ProductNameForTable,
  ShelterStatusForTable,
  SubscriptionStatusForTable,
} from "../../../utils/functions";

const AdminShelterDetailsModal = ({ data, isOpen, toggle }) => {
  return (
    <Modal size={"md"} centered={true} isOpen={isOpen} backdrop={"static"}>
      <Col md={12} className="text-end m-0 p-0">
        <button className="btn p-0 m-0 text-danger m-1">
          <IoCloseSharp
            onClick={toggle}
            className="text-center cursorPointer"
            size={26}
          />
        </button>
      </Col>

      <ModalBody>
        <Container>
          {/* Shelter Name */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Shelter Name
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.shelterName?.length > 20
                  ? data?.shelterName.slice(0, 20) + "..."
                  : data?.shelterName}
              </p>
            </Col>
          </Row>

          {/* Email */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Email
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">{data?.email}</p>
            </Col>
          </Row>

          {/* State */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                State
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">{data?.state}</p>
            </Col>
          </Row>

          {/* Ratio */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Ratio
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.numberOfAdopters} / {data?.numberOfPack}
              </p>
            </Col>
          </Row>

          {/* Invites Sent */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Invites Sent
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">{data?.inviteSent}</p>
            </Col>
          </Row>

          {/* Redeemed */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Redeemed
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">{data?.inviteAccepted}</p>
            </Col>
          </Row>

          {/* Repeat Percentage */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Repeat %
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">{data?.repeatAdopterPercentage} %</p>
            </Col>
          </Row>

          {/* Status */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Status
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.status && ShelterStatusForTable(data?.status)}
              </p>
            </Col>
          </Row>

          {/* Product */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Product
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.ShelterSubscriptions.length > 0 &&
                  ProductNameForTable(data?.ShelterSubscriptions[0]?.productId)}
              </p>
            </Col>
          </Row>

          {/* Quantity */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Quantity
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.ShelterSubscriptions[0]?.quantity}
              </p>
            </Col>
          </Row>

          {/* Frequency */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Frequency
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.ShelterSubscriptions[0]?.duration}{" "}
                {data?.ShelterSubscriptions[0]?.frequency}
              </p>
            </Col>
          </Row>

          {/* Subscription Status */}
          <Row className="border border-1 border-success align-items-center py-2">
            <Col xs={4}>
              <p className="text-green fw-bolder border-success border-end border-1 m-0">
                Subscription Status
              </p>
            </Col>
            <Col xs={8}>
              <p className="fw-bold m-0">
                {data?.ShelterSubscriptions.length > 0 &&
                  SubscriptionStatusForTable(
                    data?.ShelterSubscriptions[0]?.status
                  )}
              </p>
            </Col>
          </Row>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default AdminShelterDetailsModal;
