import React, { memo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SignupForm from "../../SignUp/SignupForm";

import { Modal, ModalBody, Col } from "reactstrap";
const AddShelterModal = ({ isOpen, toggle, getAllSheltersData }) => {
  const ReCallAllShelters = () => {
    getAllSheltersData();
    toggle();
  };

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

      <ModalBody className="p-0 px-4">
        <div>
          <h3 className="fw-bold text-center">Add Shelter</h3>
        </div>
        <SignupForm
          type="adminSignUp"
          toggle={toggle}
          apiEndpoint={"/admin/addShelter"}
          buttonText={"Add Shelter"}
          getAllSheltersData={getAllSheltersData}
          navigate={ReCallAllShelters}
          disabled={true}
          passwordValue={`P@ssword${Math.floor(1000 + Math.random() * 9000)}`}
        />
      </ModalBody>
    </Modal>
  );
};

export default memo(AddShelterModal);
