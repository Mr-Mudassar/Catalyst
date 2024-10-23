import {
  dashboardCard,
  getAllAdopterGraph,
  getAllStateWiseData,
  recentOrders,
  recentShelters,
} from "../../../Redux/features/User/userApi";
import {
  DASHBOARD_CARDS,
  ADMIN_GET_LATEST_SHELTERS,
  ADMIN_DASHBOARD_GRAPH,
  // yearsData,
  US_States,
  columnsForRecent5Shelters,
  columnsForRecent5Orders,
  FilterDuration,
} from "../../../utils/constants";
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
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDays, format } from "date-fns";
import Table from "../../../Shared/DataTable";
import Chart from "../../../Shared/Chart/Index";
import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import MyDropdown from "../../../Shared/MyDropdown";
import { IoDocumentTextOutline } from "react-icons/io5";
import DateRangeModal from "../../../Shared/DateRangeModal";
import Images from "../../../Assets/Images/ImageHelper/index";
import PageHeading from "../../../Shared/Headings/PageHeading";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [duration, setDuration] = useState("monthly");
  const [giveAwayData, setGiveAwayData] = useState({});
  const [stateWiseData, setStateWiseData] = useState([]);
  const [selectOneState, setSelectOneState] = useState("");
  const [ordersTableData, setOrdersTableData] = useState([]);
  const [emailPermission, setEmailPermission] = useState(null);
  const [repeatPurchaseRate, setRepeatPurchaseRate] = useState();
  const [recentSheltersData, setRecentSheltersData] = useState([]);
  const [redemptionGraphData, setRedemptionGraphData] = useState([]);
  const [recentShelterOrders, setRecentShelterOrders] = useState([]);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
    dashboardCards(
      format(new Date(ranges.selection.startDate), "yyyy-MM-dd"),
      format(new Date(ranges.selection.endDate), "yyyy-MM-dd")
    );
  };

  // **************** Clear date range data ****************
  const handleClearClick = () => {
    setDateRange([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    dashboardCards("", "");
  };

  // **************** Dashborad cards api call ****************
  const fetchDashboardCards = () => {
    const data = { apiEndpoint: DASHBOARD_CARDS };
    dispatch(dashboardCard(data)).then((res) => {
      if (res.type === "dashboardCard/fulfilled") {
        setCardsData(res?.payload?.data);
        setGiveAwayData(res?.payload?.GiveAways);
        setRepeatPurchaseRate(res?.payload?.repeatAdopters);
      }
    });
  };

  // **************** Recent 5 Shelters API ****************
  const fetchRecentShelters = () => {
    const recentSheltersEndpoint = { apiEndpoint: ADMIN_GET_LATEST_SHELTERS };
    dispatch(recentShelters(recentSheltersEndpoint)).then((res) => {
      if (res.type === "recentShelters/fulfilled") {
        setRecentSheltersData(res?.payload?.shelters);
      }
    });
  };

  // **************** Recent 5 Orders API ****************
  const fetchRecentOrders = () => {
    const recentOrdersEnpoint = { apiEndpoint: "shelter/latestSubscription" };
    dispatch(recentOrders(recentOrdersEnpoint)).then((res) => {
      if (res.type === "recentOrders/fulfilled") {
        setRecentShelterOrders(res?.payload?.data?.subscriptions);
      }
    });
  };

  // +++++++++++  Dashboard State Wise Graph API Call  +++++++++++
  const fetchStateWiseGraphData = () => {
    const graphApiEndPoint = {
      apiEndpoint: `adopter/getAdopterCountByState?state=${selectOneState}`,
    };
    dispatch(getAllStateWiseData(graphApiEndPoint)).then((res) => {
      if (res.type === "getAllStateWiseData/fulfilled") {
        setStateWiseData(res?.payload);
      }
    });
  };

  // ****************** Calling APIs on page load   ****************
  useEffect(() => {
    fetchRecentOrders();
    fetchDashboardCards();
    fetchRecentShelters();
  }, []);

  // Fetch state-wise graph data when the selected state changes
  useEffect(() => {
    fetchStateWiseGraphData();
  }, [selectOneState]);

  //**************/ dashboard cards api call with filter **************
  const dashboardCards = (startDate, endDate) => {
    const data = {
      apiEndpoint:
        DASHBOARD_CARDS + `?startDate=${startDate}&endDate=${endDate}`,
    };
    dispatch(dashboardCard(data)).then((res) => {
      if (res.type === "dashboardCard/fulfilled") {
        setCardsData(res?.payload?.data);
        setGiveAwayData(res?.payload?.GiveAways);
        setRepeatPurchaseRate(res?.payload?.repeatAdopters);
      }
    });
  };

  // +++++++++++  Dashboard Redemption Graph api call  +++++++++++

  useEffect(() => {
    const graphApiEndPoint = {
      apiEndpoint: ADMIN_DASHBOARD_GRAPH + `?type=${duration}`,
    };

    dispatch(getAllAdopterGraph(graphApiEndPoint)).then((res) => {
      if (res.type === "getAllAdopterGraph/fulfilled")
        setRedemptionGraphData(res?.payload?.adopterData);
    });
  }, [duration]);

  // +++++++++++  Data of Recent 5 Shelters Data table   +++++++++++++++++
  useEffect(() => {
    if (recentSheltersData && recentSheltersData.length > 0) {
      let sheltersArray = [];

      recentSheltersData.forEach((item) => {
        sheltersArray.push({
          shelterName:
            item.shelterName?.length > 20
              ? item.shelterName.slice(0, 20) + "..."
              : item.shelterName,
          email: item.email,
          state: item.state,
          ratio: `${item.numberOfAdopters} /  ${item.numberOfPack}`,
          totalAdopters: item.inviteSent,
          redeem: item.inviteAccepted,
          status: item.status && ShelterStatusForTable(item.status),
          action: (
            <span>
              <UncontrolledDropdown>
                <DropdownToggle
                  className="p-0"
                  nav
                  disabled={item.status === "WAITING" ? true : false}
                >
                  <div className="bgProperties rounded-circle">•••</div>
                </DropdownToggle>
                <DropdownMenu className="px-0 dropdown-custom-width position-fixed">
                  <DropdownItem className="px-2 dropdown-custom-width-inner fs-6">
                    <Link
                      to={`/admin/shelter/adopters/${item.id}`}
                      className="text-dark fs-6 text-decoration-none"
                    >
                      <IoDocumentTextOutline className="me-1 fs-6 mb-1" />
                      Show Details
                    </Link>
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
  }, [recentSheltersData]);

  // +++++++++++  Data of Recent 5 subscriptions Data table  ++++++++++++
  useEffect(() => {
    if (recentShelterOrders && recentShelterOrders.length > 0) {
      let sheltersArray = [];

      recentShelterOrders.forEach((item) => {
        sheltersArray.push({
          shelterName: item?.Shelter?.shelterName,
          email: item?.Shelter?.email,
          state: item?.Shelter?.state,
          product: item?.productId && ProductNameForTable(item?.productId),
          quantity: item?.quantity,
          frequency: item?.frequency,
          status: item?.status && SubscriptionStatusForTable(item?.status),
          lastSentDate:
            item?.lastSentDate &&
            format(new Date(item?.lastSentDate), "yyyy-MM-dd"),
        });
      });

      setOrdersTableData(sheltersArray);
    } else {
      setOrdersTableData([]);
    }
  }, [recentShelterOrders]);

  // ************* Appending Images in dashboard cards  *************
  const CardsImages = [
    Images.PetHome_Image,
    Images.Order_Image,
    Images.Shear_Image,
    Images.Gift_Image,
  ];

  // *********  Appending Cards Images in cardData coming from API ********
  const appendedCardData = cardsData.map((item, index) => {
    return { ...item, cardImage: CardsImages[index] };
  });

  return (
    <Container id="dashboard" className="mt-3">
      <Row className="Title justify-content-between align-items-center gy-4">
        <Col
          sm={6}
          md={8}
          lg={9}
          xl={10}
          className="leftside d-flex flex-column justify-content-center"
        >
          <PageHeading headingText={"Dashboard"} />
          <p className="m-0">Hi! Welcome back to Catalystpet Admin!</p>
        </Col>
        <Col
          sm={6}
          md={4}
          lg={3}
          xl={2}
          className="custom-height rightside d-flex justify-content-end align-items-center"
        >
          <DateRangeModal
            setDateRange={setDateRange}
            dateRange={dateRange}
            handleSelect={handleSelect}
            handleClearClick={handleClearClick}
          />
        </Col>
      </Row>

      <hr className="mx-0" />

      <Row className="cards my-3">
        {appendedCardData.map((items, index) => (
          <Col lg={3} md={6} sm={6} className="cardContent gy-3" key={index}>
            <div className="content bg-white">
              <div className="image">
                <img src={items?.cardImage} alt="" />
              </div>
              <div className="text">
                <center>
                  <p className="m-0">{items.count}</p>
                  <p className="m-0 fs-6 fw-bold">{items.label}</p>
                </center>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="graphChart gy-3">
        <Col lg={9} md={12}>
          <div className="Chart bg-white">
            <div className="d-flex justify-content-between">
              <h2 className="text-darkgreen fs-4 fw-bolder ms-4">
                Redemptions
              </h2>
              <MyDropdown
                name="duration"
                Options={FilterDuration}
                value={duration}
                onChangeHandle={(e) => setDuration(e.target.value)}
                showPlaceholder={false}
                className="shadow-0 border rounded-3"
              />
            </div>
            <Chart mode={"RedemptionsGraph"} graphData={redemptionGraphData} />
          </div>
        </Col>
        <Col lg={3} md={12} className="giveAways bg-white">
          <div className="giveaways-card ">
            <div className="giveawaysHead">
              <div className="giveaways-header">
                <h2>Overall Repeat Count</h2>
              </div>
              <div className="giveaways-body">
                <div className="giveaway-item shelters">
                  <span>{repeatPurchaseRate?.adopterRepeatPercentage}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="giveaways-card ">
            <div className="giveawaysHead">
              <div className="giveaways-header">
                <h2>Giveaways</h2>
              </div>
              <div className="giveaways-body">
                <div className="giveaway-item shelters">
                  <p>Shelters Giveaways</p>
                  <span>{giveAwayData?.TotalSheltersGiveAways}</span>
                </div>
                <div className="giveaway-item adopters">
                  <p>Adopters Giveaways</p>
                  <span>{giveAwayData.TotalAdoptersGiveAways}</span>
                </div>
              </div>
            </div>
            <div className="giveaways-footer pt-3">
              <span className="total">{giveAwayData.Total}</span>
              <span className="label">Total</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="p-0">
          <div className="notification mt-3 py-4 bg-white">
            <div className="heading d-flex justify-content-between align-items-center">
              <h2 className="text-darkgreen fs-4 fw-bolder">
                Recent 5 Shelters
              </h2>
              <Link to={"/admin/shelter"} className="text-black fw-bold">
                <p>See all</p>
              </Link>
            </div>
            <div className=""></div>
            <Table columns={columnsForRecent5Shelters} data={tableData} />
          </div>
        </Col>
        <Col md={12} className="p-0">
          <div className="notification mt-2 mb-3 py-4 mx-2 bg-white">
            <div className="heading d-flex justify-content-between align-items-center">
              <h2 className="text-darkgreen fs-4 fw-bolder">Recent 5 Orders</h2>
              <Link to={"/admin/orderHistory"} className="text-black fw-bold">
                <p>See all</p>
              </Link>
            </div>
            <Table columns={columnsForRecent5Orders} data={ordersTableData} />
          </div>
        </Col>
        <Col md={12} className="graphChart p-0">
          <div className="Chart bg-white">
            <div className="d-flex justify-content-between">
              <h2 className="text-darkgreen fs-4 fw-bolder ms-4">
                State Wise Shelters Data
              </h2>
              <MyDropdown
                name="selectOneState"
                Options={US_States}
                value={selectOneState}
                onChangeHandle={(e) => setSelectOneState(e.target.value)}
                placeholder="All States"
                className="shadow-0 border rounded-3"
              />
            </div>
            <Chart mode={"StateGraph"} graphData={stateWiseData} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
