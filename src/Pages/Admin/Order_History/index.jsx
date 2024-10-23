import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PageHeading from "../../../Shared/Headings/PageHeading";
import Table from "../../../Shared/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersHistory } from "../../../Redux/features/User/userApi";
import Pagination from "../../../Shared/Pagination";
import {
  ProductNameForTable,
  SubscriptionStatusForTable,
} from "../../../utils/functions";
import { useParams } from "react-router-dom";

const OrderHistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [totalSize, setTotalSize] = useState();
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { recordsPerPage } = useSelector((state) => state.user);
  const [recentShelterOrders, setRecentShelterOrders] = useState([]);

  const handlePagination = (selected) => {
    setCurrentPage(selected.selected + 1);
  };
  // get all shelters api call
  useEffect(() => {
    GetAllOrdersData();
  }, [currentPage, recordsPerPage]);

  const GetAllOrdersData = () => {
    const recentOrdersEndpoint = {
      apiEndpoint: id
        ? `/shelter/shelterHistory/${id}`
        : `/shelter/orderHistory?limit=${recordsPerPage}&page=${currentPage}`,
    };
    dispatch(getOrdersHistory(recentOrdersEndpoint)).then((res) => {
      if (res.type === "getOrdersHistory/fulfilled") {
        console.log(res?.payload?.data?.pagination?.totalCount);
        console.log(res?.payload?.data?.data);
        setTotalSize(res?.payload?.data?.pagination?.totalCount);
        setRecentShelterOrders(
          id ? res?.payload?.data?.data : res?.payload?.data?.subscriptions
        );
      }
    });
  };

  const OrderColumns = [
    { label: "Shelter Order Name", dataKey: "shelterName", align: "left" },
    { label: "Shelter Email", dataKey: "email", align: "left" },
    { label: "State", dataKey: "state", align: "center" },
    { label: "Product", dataKey: "productId", align: "center" },
    { label: "Frequency", dataKey: "frequency", align: "center" },
    { label: "Quantity", dataKey: "quantity", align: "center" },
    { label: "Order Date", dataKey: "lastSentDate", align: "center" },
    { label: "Subscription Status", dataKey: "status", align: "center" },
  ];

  useEffect(() => {
    if (recentShelterOrders && recentShelterOrders.length > 0) {
      let sheltersArray = [];

      recentShelterOrders.forEach((item) => {
        sheltersArray.push({
          shelterName: item?.Shelter?.shelterName,
          email: item?.Shelter?.email,
          state: item?.Shelter?.state,
          productId: item?.productId && ProductNameForTable(item?.productId),
          quantity: item?.quantity,
          frequency: item?.frequency,
          status: item?.status && SubscriptionStatusForTable(item?.status),
          lastSentDate:
            item?.lastSentDate &&
            format(new Date(item?.lastSentDate), "yyyy-MM-dd"),
        });
      });
      setTableData(sheltersArray);
    } else {
      setTableData([]);
    }
  }, [recentShelterOrders]);

  console.log(recentShelterOrders.length);
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
                headingText={"Order History"}
                className={"text-start"}
              />
              <p className="m-0 text-green text-center">
                {`${totalSize ? totalSize : recentShelterOrders.length} Orders`}
              </p>
            </div>
          </Col>
        </Row>

        <hr className="mx-0 mb-4 z-index-1" />

        <Row>
          <Col className="custom-shadow bg-white" md={12}>
            <Table columns={OrderColumns} data={tableData} />
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

export default OrderHistory;
