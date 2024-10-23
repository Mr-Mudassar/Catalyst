import "./generalLayout.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TopBar from "../../../Shared/TopBar";
import { Col, Container, Row } from "reactstrap";
import Sidebar from "../../../Shared/SideBar/Index";
import { useLocation } from "react-router-dom";


const GeneralLayout = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useSelector((state) => state.user);
  const { pathname } = useLocation();

  const Show = () => {
    setIsOpen(!isOpen);
  };

  const InnerWidth = window.innerWidth
  useEffect(() => {
    InnerWidth <= 768 && setIsOpen(false)
  }, [InnerWidth])

  return (
    <React.Fragment>
      <Container
        fluid
        className={user ? "vh-100" : "vh-100"}
        id="GeneralLayout"
      >
        <Row id="GeneralRow" className="">
          {user && !pathname.includes("/shoppingPage") ? (
            <>
              <Col xs={12} className="p-0">
                <TopBar />
              </Col>
              <Col
                id="sidebar"
                xxl={isOpen ? 2 : 1}
                xl={isOpen ? 2 : 1}
                lg={isOpen ? 2 : 1}
                md={isOpen ? 3 : 1}
                sm={1}
                xs={1}
                className={!isOpen ? "open p-0" : "close p-0"}
              >
                <Sidebar onClick={Show} toggle={isOpen} />
              </Col>
              <Col
                className="p-0"
                xxl={isOpen ? 10 : 11}
                xl={isOpen ? 10 : 11}
                lg={isOpen ? 10 : 11}
                md={isOpen ? 9 : 11}
                sm={11}
                xs={11}
              >
                <Row id="contentRow" className="">
                  <Col xs={12} className="p-0">
                    <div id="content">
                      <>{props.children}</>
                    </div>
                  </Col>
                </Row>
              </Col>
            </>
          ) : (
            <>
              <Col md={12} className="vh-100 p-0">
                <>{props.children}</>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default GeneralLayout;
