import {
  adminChangeShelterStatus,
  deleteShelter,
  deleteSubscription,
  pauseResume,
} from "../../../../Redux/features/User/userApi";
import React, { memo } from "react";
import Toaster from "../../../Toaster";
import { useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import { ProductNameForTable } from "../../../../utils/functions";

const SubscriptionPermissionModal = ({
  subscriptionModalData,
  isOpen,
  toggle,
  fetchAllShelters,
}) => {
  const dispatch = useDispatch();
  const shelterId = subscriptionModalData?.id;

  // ***************** DELETE subscription API call *******************

  const handleSubscriptionDelete = () => {
    const subscriptionId =
      subscriptionModalData?.ShelterSubscriptions[0]?.subscriptionId;
    const data = {
      apiEndpoint: `/shelter/deleteSubscription/${subscriptionId}`,
    };
    dispatch(deleteSubscription(data)).then((res) => {
      if (res.type === "deleteSubscription/fulfilled") {
        fetchAllShelters();
        toggle();
      }
    });
  };

  // ***************** PAUSE and RESUME subscription API call *******************

  const handleSubscriptionPauseResume = () => {
    const subscriptionId =
      subscriptionModalData?.ShelterSubscriptions[0]?.subscriptionId;

    const data = {
      apiEndpoint: `/shelter/changeSubscription?subscriptionId=${subscriptionId}&status=${subscriptionModalData?.mode}`,
    };
    dispatch(pauseResume(data)).then((res) => {
      if (res.type === "pauseResume/fulfilled") {
        toggle();
        fetchAllShelters();
      }
    });
  };

  // ***************** Resend Invite to adopter API call *******************
  const resendInvite = () => {
    const data = {
      apiEndpoint: `/admin/changeStatus/?id=${shelterId}`,
    };

    dispatch(adminChangeShelterStatus(data)).then((res) => {
      if (res.type === "adminChangeShelterStatus/fulfilled") {
        toggle();
        fetchAllShelters();
      }
    });
  };

  // +++++++++++  Shelter Status change ( ACTIVE or BLOCK ) Api call   ++++++++++++
  const handleShelterStatusChange = () => {
    const data = {
      apiEndpoint: `/admin/changeStatus/?id=${shelterId}&status=${
        subscriptionModalData?.mode === "ACTIVATE_SHELTER"
          ? "ACCEPTED"
          : "BLOCKED"
      }`,
    };
    dispatch(adminChangeShelterStatus(data)).then((res) => {
      if (res.type === "adminChangeShelterStatus/fulfilled") {
        toggle();
        fetchAllShelters();
      }
    });
  };

  // +++++++++++++++ DELELTE Shelter API call +++++++++++++++++++++++

  const handleDeleteShelter = () => {
    const CustomerId = subscriptionModalData?.customerId;
    const data = {
      apiEndpoint: `/admin/deleteShelter/${CustomerId}`,
    };
    dispatch(deleteShelter(data)).then((res) => {
      if (res.type === "deleteShelter/fulfilled") {
        toggle();
        fetchAllShelters();
      }
    });
  };

  // ********************  Subscription Details  *********************
  const subcriptionDetails =
    subscriptionModalData?.ShelterSubscriptions?.length > 0
      ? [
          {
            Name: "Product ID",
            product:
              subscriptionModalData.ShelterSubscriptions[0].productId &&
              ProductNameForTable(
                subscriptionModalData.ShelterSubscriptions[0].productId
              ),
          },
          {
            Name: "Product Quantity",
            product: subscriptionModalData.ShelterSubscriptions[0].quantity,
          },
          {
            Name: "Product Frequency",
            product: subscriptionModalData.ShelterSubscriptions[0].frequency,
          },
          {
            Name: "Subscription Status",
            product: subscriptionModalData.ShelterSubscriptions[0].status,
          },
        ]
      : [];

  return (
    <Modal
      size={"md"}
      centered={true}
      isOpen={isOpen}
      backdrop={"static"}
      className="rounded-4"
    >
      <Col md={12} className="text-end ">
        <button className="btn p-0 m-0 text-danger m-1">
          <IoCloseSharp
            onClick={toggle}
            className="text-center cursorPointer"
            size={26}
          />
        </button>
      </Col>

      {/* <div className="py-2 px-2"> */}
      <ModalBody>
        <Row className="px-2">
          {/*  *************** Modal Main Icon **************** */}
          <Col md={12} className="text-center">
            {subscriptionModalData?.icon}
          </Col>

          {/*  *************** Modal Heading text **************** */}
          <Col md={12} className="p-0 m-0">
            <div className="mb-4 p-0">
              <h3 className="fw-semibold text-center">
                {subscriptionModalData?.headingText}
              </h3>
            </div>
          </Col>

          {/*  *************** Subscription Details text **************** */}
          {subscriptionModalData?.mode !== "DELETE_SHELTER" &&
            subscriptionModalData?.mode !== "RESEND" &&
            subscriptionModalData?.mode !== "ACTIVATE_SHELTER" &&
            subscriptionModalData?.mode !== "BLOCK_SHELTER" && (
              <Col md={12}>
                <Row className="mb-3">
                  {subcriptionDetails.length > 0 ? (
                    subcriptionDetails.map((items, index) => (
                      <React.Fragment key={index}>
                        <Col xs={5}>
                          <h6>{items.Name} :</h6>
                        </Col>
                        <Col xs={7}>{items.product}</Col>
                      </React.Fragment>
                    ))
                  ) : (
                    <p>No subscription data available</p>
                  )}
                </Row>
              </Col>
            )}

          <Col md={"12"}>
            <Row className="py-3">
              <Col xs={6} className="text-end">
                <button
                  className="btn p-0 m-0 w-100 text-white py-2"
                  onClick={toggle}
                  style={{
                    background: "#aca7a6",
                  }}
                >
                  No
                </button>
              </Col>
              <Col xs={6} className="text-end">
                <button
                  className={`btn m-0 w-100 text-white py-2 ${
                    subscriptionModalData?.mode === "delete" ||
                    subscriptionModalData?.mode === "DELETE_SHELTER"
                      ? "bg-danger"
                      : subscriptionModalData?.mode === "cancel" ||
                        subscriptionModalData?.mode === "BLOCK_SHELTER"
                      ? "bg-warning"
                      : subscriptionModalData?.mode === "active" ||
                        subscriptionModalData?.mode === "RESEND" ||
                        subscriptionModalData?.mode === "ACTIVATE_SHELTER"
                      ? "bg-green"
                      : ""
                  }`}
                  onClick={() => {
                    subscriptionModalData?.mode === "delete"
                      ? handleSubscriptionDelete()
                      : subscriptionModalData?.mode === "RESEND"
                      ? resendInvite()
                      : subscriptionModalData?.mode === "cancel" ||
                        subscriptionModalData?.mode === "active"
                      ? handleSubscriptionPauseResume()
                      : subscriptionModalData?.mode === "BLOCK_SHELTER" ||
                        subscriptionModalData?.mode === "ACTIVATE_SHELTER"
                      ? handleShelterStatusChange()
                      : subscriptionModalData?.mode === "DELETE_SHELTER"
                      ? handleDeleteShelter()
                      : Toaster.warning("Unable to perform action");
                  }}
                >
                  {subscriptionModalData?.buttonText}
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </ModalBody>
      {/* </div> */}
    </Modal>
  );
};

export default memo(SubscriptionPermissionModal);
