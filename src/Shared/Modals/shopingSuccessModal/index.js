import React, { useState } from "react";
import ShopingSuccess from "../../ShoppingScreen/ShopingSuccess";
import { Modal, ModalBody } from "reactstrap";

const index = ({isOpen, toggle}) => {

  return (
      <Modal
        size={"md"}
        centered={true}
        isOpen={isOpen}
        backdrop={"static"}
      >
        <div className="py-2 px-2">
          <ModalBody>
            <ShopingSuccess toggle={toggle} />
          </ModalBody>
        </div>
      </Modal>
  );
};

export default index;
