import React, { memo } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Modal, ModalBody, Col } from "reactstrap";
import ShelterRatioForm from "./ShelterRatioForm";

const ShelterRatio = ({ isOpen, toggle, ratioData, fetchAllShelters }) => {
  const methods = () => {
    toggle();
    fetchAllShelters();
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
          <h3 className="fw-bold text-center mb-3">Edit Shelter Ratio</h3>
        </div>
        <ShelterRatioForm
          apiEndpoint={"admin/updateShelterByAdmin/" + ratioData?.id}
          methods={methods}
          ratioData={ratioData}
          initialValues={{
            numberOfAdopters: ratioData?.numberOfAdopters,
            numberOfPack: ratioData?.numberOfPack,
          }}
        />
      </ModalBody>
    </Modal>
  );
};

export default memo(ShelterRatio);
