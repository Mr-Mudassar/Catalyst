import Toaster from "../../Toaster";
import React, { memo, useState } from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, Col, Row } from "reactstrap";
import { reminderEmailsPermission } from "../../../Redux/features/User/userApi";

const EmailPermissionModal = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const [permission, setPermission] = useState(true);
  const { user } = useSelector((state) => state.user);
  const handlePermissionChange = (permission) => {
    const data = permission ? "TRUE" : "FALSE";
    const emailPermissionEndPoint = {
      apiEndpoint: `adopter/adopterEmail?id=${user?.id}&status=${data}`,
    };
    dispatch(reminderEmailsPermission(emailPermissionEndPoint)).then((res) => {
      if (res.type === "reminderEmailsPermission/fulfilled") {
        toggle();
        Toaster.success(res.payload?.message);
      }
    });
  };

  return (
    <Modal size={"md"} centered={true} isOpen={isOpen} backdrop={"static"}>
      {/* <Col md={12} className="text-end m-0 p-0">
        <button className="btn p-0 m-0 text-danger m-1">
          <IoCloseSharp
            onClick={toggle}
            className="text-center cursorPointer"
            size={26}
          />
        </button>
      </Col> */}

      <ModalBody className="p-0 px-4">
        <Col xs={12} className="text-center">
          <FaUserCheck size={150} className="text-success text-center" />
        </Col>
        <div>
          <h4 className="fw-noraml text-center">Permission Required</h4>
        </div>
        <Col md={"12"}>
          <Row className="py-3">
            <Col xs={12}>
              <p>
                Are you okay with sending (up to 2) reminder emails to your
                adopters if they haven't accepted their free litter yet?
              </p>
            </Col>
            <Col xs={12}>
              <div className="mb-3">
                <input
                  className="cursorPointer"
                  type="checkbox"
                  checked={permission}
                  id="permission"
                  onChange={() => setPermission(!permission)}
                />
                <label className="ps-2 cursorPointer" for="permission">
                  Yes, I agree
                </label>
              </div>
            </Col>
            <Col xs={12} className="text-end">
              <button
                className="btn m-0 w-100 text-white py-2 bg-success mb-2"
                onClick={() => handlePermissionChange(permission)}
              >
                Submit
              </button>
            </Col>
          </Row>
        </Col>
      </ModalBody>
    </Modal>
  );
};

export default memo(EmailPermissionModal);
