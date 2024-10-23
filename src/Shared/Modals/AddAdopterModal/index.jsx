import React, { memo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import AddAdopterForm from "./AddAdopterForm";
import { Modal, ModalBody, Col } from "reactstrap";
const AddAdopterModal = ({ isOpen, toggle, fetchAllAdopters }) => {
  return (
    <Modal
      size={"lg"}
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
      <ModalBody className="">
        <div>
          <h3 className="fw-bold p-0 m-0 text-center mb-2">Add Adopter</h3>
        </div>
        <div>
          <AddAdopterForm
            toggleModal={toggle}
            fetchAllAdopters={fetchAllAdopters}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default memo(AddAdopterModal);
