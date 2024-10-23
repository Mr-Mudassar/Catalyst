import React, { memo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import AdopterDetailsCard from "./AdopterDetailsCard";
import {
  Modal,
  ModalBody,
  Col,
  Row,
  Container,
} from "reactstrap";
const AddopterDetailsModal = ({ isOpen, toggle, fetchSingleAdopters }) => {
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

      <ModalBody>
        <h3 className="fw-bold ">
          {fetchSingleAdopters?.firstName + " " + fetchSingleAdopters?.lastName}
        </h3>
        <AdopterDetailsCard
          toggle={toggle}
          fetchSingleAdopters={fetchSingleAdopters}
        />
      </ModalBody>
    </Modal>
  );
};

export default memo(AddopterDetailsModal);
