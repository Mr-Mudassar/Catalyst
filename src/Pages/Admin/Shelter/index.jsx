import { getAllShelters } from "../../../Redux/features/User/userApi";
import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import {
  ProductNameForTable,
  ShelterStatusForTable,
  SubscriptionStatusForTable,
} from "../../../utils/functions";
import { FiSend } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { BsPencil } from "react-icons/bs";
import { addDays, format } from "date-fns";
import { TbHandStop } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Table from "../../../Shared/DataTable";
import { useNavigate } from "react-router-dom";
import { MdBlockFlipped } from "react-icons/md";
import { VscDebugContinue } from "react-icons/vsc";
import React, { useEffect, useState } from "react";
import { MdOutlineAddChart } from "react-icons/md";
import { MdOutlineViewInAr } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import Pagination from "../../../Shared/Pagination";
import InputField from "../../../Shared/InputField";
import { useDispatch, useSelector } from "react-redux";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button, Col, Container, Row } from "reactstrap";
import DateRangeModal from "../../../Shared/DateRangeModal";
import {
  GET_ALL_SHELTERS,
  GetAllSheltersColumns,
  // GetAllSheltersColumn,
} from "../../../utils/constants";
import PageHeading from "../../../Shared/Headings/PageHeading";
import AddShelterModal from "../../../Shared/Modals/AddShelterModal";
import SheleterRationModal from "../../../Shared/Modals/SheleterRationModal";
import SubscriptionModal from "../../../Shared/Modals/Subscription/AddEditubsubscriptionModal";
import SubscriptionPermissionModal from "../../../Shared/Modals/Subscription/SubscriptionPermissionModal/SubscriptionPermissionModal";
import AdminShelterDetailsModal from "../../../Shared/Modals/AdminShelterDetailsModal";

const Shelter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // +++++++++++  Date Range picker model code ++++++++++++
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);
  const [ratioData, setRatioData] = useState({
    id: "",
    numberOfAdopters: "",
    numberOfPack: "",
  });
  const [totalSize, setTotalSize] = useState();
  const [tableData, setTableData] = useState([]);
  const [stateData, setStateData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sheltersData, setSheltersData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [filterEndDate, setFilterEndDate] = useState("");
  const [filterStartDate, setFilterStartDate] = useState("");
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [viewOrderHistory, setViewOrderHistory] = useState([]);
  const [shelterDetailsData, setShelterDetailsData] = useState();
  const [addShelterPopup, setAddShelterPopup] = useState(false);
  const [allStateForFilter, setAllStateForFilter] = useState([]);
  const [shelterDetailsPopup, setShelterDetailsPopup] = useState(false);
  const [shelterRatioPopup, setShelterRatioPopup] = useState(false);
  const [subscriptionPopup, setSubscriptionPopup] = useState(false);
  const [subscriptionPermissionModalData, setSubscriptionPermissionModalData] =
    useState("");
  const [subscriptionPermissionModal, setSubscriptionPermissionModal] =
    useState(false);
  const { recordsPerPage } = useSelector((state) => state.user);
  const handlePagination = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  const handleClearClick = () => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    setFilterStartDate("");
    setFilterEndDate("");
  };

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setFilterStartDate(
      format(new Date(ranges.selection.startDate), "yyyy-MM-dd")
    );
    setFilterEndDate(format(new Date(ranges.selection.endDate), "yyyy-MM-dd"));
  };

  // +++++++++++ Filter, state change function  ++++++++++++
  const handleStateChange = (e) => {
    setStateData(e.target.value);
  };

  // +++++++++++  Get all Shelters function API call  ++++++++++++
  const fetchAllShelters = () => {
    getAllSheltersData(filterStartDate, filterEndDate, stateData);
  };

  useEffect(() => {
    fetchAllShelters();
  }, [
    filterStartDate,
    filterEndDate,
    stateData,
    searchByName,
    currentPage,
    recordsPerPage,
  ]);

  const getAllSheltersData = (startDate, endDate, state) => {
    const data = {
      apiEndpoint:
        GET_ALL_SHELTERS +
        `?state=${state}&startDate=${startDate}&endDate=${endDate}&searchQuery=${searchByName}&limit=${recordsPerPage}` +
        `&page=${currentPage}`,
    };
    dispatch(getAllShelters(data)).then((res) => {
      if (res.type === "getAllShelters/fulfilled") {
        setTotalSize(res?.payload?.pagination?.totalCount);
        setSheltersData(res?.payload?.shelters);
      }
    });
  };

  const toggleAddShelterPopup = () => {
    setAddShelterPopup(!addShelterPopup);
  };

  const ToggleShelterRatioPopup = () => {
    setShelterRatioPopup(!shelterRatioPopup);
  };

  const ToggleSubscriptionPopup = () => {
    setSubscriptionPopup(!subscriptionPopup);
  };
  const ToggleSubscriptionPermissionModal = () => {
    setSubscriptionPermissionModal(!subscriptionPermissionModal);
  };

  const ToggleShelterDetailsModal = () => {
    setShelterDetailsPopup(!shelterDetailsPopup);
  };

  // getAllStatesForFilter Api call
  useEffect(() => {
    const data = { apiEndpoint: "/shelter/getAllStates" };
    dispatch(getAllShelters(data)).then((res) => {
      if (res.type === "getAllShelters/fulfilled") {
        setAllStateForFilter(res?.payload?.states);
      }
    });
  }, []);

  const ActionTabFunction = (item) => {
    return [
      {
        title: "Shelter Details",
        icon: <BiMessageAltDetail className="me-1 fs-6 mb-1" />,
        disabled: false,
        function: () => {
          setShelterDetailsData(item);
          ToggleShelterDetailsModal();
        },
      },
      {
        title: "View Order History",
        icon: <MdOutlineViewInAr className="me-1 fs-6 mb-1" />,
        function: () => {
          navigate(`/admin/orderHistory/${item?.id}`);
        },
      },
      {
        title: "Add Subscription",
        icon: <MdOutlineAddChart className="me-1 fs-6 mb-1" />,
        disabled: item?.ShelterSubscriptions.length === 0 ? false : true,
        function: () => {
          setSubscriptionData({
            ...item,
            buttonText: "Add Subscription",
            modalHeading: "Add Subscription",
            mode: "add",
          });
          ToggleSubscriptionPopup();
        },
      },
      {
        title: "Edit Subscription",
        icon: <MdOutlineEditNote className="me-1 fs-6 mb-1" />,
        disabled: item?.ShelterSubscriptions.length === 0 ? true : false,
        function: () => {
          setSubscriptionData({
            ...item,
            buttonText: "Update Subcription",
            modalHeading: "Edit Subscription",
            mode: "edit",
          });
          ToggleSubscriptionPopup();
        },
      },
      {
        title: "Cancel Subscription",
        icon: <TbHandStop className="me-1 fs-6 mb-1" />,
        disabled:
          item?.ShelterSubscriptions.length !== 0 &&
          item?.ShelterSubscriptions[0]?.status !== "cancel"
            ? false
            : true,
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Cancel this subscription?",
            mode: "cancel",
            buttonText: "Cancel",
            icon: (
              <TbHandStop
                className="text-center text-warning cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Resume Subscription",
        icon: <VscDebugContinue className="me-1 fs-6 mb-1" />,
        disabled:
          item?.ShelterSubscriptions.length !== 0 &&
          item?.ShelterSubscriptions[0]?.status !== "active"
            ? false
            : true,
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Resume this subscription?",
            mode: "active",
            buttonText: "Resume",
            icon: (
              <VscDebugContinue
                className="text-center text-green cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Delete Subscription",
        icon: <MdOutlineDeleteOutline className="me-1 fs-6 mb-1" />,
        disabled: item?.ShelterSubscriptions.length !== 0 ? false : true,
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Delete this subscription?",
            mode: "delete",
            buttonText: "Delete",
            icon: (
              <MdOutlineDeleteOutline
                className="text-center text-danger cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Show Adopters",
        icon: <IoDocumentTextOutline className="me-1 fs-6 mb-1" />,
        disabled: item?.status !== "WAITING" ? false : true,
        function: () => {
          navigate(`/admin/shelter/adopters/${item?.id}`);
        },
      },
      {
        title: "Resend Invite",
        icon: <FiSend className="me-1 fs-6 mb-1" />,
        disabled: item?.status === "WAITING" ? false : true,
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText:
              "Are you sure you want to Resend Invite to this shelter?",
            mode: "RESEND",
            buttonText: "Resend",
            icon: (
              <FiSend
                className="text-center text-green cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Edit Ratio",
        icon: <BsPencil className="me-1 fs-6 mb-1" />,
        disabled: false,
        function: () => {
          ToggleShelterRatioPopup();
          setRatioData({
            ...ratioData,
            numberOfAdopters: item?.numberOfAdopters,
            numberOfPack: item?.numberOfPack,
            id: item?.id,
          });
        },
      },
      {
        title: "Block Shelter",
        icon: <MdBlockFlipped className="me-1 fs-6 mb-1" />,
        disabled:
          item?.status === "ACCEPTED" || item?.status === "WAITING"
            ? false
            : true,
        // function: () => handleApprove(item?.id, "BLOCKED"),
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Block this shelter?",
            mode: "BLOCK_SHELTER",
            buttonText: "Block Shelter",
            icon: (
              <MdBlockFlipped
                className="text-center text-warning cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Activate Shelter",
        icon: <FaCheck className="me-1 fs-6 mb-1" />,
        disabled: item?.status === "BLOCKED" ? false : true,
        // function: () => handleApprove(item?.id, "ACCEPTED"),
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Activate this shelter?",
            mode: "ACTIVATE_SHELTER",
            buttonText: "Activate Shelter",
            icon: (
              <FaCheck
                className="text-center text-success cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
      {
        title: "Delete Shelter",
        icon: <MdOutlineDeleteOutline className="me-1 fs-6 mb-1" />,
        disabled: false,
        // function: () => handleDelete(item?.id),
        function: () => {
          setSubscriptionPermissionModalData({
            ...item,
            headingText: "Are you sure you want to Delete this shelter?",
            mode: "DELETE_SHELTER",
            buttonText: "Delete Shelter",
            icon: (
              <MdOutlineDeleteOutline
                className="text-center text-danger cursorPointer"
                size={122}
              />
            ),
          });
          ToggleSubscriptionPermissionModal();
        },
      },
    ];
  };

  // +++++++++++  Data of Data table   ++++++++++++
  useEffect(() => {
    if (sheltersData && sheltersData.length > 0) {
      let sheltersArray = [];

      sheltersData.forEach((item) => {
        sheltersArray.push({
          shelterName:
            item.shelterName?.length > 20
              ? item.shelterName.slice(0, 20) + "..."
              : item.shelterName,
          email: item?.email,
          state: item?.state,
          // ratio: `${item?.numberOfAdopters} /  ${item?.numberOfPack}`,
          totalAdopters: item?.inviteSent,
          repeatPercentage: item?.repeatAdopterPercentage,
          redeem: item?.inviteAccepted,
          // productId:
          //   item?.ShelterSubscriptions.length > 0 &&
          //   ProductNameForTable(item?.ShelterSubscriptions[0].productId),
          // quantity: item?.ShelterSubscriptions[0]?.quantity,
          // frequency:
          //   item?.ShelterSubscriptions[0]?.frequency &&
          //   item?.ShelterSubscriptions[0]?.duration +
          //     " " +
          //     item?.ShelterSubscriptions[0]?.frequency,
          subscriptionStatus:
            item?.ShelterSubscriptions.length > 0 &&
            SubscriptionStatusForTable(item?.ShelterSubscriptions[0]?.status),
          status: item.status && ShelterStatusForTable(item.status),
          action: (
            <span>
              <UncontrolledDropdown className="">
                <DropdownToggle className="p-0" nav>
                  <div className="bgProperties rounded-circle border-2 border-danger">
                    •••
                  </div>
                </DropdownToggle>

                <DropdownMenu className="px-0 dropdown-custom-width position-fixed">
                  {ActionTabFunction(item).map((data, index) => (
                    <DropdownItem
                      key={index}
                      className="px-2 dropdown-custom-width-inner fs-6"
                      onClick={data.function}
                      disabled={data.disabled}
                    >
                      {data.icon}
                      {data.title}
                    </DropdownItem>
                  ))}
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
            lg={6}
            className="custom-height d-flex justify-content-start align-items-center"
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <PageHeading
                headingText={"Shelter Management"}
                className={"text-start"}
              />
              <p className="m-0 text-green text-center">{totalSize} Shelters</p>
            </div>
          </Col>

          <Col className="p-0" md={12} lg={6}>
            <Row className="gx-4 gy-3 d-flex">
              <Col md={6} lg={5} xl={4} className="custom-height">
                <DateRangeModal
                  setDateRange={setDateRange}
                  dateRange={dateRange}
                  handleSelect={handleSelect}
                  handleClearClick={handleClearClick}
                />
              </Col>
              <Col md={6} lg={3} xl={4} className="d-flex custom-height">
                <select
                  className="form-select w-100 border border-dark"
                  onChange={(e) => handleStateChange(e)}
                >
                  <option disabled selected>
                    State
                  </option>
                  {allStateForFilter.length === 0 ? (
                    <option value="" disabled>
                      No state found
                    </option>
                  ) : (
                    <>
                      <option value="">All</option>
                      {allStateForFilter.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </>
                  )}
                </select>
              </Col>

              <Col md={12} lg={4} xl={4} className="d-flex  custom-height">
                <Button
                  onClick={toggleAddShelterPopup}
                  className="bg-green fw-bold w-100"
                >
                  Add Shelter
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="mx-0 mb-4 z-index-1" />
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
            <Table columns={GetAllSheltersColumns} data={tableData} />
            {totalSize > 10 && (
              <Pagination
                size={totalSize}
                handlePageChange={handlePagination}
                page={currentPage}
              />
            )}
          </Col>
        </Row>
        <AddShelterModal
          isOpen={addShelterPopup}
          toggle={toggleAddShelterPopup}
          getAllSheltersData={fetchAllShelters}
        />
        <SheleterRationModal
          isOpen={shelterRatioPopup}
          toggle={ToggleShelterRatioPopup}
          ratioData={ratioData}
          fetchAllShelters={fetchAllShelters}
        />
        <SubscriptionModal
          isOpen={subscriptionPopup}
          toggle={ToggleSubscriptionPopup}
          subscriptionData={subscriptionData}
          fetchAllShelters={fetchAllShelters}
        />
        <SubscriptionPermissionModal
          isOpen={subscriptionPermissionModal}
          toggle={ToggleSubscriptionPermissionModal}
          subscriptionModalData={subscriptionPermissionModalData}
          fetchAllShelters={fetchAllShelters}
        />
        <AdminShelterDetailsModal
          isOpen={shelterDetailsPopup}
          toggle={ToggleShelterDetailsModal}
          data={shelterDetailsData}
        />
      </Container>
    </>
  );
};

export default Shelter;
