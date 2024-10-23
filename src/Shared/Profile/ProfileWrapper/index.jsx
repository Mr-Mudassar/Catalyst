import React, { memo } from "react";
import ProffileForm from "../ProffileForm";
import { Row, Container } from "reactstrap";
import FillBtn from "../../Buttons/FillBtn";
import { Navbar, NavbarBrand } from "reactstrap";
import Images from "../../../Assets/Images/ImageHelper/index";

const ProfileWrapper = () => {
  return (
    <Row className="m-0 p-0 bg-tan">
      <Container>
        <h1>Profile</h1>
        <hr />
        <Navbar className>
          <NavbarBrand>
            <img src={Images.USER_DUMMY_IMG} alt="user" width={"100px"} className="shadow-sm rounded-circle" />
          </NavbarBrand>
          {/* <NavbarBrand>
            <FillBtn type="submit" className="px-3" text="Edit" />
          </NavbarBrand> */}
        </Navbar>
        <div className="m-0 p-0">
          <Row>
            <ProffileForm />
          </Row>
        </div>
      </Container>
    </Row>
  );
};

export default memo(ProfileWrapper);
