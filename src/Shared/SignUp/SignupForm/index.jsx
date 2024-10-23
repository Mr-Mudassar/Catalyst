import React, { memo } from "react";
import { Formik, Form } from "formik";
import { Col, Row } from "reactstrap";
import InputField from "../../InputField";
import { MdEmail, MdFolderZip, MdRealEstateAgent } from "react-icons/md";

import MyDropdown from "../../MyDropdown";
import "react-phone-input-2/lib/style.css";
import FillBtn from "../../Buttons/FillBtn";
import LoadingScreen from "../../LoadingScreen";
import PhoneNumberField from "../../PhoneNumberField";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfCats, US_States } from "../../../utils/constants";
import { signUp } from "../../../Redux/features/User/userApi";
import {
  SIGNUP_SCHEMA,
  ADMIN_SIGNUP_SCHEMA,
} from "../../ValidationData/validation";
import { IoMdPerson, IoMdLock } from "react-icons/io";
import { SIGNUP_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { FaAddressCard } from "react-icons/fa";

const SignUpForm = ({ type, apiEndpoint, buttonText, navigate, disabled=false, passwordValue }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const handleSignUpSubmit = async (values, { resetForm }) => {
    let phoneNumber = "";
    if (type === "adminSignUp") {
      if (values?.phoneNumber) {
        phoneNumber = `+${values.phoneNumber}`;
      } else {
        phoneNumber = values.phoneNumber;
      }
    } else {
      phoneNumber = `+${values.phoneNumber}`;
    }
    const data = {
      apiEndpoint: apiEndpoint,
      requestData: JSON.stringify({
        ...values,
        phoneNumber: phoneNumber,
      }),
    };

    dispatch(signUp(data)).then((res) => {
      if (res.type === "signUp/fulfilled") {
        navigate();
      }
    });
  };

  return (
    <Col md={12}>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={{ ...SIGNUP_INITIAL_VALUES, password: passwordValue }}
        validationSchema={
          type === "adminSignUp" ? ADMIN_SIGNUP_SCHEMA : SIGNUP_SCHEMA
        }
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            await handleSignUpSubmit(values, { resetForm });
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
          setFieldValue,
          handleChange,
          isSubmitting,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="p-0">
              <Col md={12}>
                <InputField
                  type="text"
                  name="shelterName"
                  label="Name of Shelter"
                  onBlurHandle={handleBlur}
                  value={values.shelterName}
                  onChangeHandle={handleChange}
                  className="py-3 ps-5 col-md-6"
                  icon={<IoMdPerson size={20} />}
                  placeholder="Shelter name"
                />
                <p className="errorField text-danger">
                  {errors.shelterName &&
                    touched.shelterName &&
                    errors.shelterName}
                </p>
              </Col>
              <Col md={6} className="py-2">
                <InputField
                  type="address"
                  name="address"
                  label="Address"
                  value={values.address}
                  onBlurHandle={handleBlur}
                  onChangeHandle={handleChange}
                  icon={<FaAddressCard size={20} />}
                  placeholder="Address"
                  className="form-control-lg py-3 ps-5 col-md-6"
                />
                <p className="errorField text-danger">
                  {errors.address && touched.address && errors.address}
                </p>
              </Col>
              <Col md={6} className="py-2">
                <InputField
                  type="text"
                  name="city"
                  label="City"
                  value={values.city}
                  onBlurHandle={handleBlur}
                  onChangeHandle={handleChange}
                  icon={<FaAddressCard size={20} />}
                  placeholder="City"
                  className="form-control-lg py-3 ps-5 col-md-6"
                />
                <p className="errorField text-danger">
                  {errors.city && touched.city && errors.city}
                </p>
              </Col>
              <Col md={6} className="py-2">
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
              <Col md={6} className="py-2">
                <InputField
                  type="text"
                  name="zipCode"
                  label="Zip Code"
                  autoComplete="off"
                  value={values.zipCode}
                  onBlurHandle={handleBlur}
                  onChangeHandle={(e) => {
                    const { value } = e.target;
                    if (/^\d{0,5}$/.test(value)) {
                      handleChange(e);
                    }
                  }}
                  icon={<MdFolderZip size={20} />}
                  placeholder="Zip code"
                  className="form-control-lg py-3 ps-5"
                />
                <p className="errorField text-danger">
                  {errors.zipCode && touched.zipCode && errors.zipCode}
                </p>
              </Col>
              <Col md={6} className="py-2">
                <InputField
                  type="text"
                  name="contactName"
                  autoComplete="off"
                  label="Contact Name"
                  onBlurHandle={handleBlur}
                  value={values.contactName}
                  onChangeHandle={handleChange}
                  icon={<IoMdPerson size={20} />}
                  placeholder="Contact name"
                  className="form-control-lg py-3 ps-5"
                />
                <p className="errorField text-danger">
                  {errors.contactName &&
                    touched.contactName &&
                    errors.contactName}
                </p>
              </Col>
              <Col md={6} className="py-2">
                <InputField
                  type="email"
                  autoComplete="off"
                  name="email"
                  label="Email"
                  onBlurHandle={handleBlur}
                  value={values.email}
                  onChangeHandle={handleChange}
                  icon={<MdEmail size={20} />}
                  placeholder="Email"
                  className="form-control-lg py-3 ps-5"
                />
                <p className="errorField text-danger">
                  {errors.email && touched.email && errors.email}
                </p>
              </Col>
              <Col md={6} className="my-2">
                <PhoneNumberField
                  inputProps={{
                    name: "phoneNumber",
                    required: true,
                    className: "form-control-lg w-100 py-3 ps-4 ",
                  }}
                  value={values.phoneNumber}
                  label={
                    type === "adminSignUp"
                      ? "Phone Number (optional)"
                      : "Phone Number"
                  }
                  setFieldValue={setFieldValue}
                />
                <p className="errorField">
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </p>
              </Col>
              <Col md={6} className="my-2">
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="off"
                  value={values.password}
                  onBlurHandle={handleBlur}
                  onChangeHandle={handleChange}
                  icon={<IoMdLock size={20} />}
                  placeholder="Password"
                  className="form-control-lg py-3 ps-5"
                  disabled={disabled}
                />
                <p className="errorField text-danger">
                  {errors.password && touched.password && errors.password}
                </p>
              </Col>
              <Col md={6} className="mb-2">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-bold text-green">
                    {"No. of Cats You Currently Look After"}
                  </p>
                </div>
                <MyDropdown
                  name="catsNumber"
                  value={values.catsNumber}
                  Options={NumberOfCats}
                  onBlurHandle={handleBlur}
                  onChangeHandle={handleChange}
                  placeholder="Select number of cats"
                  className="shadow-0 p-2 py-3 border rounded-4"
                />
                <p className="errorField text-danger">
                  {errors.catsNumber && touched.catsNumber && errors.catsNumber}
                </p>
              </Col>
              <Col md={6} className="mb-2">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 fw-bold text-green">
                    {"No. of Cats You Adopt Monthly"}
                  </p>
                </div>
                <MyDropdown
                  name="adoptMonthly"
                  Options={NumberOfCats}
                  onBlurHandle={handleBlur}
                  value={values.adoptMonthly}
                  onChangeHandle={handleChange}
                  placeholder="Select number of cats adopted"
                  className="shadow-0 p-2 py-3 border rounded-4"
                />
                <p className="errorField text-danger">
                  {errors.adoptMonthly &&
                    touched.adoptMonthly &&
                    errors.adoptMonthly}
                </p>
              </Col>
            </Row>
            <center>
              <FillBtn
                type="submit"
                text={buttonText}
                disabled={isSubmitting}
                className="w-50 fw-bold py-2 mt-3 mb-4"
              />
            </center>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default memo(SignUpForm);
