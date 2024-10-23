import React, { useState, memo, useEffect } from "react";
import DataTable from "../../DataTable";
import {
  Container,
  Navbar,
  NavbarBrand,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import AddAdopterModal from "../../Modals/AddAdopterModal";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAbopters,
  getSingleAdopter,
} from "../../../Redux/features/User/userApi";
import {
  GET_ADOPTERS_OF_SHELTER,
  Single_Adopter_User_List,
} from "../../../utils/constants";
import PageHeading from "../../Headings/PageHeading";
import { format } from "date-fns";
import AddopterDetailsModal from "../../Modals/AddopterDetailsModal";
import { GrView } from "react-icons/gr";
import Pagination from "../../Pagination";

const AdopterDataTable = () => {
  const [totalSize, setTotalSize] = useState();
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allAdopters, setAllAdopters] = useState([]);
  const [shelterName, setShelterName] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addVIewPopup, setAddViewPopup] = useState(false);
  const { recordsPerPage } = useSelector((state) => state.user);
  const [singleAdopterDetails, setSingleAdopterDetails] = useState({});

  const handlePagination = (selected) => {
    setCurrentPage(selected.selected + 1);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const id = currentUrl.split("/").pop();
    const data = {
      apiEndpoint:
        GET_ADOPTERS_OF_SHELTER +
        id +
        `?page=${currentPage}&limit=${recordsPerPage}`,
    };
    dispatch(getAllAbopters(data)).then((res) => {
      if (res.type === "getAllAbopters/fulfilled") {
        setTotalSize(res.payload.pagination.totalCount);
        setShelterName(res.payload.shelter);
        setAllAdopters(res.payload.adopters);
      }
    });
  }, [currentPage, recordsPerPage]);

  const handleSingleShelteruser = async (id) => {
    const data = {
      apiEndpoint: Single_Adopter_User_List + id,
    };
    dispatch(getSingleAdopter(data)).then((res) => {
      if (res.type === "getSingleAdopter/fulfilled") {
        setSingleAdopterDetails(res?.payload?.adopter);
      }
    });
  };

  const toggleViewPopup = () => {
    setAddViewPopup(!addVIewPopup);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const columns = [
    { label: "Adopter Name", dataKey: "adopterName", align: "left" },
    { label: "Email", dataKey: "email", align: "center" },
    { label: "Invite Date", dataKey: "createdAt", align: "center" },
    { label: "Redemption Status", dataKey: "redeemStatus", align: "center" },
    { label: "Redemption Date ", dataKey: "redemDate", align: "center" },
    { label: "Action", dataKey: "action", align: "center" },
  ];

  useEffect(() => {
    if (allAdopters && allAdopters.length > 0) {
      let sheltersArray = [];

      allAdopters.forEach((item) => {
        sheltersArray.push({
          adopterName: (
            <span className={"fw-bold"}>
              {item.firstName} {item.lastName}
            </span>
          ),
          email: item.email,
          createdAt: format(new Date(item.createdAt), "yyyy-MM-dd"),
          redeemStatus: <span>{!item.redemStatus ? "Not Yet" : "True"}</span>,
          redemDate:
            item.redemStatus === true
              ? format(new Date(item.redemDate), "yyyy-MM-dd")
              : "Not Redeemed Yet",
          action: (
            <span className="">
              <UncontrolledDropdown>
                <DropdownToggle className="p-0" nav>
                  <div className="bgProperties rounded-circle">•••</div>
                </DropdownToggle>
                <DropdownMenu className="px-0 dropdown-custom-width position-fixed">
                  <DropdownItem
                    onClick={() => {
                      handleSingleShelteruser(item.id);
                      toggleViewPopup();
                    }}
                    className="px-2 dropdown-custom-width-inner "
                  >
                    <GrView className="mb-1 me-2" />
                    View
                  </DropdownItem>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allAdopters]);

  return (
    <Container>
      <Navbar className="d-flex justify-content-between align-items-center m-0 p-0">
        <div className="d-flex justify-content-between align-items-center w-100">
          <NavbarBrand>
            <PageHeading
              // headingText={shelterName.shelterName}\
              headingText={
                shelterName?.shelterName?.length > 20
                  ? shelterName?.shelterName.slice(0, 20) + "..."
                  : shelterName?.shelterName
              }
            />
          </NavbarBrand>
          <p className="m-0 text-green text-center fs-6">
            {totalSize} Adopters
          </p>
        </div>
      </Navbar>
      <hr className="mx-3 mb-4" />
      <div className="custom-shadow bg-white">
        <DataTable columns={columns} data={tableData} />
        {totalSize > 10 && (
          <Pagination
            size={totalSize}
            handlePageChange={handlePagination}
            page={currentPage}
          />
        )}
      </div>
      <AddAdopterModal isOpen={isModalOpen} toggle={toggleModal} />
      <AddopterDetailsModal
        isOpen={addVIewPopup}
        toggle={toggleViewPopup}
        fetchSingleAdopters={singleAdopterDetails}
      />
    </Container>
  );
};

export default memo(AdopterDataTable);
