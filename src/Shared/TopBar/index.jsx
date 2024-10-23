import "./style.scss";
import InputField from "../InputField";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import React, { useState, memo, useCallback } from "react";
import Images from "../../Assets/Images/ImageHelper/index";
import { customLogout } from "../../Redux/features/User/userSlice";
import {
  Col,
  Nav,
  Navbar,
  NavItem,
  NavbarBrand,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const TopBar = ({ isPublic, isGuest, isPrivate, isAuth }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleLogout = useCallback(() => {
    dispatch(customLogout());
  }, []);

  return (
    <div id="TopBar" className="m-0 p-0 bg-darkgreen">
      <Navbar className="navbar shadow-sm transition">
        <NavbarBrand>
          <div>
            <img src={Images.LOGO_IMG} alt="logo" width={"150px"} />
          </div>
        </NavbarBrand>
        <Nav className="search gap-4">
          <NavItem className="NavItemsss">
            {/* <InputField
              type={"search"}
              name={"Searchbox"}
              icon={<IoIosSearch size={20} className="mb-2 text-warning" />}
              placeholder={"Search...."}
              className={"searchbox px-5 py-2 form-control-lg w-100"}
            /> */}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default memo(TopBar);
