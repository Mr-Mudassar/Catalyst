import React, { memo } from "react";
import { Formik, Form } from "formik";
import MyDropdown from "../../MyDropdown";
import InputField from "../../InputField";
import { MdEmail, MdFolderZip, MdRealEstateAgent } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

import "react-phone-input-2/lib/style.css";
import FillBtn from "../../Buttons/FillBtn";
import PhoneNumberField from "../../PhoneNumberField";
import { useDispatch, useSelector } from "react-redux";
import { NumberOfCats, US_States } from "../../../utils/constants";
import { IoMdPerson, IoIosLock } from "react-icons/io";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { PROFILE_FORM_SCHEMA } from "../../ValidationData/validation";
import { updateShelterProfile } from "../../../Redux/features/User/userApi";
import { PROFILE_FORM_INITIAL_VALUES } from "../../ValidationData/initialValue";
import LoadingScreen from "../../LoadingScreen";

const ProfileForm = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const handleProfileSubmit = async (values) => {
    const data = {
      apiEndpoint: "/shelter/updateShelter",
      requestData: JSON.stringify({ ...values }),
    };

    dispatch(updateShelterProfile(data));
  };

  return (
    <Container>
      <Row
        className="d-flex justify-content-center align-items-center p-0"
        style={{ overflow: "hidden" }}
      >
        {loading === "pending" && <LoadingScreen />}
        <Col md={12}>
          <Formik
            initialValues={{
              ...PROFILE_FORM_INITIAL_VALUES,
              shelterName: user?.shelterName,
              address: user?.address,
              state: user?.state,
              zipCode: user?.zipCode,
              contactName: user?.contactName,
              email: user?.email,
              phoneNumber: user?.phoneNumber,
              catsNumber: user?.catsNumber,
              adoptMonthly: user?.adoptMonthly,
            }}
            validationSchema={PROFILE_FORM_SCHEMA}
            onSubmit={async (values, { resetForm }) => {
              handleProfileSubmit(values, { resetForm });
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
                <Card
                  className="border-0 pb-5"
                  style={{ backgroundColor: "#F7F2E9" }}
                >
                  <CardBody className="p-0">
                    <Row>
                      <Col md={6} className="py-2">
                        <InputField
                          type="text"
                          name="shelterName"
                          className="py-3 px-5"
                          label="Name of Shelter"
                          onBlurHandle={handleBlur}
                          value={values.shelterName}
                          onChangeHandle={handleChange}
                          icon={<IoMdPerson size={20} />}
                          placeholder="Enter name of shelter"
                        />
                        {errors.shelterName && touched.shelterName && (
                          <p className="errorField text-danger">
                            {errors.shelterName}
                          </p>
                        )}
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
                          placeholder="Enter contact name"
                          className="form-control-lg py-3 px-5"
                        />
                        {errors.contactName && touched.contactName && (
                          <p className="errorField text-danger">
                            {errors.contactName}
                          </p>
                        )}
                      </Col>

                      <Col md={6} className="py-2">
                        <InputField
                          type="email"
                          name="email"
                          autoComplete="off"
                          value={values.email}
                          label={
                            <div>
                              <span>Email </span>

                              <span className="font-12">
                                ( Email cannot be changed )
                              </span>
                            </div>
                          }
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                          icon={<MdEmail size={20} />}
                          placeholder="Enter email"
                          className="form-control-lg py-3 px-5"
                          disabled
                        />
                        <p className="errorField text-danger">
                          {errors.email && touched.email && errors.email}
                        </p>
                      </Col>

                      <Col md={6} className="py-2">
                        <PhoneNumberField
                          inputProps={{
                            name: "phoneNumber",
                            required: true,
                            className: "form-control-lg w-100 py-3 px-4",
                          }}
                          value={values.phoneNumber}
                          label="Phone Number"
                          setFieldValue={setFieldValue}
                          onChange={(e) =>
                            setFieldValue("phone", e.target.value)
                          }
                        />
                        {errors.phoneNumber && touched.phoneNumber && (
                          <p className="errorField text-danger">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </Col>

                      <Col md={6} className="py-2">
                        <InputField
                          type="text"
                          name="address"
                          label="Address"
                          value={values.address}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                          icon={<FaAddressCard size={20} />}
                          placeholder="Enter your address"
                          className="form-control-lg py-3 px-5"
                        />
                        {errors.address && touched.address && (
                          <p className="errorField text-danger">
                            {errors.address}
                          </p>
                        )}
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
                          placeholder="Enter your zip code"
                          className="form-control-lg py-3 px-5"
                        />
                        {errors.zipCode && touched.zipCode && (
                          <p className="errorField text-danger">
                            {errors.zipCode}
                          </p>
                        )}
                      </Col>

                      <Col md={6} className="mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0 fw-bold text-green">
                            No. of cats you look after
                          </p>
                        </div>
                        <MyDropdown
                          name="catsNumber"
                          value={values.catsNumber}
                          Options={NumberOfCats}
                          extraOptions={<option value="300+">300+ cats</option>}
                          onBlurHandle={handleBlur}
                          onChangeHandle={handleChange}
                          placeholder="Select number of cats"
                          className="shadow-0 p-2 py-3 border rounded-4"
                        />
                        {errors.catsNumber && touched.catsNumber && (
                          <p className="errorField text-danger">
                            {errors.catsNumber}
                          </p>
                        )}
                      </Col>

                      <Col md={6} className="mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="mb-0 fw-bold text-green">
                            No. of cats you adopt monthly
                          </p>
                        </div>
                        <MyDropdown
                          name="adoptMonthly"
                          Options={NumberOfCats}
                          extraOptions={<option value="300+">300+ cats</option>}
                          onBlurHandle={handleBlur}
                          value={values.adoptMonthly}
                          onChangeHandle={handleChange}
                          placeholder="Select number of cats adopted"
                          className="shadow-0 p-2 py-3 border rounded-4"
                        />
                        {errors.adoptMonthly && touched.adoptMonthly && (
                          <p className="errorField text-danger">
                            {errors.adoptMonthly}
                          </p>
                        )}
                      </Col>
                    </Row>

                    <Col md={8} className="text-center mx-auto my-3">
                      <FillBtn
                        type="submit"
                        text="Submit"
                        disabled={isSubmitting}
                        className="w-50 fw-bold py-2"
                      />
                    </Col>
                  </CardBody>
                </Card>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ProfileForm);
