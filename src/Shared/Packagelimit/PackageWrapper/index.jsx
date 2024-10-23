import React, { memo, useEffect, useState } from "react";
import FillBtn from "../../Buttons/FillBtn";
import { Col, Row, Container } from "reactstrap";
// import PackageRangeCards from "../PackageRangeCards";
// import { SHELTER_LIMIT_GET, SHELTER_LIMIT_PUT } from "../../../utils/constants";
import {
  // adminShelterLimitPut,
  // adminShelterLimitGet,
  getGlobalRatio,
} from "../../../Redux/features/User/userApi";
import PageHeading from "../../Headings/PageHeading";
import { useDispatch } from "react-redux";
import ShelterRatioForm from "../../Modals/SheleterRationModal/ShelterRatioForm";
const PackageWrapper = () => {
  const dispatch = useDispatch();
  const [globalRatioData, setGlobalRatioData] = useState();

  useEffect(() => {
    const data = {
      apiEndpoint: "admin/getGlobalRatio",
    };
    dispatch(getGlobalRatio(data)).then((res) => {
      if (res.type === "getGlobalRatio/fulfilled") {
        setGlobalRatioData(
          res?.payload?.data?.globalRatio
        );
      }
    });
  }, []);

  // const [progress2, setProgress2] = useState(0);
  // const UpdateLimit = () => {
  //   const data = {
  //     apiEndpoint: SHELTER_LIMIT_PUT,
  //     requestData: JSON.stringify({ limit: limitData }),
  //   };
  //   dispatch(adminShelterLimitPut(data)).then((res) => {
  //     if (res.type === "adminShelterLimitPut/fulfilled") {
  //       setLimitData(res?.payload?.limit);
  //     }
  //   });
  // };
  // const handleProgressChange1 = (e) => {
  //   setLimitData(e.target.value);
  // };
  // const handleProgressChange2 = (e) => {
  //   setProgress2(e.target.value);
  // };
  // useEffect(() => {
  //   const data = {
  //     apiEndpoint: SHELTER_LIMIT_GET,
  //   };
  //   dispatch(adminShelterLimitGet(data)).then((res) => {
  //     if (res.type === "adminShelterLimitGet/fulfilled") {
  //       setLimitData(res?.payload?.shelters[0]?.limit);
  //     }
  //   });
  // }, []);

  return (
    <Container className="mt-3">
      <Row className="gy-3">
        <Col xl={10} lg={9} md={8} sm={6}>
          <PageHeading headingText="Global Ratio Setting" />
        </Col>
        {/* <Col xl={2} lg={3} md={4} sm={6}>
          <FillBtn
            type=" Submit"
            text="Save Changes"
            className="w-100 py-2 fw-bold"
            // handleOnClick={UpdateLimit}
          />
        </Col> */}
      </Row>
      <hr className="mb-5 mt-4 " />
      {/* <PackageRangeCards
        limitData={limitData}
        handleProgressChange1={handleProgressChange1}
        handleProgressChange2={handleProgressChange2}
        progress2={progress2}
      /> */}
      {globalRatioData && (
        <ShelterRatioForm
          apiEndpoint={"admin/updateGlobalRatio"}
          initialValues={{
            numberOfAdopters: globalRatioData?.numberOfAdopters,
            numberOfPack: globalRatioData?.numberOfPack,
          }}
          methods={() => {}}
        />
      )}
    </Container>
  );
};

export default memo(PackageWrapper);
