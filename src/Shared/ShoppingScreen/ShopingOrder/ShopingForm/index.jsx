import React, { useEffect, useMemo, useState } from "react";
import { Row, Col } from "reactstrap";
import { Formik, Form } from "formik";
import { MdEmail, MdFolderZip } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import InputField from "../../../InputField";
import { FaAddressCard, FaCity } from "react-icons/fa";
import FillBtn from "../../../Buttons/FillBtn";
import { GiHazmatSuit } from "react-icons/gi";

import PhoneNumberField from "../../../PhoneNumberField";
import { SHOPING_ORDER_FORM_SCHEMA } from "../../../ValidationData/validation";
import { SHOPING_ORDER_FORM_INITIAL_VALUES } from "../../../ValidationData/initialValue";
import { useDispatch } from "react-redux";
import {
  getAdopterDetailsFromLink,
  Order,
} from "../../../../Redux/features/User/userApi";
import ShoppingSuccessModal from "../../../Modals/shopingSuccessModal/index";
import { US_States } from "../../../../utils/constants";
import MyDropdown from "../../../MyDropdown";

const Index = ({ selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUrl = window.location.pathname;
  const code = currentUrl.split("/").pop();
  const [preFilledData, setPreFilledData] = useState(null);

  useEffect(() => {
    const data = {
      apiEndpoint: "/adopter/getAllAdopterByUserCode?userCode=" + code,
    };
    dispatch(getAdopterDetailsFromLink(data)).then((res) => {
      if (res.type === "getAdopterDetailsFromLink/fulfilled") {
        setPreFilledData(res.payload);
      }
    });
  }, []);

  const SetData = () => {
    if (preFilledData) {
      return {
        ...SHOPING_ORDER_FORM_INITIAL_VALUES,
        firstName: preFilledData?.firstName,
        lastName: preFilledData?.lastName,
        email: preFilledData?.email,
      };
    }
  };

  const handleShopingOrderSubmit = async (values, { resetForm }) => {
    const AddedValues = {
      ...values,
      userCode: code,
      variantId: selectedOption,
      country: "United States",
    };
    const data = {
      apiEndpoint: "/adopter/adopterOrder",
      requestData: JSON.stringify({ ...AddedValues }),
    };

    dispatch(Order(data)).then((res) => {
      if (res.type === "Order/fulfilled") {
        setIsOpen(true);
        resetForm();
      }
    });
  };



  return (
    <Row
      className="d-flex justify-content-center align-items-center "
      style={{ overflow: "hidden" }}
    >
      <Col xs={12}>
        {preFilledData && (
          <Formik
            initialValues={SetData()}
            validationSchema={SHOPING_ORDER_FORM_SCHEMA}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                setSubmitting(true);
                await handleShopingOrderSubmit(values, { resetForm });
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              setFieldValue,
              isSubmitting,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="text"
                      name="firstName"
                      label="First Name"
                      onBlurHandle={handleBlur}
                      value={values.firstName}
                      onChangeHandle={handleChange}
                      className="form-control-lg py-3 px-5"
                      icon={<IoMdPerson size={20} />}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="errorField ">{errors.firstName}</p>
                    )}
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="text"
                      name="lastName"
                      label="Last Name"
                      autoComplete="off"
                      value={values.lastName}
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      icon={<IoMdPerson size={20} />}
                      placeholder="Enter your last name"
                      className="form-control-lg py-3 px-5"
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="errorField ">{errors.lastName}</p>
                    )}
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="email"
                      name="email"
                      disabled
                      label={
                        <div>
                          <span>Email </span>

                          <span className="font-12">
                            ( Email cannot be changed )
                          </span>
                        </div>
                      }
                      autoComplete="off"
                      value={values.email}
                      onBlurHandle={handleBlur}
                      icon={<MdEmail size={20} />}
                      onChangeHandle={handleChange}
                      placeholder="Enter your email"
                      className="form-control-lg py-3 px-5"
                    />
                    {errors.email && touched.email && (
                      <p className="errorField ">{errors.email}</p>
                    )}
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <PhoneNumberField
                      inputProps={{
                        name: "phoneNumber",
                        className: "form-control-lg py-3 px-5 w-100",
                      }}
                      label={
                        <div>
                          <span>Phone Number </span>

                          <span className="font-12">( Optional )</span>
                        </div>
                      }
                      value={values.phoneNumber}
                      setFieldValue={setFieldValue}
                      onChange={(e) =>
                        setFieldValue("phoneNumber", e.target.value)
                      }
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <p className="errorField ">{errors.phoneNumber}</p>
                    )}
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="text"
                      name="address"
                      label={"Address"}
                      value={values.address}
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      placeholder="Enter your address"
                      className="form-control-lg py-3 px-5"
                      icon={<FaAddressCard size={20} />}
                    />
                    {errors.address && touched.address && (
                      <p className="errorField ">{errors.address}</p>
                    )}
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="text"
                      name="city"
                      label="City"
                      autoComplete="off"
                      value={values.city}
                      onBlurHandle={handleBlur}
                      icon={<FaCity size={20} />}
                      placeholder="Enter your city"
                      onChangeHandle={handleChange}
                      className="form-control-lg py-3 px-5 "
                    />
                    {errors.city && touched.city && (
                      <p className="errorField ">{errors.city}</p>
                    )}
                  </Col>

                  {/* <Col xs={12} md={6} className="py-2">
                <InputField
                  type="text"
                  autoComplete="on"
                  name="country"
                  label="Country/Regoin"
                  icon={<FaGlobe size={20} />}
                  onBlurHandle={handleBlur}
                  value={values.country}
                  onChangeHandle={handleChange}
                  className="form-control-lg py-3 px-5 "
                  placeholder="Enter your country/region"
                />
                {errors.country && touched.country && (
                  <p className="errorField ">{errors.country}</p>
                )}
              </Col> */}

                  <Col xs={12} md={6} className="py-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 fw-bold text-green">{"State"}</p>
                    </div>
                    <MyDropdown
                      name="state"
                      Options={US_States.map((item) => item)}
                      onBlurHandle={handleBlur}
                      value={values.state}
                      onChangeHandle={handleChange}
                      placeholder="Select your state"
                      className="shadow-0 p-2 py-3 border rounded-4"
                    />
                    <p className="errorField text-danger">
                      {errors.state && touched.state && errors.state}
                    </p>
                  </Col>

                  <Col xs={12} md={6} className="py-2">
                    <InputField
                      type="text"
                      name="zipCode"
                      label={"Zip Code"}
                      autoComplete="off"
                      value={values.zipCode}
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      icon={<MdFolderZip size={20} />}
                      placeholder="Enter your zip code"
                      className="form-control-lg py-3 px-5"
                    />
                    {errors.zipCode && touched.zipCode && (
                      <p className="errorField ">{errors.zipCode}</p>
                    )}
                  </Col>

                  <Col xs={12} className="py-2">
                    <InputField
                      type="text"
                      name="apartment"
                      label={
                        <div>
                          <span>Apartment No. / Floor No. / Suit No. </span>

                          <span className="font-12">( Optional )</span>
                        </div>
                      }
                      icon={<GiHazmatSuit size={20} />}
                      value={values.apartment}
                      onBlurHandle={handleBlur}
                      onChangeHandle={handleChange}
                      className="form-control-lg py-3 px-5"
                      placeholder="Enter your Apartment No. / Floor No. / Suit No."
                    />
                    {errors.apartment && touched.apartment && (
                      <p className="errorField ">{errors.apartment}</p>
                    )}
                  </Col>
                </Row>

                <Col className="text-center mx-auto my-3">
                  <FillBtn
                    type="submit"
                    text="Redeem"
                    disabled={isSubmitting}
                    className="w-50 fw-bold py-2"
                  />
                </Col>
              </Form>
            )}
          </Formik>
        )}
      </Col>
      <ShoppingSuccessModal isOpen={isOpen} />
    </Row>
  );
};

export default Index;
