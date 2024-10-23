import React, { memo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Modal, ModalBody, Col } from "reactstrap";
import SubscriptionForm from "./SubscriptionForm";

const AddEditubsubscriptionModal = ({
  isOpen,
  toggle,
  subscriptionData,
  fetchAllShelters,
}) => {
  return (
    <Modal
      size={"md"}
      centered={true}
      isOpen={isOpen}
      backdrop={"static"}
    >
      <Col md={12} className="text-end m-0 p-0">
        <button className="btn p-0 m-0 text-danger m-1">
          <IoCloseSharp
            onClick={toggle}
            className="text-center cursorPointer"
            size={26}
          />
        </button>
      </Col>

      <ModalBody className="p-0 px-4">
        <div>
          <h3 className="fw-bold text-center">
            {subscriptionData?.modalHeading}
          </h3>
        </div>

        <SubscriptionForm
          subscriptionData={subscriptionData}
          toggle={toggle}
          fetchAllShelters={fetchAllShelters}
        />
      </ModalBody>
    </Modal>
  );
};

export default memo(AddEditubsubscriptionModal);
