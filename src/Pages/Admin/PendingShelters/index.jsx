import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import {
  adminChangeShelterStatus,
  adminGetPendingShelters,
} from "../../../Redux/features/User/userApi";
import Table from "../../../Shared/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import Pagination from "../../../Shared/Pagination";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import { Badge, Col, Container, Row } from "reactstrap";
import PageHeading from "../../../Shared/Headings/PageHeading";

const PendingShelter = () => {
  const { recordsPerPage } = useSelector((state) => state.user);
  const [sheltersData, setSheltersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [totalSize, setTotalSize] = useState();
  const dispatch = useDispatch();

  const handlePagination = (selected) => {
    setCurrentPage(selected.selected + 1);
  };
  // get all shelters api call
  useEffect(() => {
    getAllPendingSheltersData();
  }, [currentPage, recordsPerPage]);

  const getAllPendingSheltersData = () => {
    const data = {
      apiEndpoint: `admin/getAllShelterByStatus?limit=${recordsPerPage}&page=${currentPage}`,
    };
    dispatch(adminGetPendingShelters(data)).then((res) => {
      if (res.type === "adminGetPendingShelters/fulfilled") {
        setTotalSize(res?.payload?.pagination?.totalShelters);
        setSheltersData(res?.payload?.shelters);
      }
    });
  };

  const handleApprove = (id, status) => {
    const data = {
      apiEndpoint: `/admin/changeStatus/?id=${id}&status=${status}`,
    };
    dispatch(adminChangeShelterStatus(data)).then((res) => {
      if (res.type === "adminChangeShelterStatus/fulfilled") {
        getAllPendingSheltersData();
      }
    });
  };

  const columns = [
    { label: "Shelter Name", dataKey: "shelterName", align: "left" },
    { label: "Email", dataKey: "email", align: "left" },
    { label: "State", dataKey: "state", align: "center" },
    { label: "Status", dataKey: "status", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  useEffect(() => {
    if (sheltersData && sheltersData.length > 0) {
      let sheltersArray = [];

      sheltersData.forEach((item) => {
        sheltersArray.push({
          shelterName:
            item.shelterName?.length > 20
              ? item.shelterName.slice(0, 20) + "..."
              : item.shelterName,
          email: item.email,
          state: item.state,
          status:
            item.status === "REJECTED" ? (
              <Badge className="bg-danger" pill>
                Rejected
              </Badge>
            ) : item.status === "PENDING" ? (
              <Badge className="bg-info" pill>
                Pending
              </Badge>
            ) : (
              <Badge className="bg-dark" pill>
                No status
              </Badge>
            ),
          action: (
            <span>
              <UncontrolledDropdown className="">
                <DropdownToggle className="p-0" nav>
                  <div className="bgProperties rounded-circle border-2 border-danger">
                    •••
                  </div>
                </DropdownToggle>
                <DropdownMenu className="px-0 dropdown-custom-width position-fixed">
                  <DropdownItem className="px-2 dropdown-custom-width-inner fs-6">
                    <FillBtn
                      type="submit"
                      text="Approve"
                      icon={<FaCheck className="me-2 fs-5 " />}
                      className="w-100 fw-bold text-start py-2"
                      handleOnClick={() => handleApprove(item.id, "ACCEPTED")}
                    />
                  </DropdownItem>
                  {item.status !== "REJECTED" && (
                    <DropdownItem
                      onClick={() => handleApprove(item.id, "REJECTED")}
                      className="me-3 dropdown-custom-width-inner fs-6 fw-bold text-start"
                    >
                      <IoCloseSharp className="me-1 text-danger fs-4" />
                      Reject
                    </DropdownItem>
                  )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </span>
          ),
        });
      });

      setTableData(sheltersArray);
    } else {
      setTableData([]);
    }
  }, [sheltersData]);

  return (
    <>
      <Container className="mt-3">
        <Row className="mb-4 gy-3">
          <Col
            md={12}
            className="custom-height d-flex justify-content-start align-items-center"
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <PageHeading
                headingText={"Pending Shelters"}
                className={"text-start"}
              />
              <p className="m-0 text-green text-center">{totalSize} Shelters</p>
            </div>
          </Col>
        </Row>

        <hr className="mx-0 mb-4 z-index-1" />

        <Row>
          <Col className="custom-shadow bg-white" md={12}>
            <Table columns={columns} data={tableData} />
            {totalSize > 10 && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePagination}
                page={currentPage}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PendingShelter;
