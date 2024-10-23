import React, { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./nav.scss";
import {
  dashboard,
  userIcon,
  userLogs,
  upload,
  leftArrow,
  rightArrow,
  HelpIcon,
  logOutIcon,
} from "../../Assets/Icon/index.jsx";
import { customLogout } from "../../Redux/features/User/userSlice.js";
import {
  MdOutlinePendingActions,
  MdOutlineManageHistory,
} from "react-icons/md";

import Image from "../../Assets/Images/ImageHelper/index.jsx";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = ({ toggle, onClick }) => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const LinkItems = [
    {
      name: "Dashboard",
      to: "/admin/dashboard",
      icon: dashboard,
    },
    {
      name: "Shelters",
      to: "/admin/shelter",
      icon: userLogs,
    },
    {
      name: "Pending Shelters",
      to: "/admin/pendingShelters",
      icon: <MdOutlinePendingActions className="fs-4" />,
    },
    {
      name: "Order History",
      to: "/admin/orderHistory",
      icon: <MdOutlineManageHistory className="fs-4" />,
    },
    {
      name: "Settings",
      to: "/admin/settings",
      icon: upload,
    },
  ];

  const shelterItems = [
    {
      name: "Adopter Management ",
      to: "/adopters",
      icon: userLogs,
    },
    {
      name: "Profile",
      to: "/shelter/profile",
      icon: userIcon,
    },
  ];

  const handleLogout = useCallback(() => {
    dispatch(customLogout());
  }, []);

  return (
    <>
      <div id="Nav">
        <div className="topSide">
          <div className={"hamBurgerButton"}>
            <span
              className="m-0"
              style={{
                cursor: "pointer",
              }}
              onClick={onClick}
              toggle={toggle}
            >
              {toggle ? leftArrow : rightArrow}
            </span>
          </div>
          <div id="user">
            <div
              className={
                !toggle
                  ? "text-center w-100 py-3 "
                  : "d-flex align-items-center py-3 "
              }
            >
              <img
                src={Image.USER_DUMMY_IMG}
                alt=""
                className="image-fluid p-2"
              />
              {toggle && (
                <div className="userInfo">
                  <p className="m-0 ">
                    {user?.role === "SHELTER" ? "Shelter" : "Admin"}
                  </p>
                  <p className="m-0 text-break me-4">
                    {user?.shelterName?.length > 20
                      ? user.shelterName.slice(0, 20) + "..."
                      : user?.shelterName}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="" style={{ border: "2px solid #DDAD26" }}></div>
          <div className="navItems">
            {user?.role === "SHELTER"
              ? shelterItems.map((item, index) => (
                  <Link
                    key={index}
                    className="link"
                    to={item?.to}
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                    }}
                  >
                    <div className={item.to === pathname ? "isActive" : ""}>
                      <div
                        className={
                          toggle ? "list" : "list justify-content-center"
                        }
                      >
                        <i className={toggle ? "d-flex p-sm-2 pe-0" : "d-flex"}>
                          {item.icon}
                        </i>
                        <div>
                          <main
                            className={
                              toggle
                                ? "ShowOpacity d-block"
                                : "HideOpacity d-none"
                            }
                          >
                            {item.name}
                          </main>
                        </div>
                        <br />
                      </div>
                    </div>
                  </Link>
                ))
              : LinkItems.map((item, index) => (
                  <Link
                    key={index}
                    className="link"
                    to={item?.to}
                    style={{
                      textDecoration: "none",
                      listStyle: "none",
                    }}
                  >
                    <div className={item.to === pathname ? "isActive" : ""}>
                      <div
                        className={
                          toggle ? "list" : "list justify-content-center"
                        }
                      >
                        <i className={toggle ? "d-flex pe-2" : "d-flex"}>
                          {item.icon}
                        </i>
                        <div>
                          <main
                            style={{ textWrap: "nowrap" }}
                            className={
                              toggle
                                ? "ShowOpacity d-block"
                                : "HideOpacity d-none"
                            }
                          >
                            {item.name}
                          </main>
                        </div>
                        <br />
                      </div>
                    </div>
                  </Link>
                ))}

            <Link
              className={"link"}
              style={{
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              <div>
                <div
                  onClick={handleLogout}
                  className={toggle ? "list" : "list justify-content-center"}
                >
                  <i className={toggle ? "d-flex pe-2" : "d-flex pe-0"}>
                    {logOutIcon}
                  </i>
                  <div className={toggle && ""}>
                    <main
                      style={{ textWrap: "nowrap" }}
                      className={
                        toggle ? "ShowOpacity d-block" : "HideOpacity d-none"
                      }
                    >
                      Log Out
                    </main>
                  </div>
                  <br />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
