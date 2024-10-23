import {
  getShelterAdopters,
  getSingleAdopter,
  reminderEmailsPermission,
} from "../../../Redux/features/User/userApi";
import {
  Row,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { format } from "date-fns";
import { GrView } from "react-icons/gr";
import styles from "./style.module.scss";
import { IoIosSearch } from "react-icons/io";
import DataTable from "../../../Shared/DataTable";
import InputField from "../../../Shared/InputField";
import Pagination from "../../../Shared/Pagination";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import PageHeading from "../../../Shared/Headings/PageHeading";
import { Single_Adopter_User_List } from "../../../utils/constants";
import AddAdopterModal from "../../../Shared/Modals/AddAdopterModal";
import AddopterDetailsModal from "../../../Shared/Modals/AddopterDetailsModal";
import EmailPermissionModal from "../../../Shared/Modals/EmailPermissionModal/EmailPermissionModal";

const Shelter = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [totalSize, setTotalSize] = useState();
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = useSelector((state) => state.user);
  const [searchByName, setSearchByName] = useState("");
  const [sheltersData, setSheltersData] = useState([]);
  const [addVIewPopup, setAddViewPopup] = useState(false);
  const [addShelterPopup, setAddShelterPopup] = useState(false);
  const { recordsPerPage } = useSelector((state) => state.user);
  const [singleAdopterDetails, setSingleAdopterDetails] = useState({});

  const handlePagination = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  const addButtonRef = useRef(true);

  useEffect(() => {
    if (addButtonRef.current) {
      addButtonRef.current.focus();
    }
  }, []);

  const handleSingleShelteruser = async (id) => {
    const data = { apiEndpoint: Single_Adopter_User_List + id };
    dispatch(getSingleAdopter(data)).then((res) => {
      if (res.type === "getSingleAdopter/fulfilled") {
        setSingleAdopterDetails(res?.payload?.adopter);
      }
    });
  };

  // +++++++++++++++++++++  Email permission api call  ++++++++++++++++++
  useEffect(() => {
    const emailPermissionEndPoint = {
      apiEndpoint: `adopter/adopterEmail?id=${user?.id}&status=`,
    };

    dispatch(reminderEmailsPermission(emailPermissionEndPoint)).then((res) => {
      if (res.type === "reminderEmailsPermission/fulfilled")
        if (res?.payload?.data?.data?.emailSent === null) {
          setIsOpen(true);
        }
    });
  }, []);

  const ToggleEmailPermissionModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleAddShelterPopup = () => {
    setAddShelterPopup(!addShelterPopup);
  };

  const toggleViewPopup = () => {
    setAddViewPopup(!addVIewPopup);
  };

  const fetchAllAdopters = () => {
    const data = {
      apiEndpoint:
        "/adopter/getAdopter" +
        `?searchQuery=${searchByName}` +
        `&page=${currentPage}` +
        `&limit=${recordsPerPage}`,
    };
    dispatch(getShelterAdopters(data)).then((res) => {
      if (res.type === "getShelterAdopters/fulfilled") {
        setTotalSize(res?.payload?.data?.data?.pagination?.totalCount);
        setSheltersData(res?.payload?.data?.data?.adopters);
      }
    });
  };

  useEffect(() => {
    fetchAllAdopters();
  }, [searchByName, currentPage, recordsPerPage]);

  useEffect(() => {
    if (sheltersData && sheltersData.length > 0) {
      const sheltersArray = sheltersData.map((item) => ({
        adopterName: (
          <span className={"fw-bold"}>
            {item.firstName} {item.lastName}
          </span>
        ),
        email: item.email,
        // phoneNumber: item.phoneNumber,
        createdAt: format(new Date(item.createdAt), "yyyy-MM-dd"),
        redeemStatus: <span>{!item.redemStatus ? "Not Yet" : "True"}</span>,
        redemDate:
          item.redemStatus === true
            ? format(new Date(item.redemDate), "yyyy-MM-dd")
            : "Not Redeemed Yet",
        action: (
          <span>
            <UncontrolledDropdown>
              <DropdownToggle className="p-0" nav>
                <div className="bgProperties rounded-circle border-2 border-danger">
                  •••
                </div>
              </DropdownToggle>
              <DropdownMenu className="px-0 dropdown-custom-width position-fixed">
                <DropdownItem
                  onClick={() => {
                    handleSingleShelteruser(item.id);
                    toggleViewPopup();
                  }}
                  className="px-2 dropdown-custom-width-inner"
                >
                  <GrView className="mb-1 me-2" />
                  View
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </span>
        ),
      }));

      setTableData(sheltersArray);
    } else {
      setTableData([]);
    }
  }, [sheltersData]);

  const columns = [
    { label: "Adopter Name", dataKey: "adopterName", align: "left" },
    { label: "Email", dataKey: "email", align: "left" },
    // { label: "Phone Number", dataKey: "phoneNumber", align: "center" },
    { label: "Invite Date", dataKey: "createdAt", align: "center" },
    { label: "Redemption Status", dataKey: "redeemStatus", align: "center" },
    { label: "Redemption Date", dataKey: "redemDate", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  return (
    <>
      <Container>
        <Row className="px-sm-3 py-2 mb-3 align-items-center">
          <Col xs={12} md={6}>
            <div className="d-flex justify-content-between align-items-center w-100 text-break">
              <PageHeading
                headingText={
                  user?.shelterName?.length > 20
                    ? user.shelterName.slice(0, 20) + "..."
                    : user?.shelterName
                }
                className={"text-start"}
              />
              <p className="m-0 text-green text-center">{totalSize} Adopters</p>
            </div>
          </Col>
          <Col className="p-0 text-end" xs={12} md={6}>
            <button
              type="button"
              onClick={toggleAddShelterPopup}
              className={`btn custom-height px-md-5 fw-bold ${styles.glowButton}`}
              ref={addButtonRef}
            >
              <span className="d-flex">Add Adopter</span>
              {/* <FaPlus size={20} className="d-block d-md-none" /> */}
            </button>
          </Col>
        </Row>
        <hr className="mx-3 mb-4 d-none d-md-block" />
        <div className="main-custom-search-width">
          <span className="mb-3 custom-search-width">
            <InputField
              type={"search"}
              name={"Searchbox"}
              icon={<IoIosSearch size={20} className="mb-2 text-warning" />}
              placeholder={"Search by Email"}
              className={
                "searchbox ps-5 py-2.5 form-control-lg border border-dark rounded-2"
              }
              value={searchByName}
              onChangeHandle={(e) => setSearchByName(e.target.value)}
            />
          </span>
        </div>
        <Row>
          <Col className="custom-shadow bg-white" md={12}>
            <DataTable columns={columns} data={tableData} />
            {totalSize > 10 && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePagination}
                page={currentPage}
              />
            )}
          </Col>
        </Row>

        <AddopterDetailsModal
          isOpen={addVIewPopup}
          toggle={toggleViewPopup}
          fetchSingleAdopters={singleAdopterDetails}
        />

        <AddAdopterModal
          isOpen={addShelterPopup}
          toggle={toggleAddShelterPopup}
          fetchAllAdopters={fetchAllAdopters}
        />

        <EmailPermissionModal
          isOpen={isOpen}
          toggle={ToggleEmailPermissionModal}
        />
      </Container>
    </>
  );
};

export default Shelter;
