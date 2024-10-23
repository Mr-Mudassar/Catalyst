import * as Yup from "yup";
import { MdAdd } from "react-icons/md";
import Toaster from "../../../Toaster";
import { MdEmail } from "react-icons/md";
import "react-phone-input-2/lib/style.css";
import { IoMdPerson } from "react-icons/io";
import InputField from "../../../InputField";
import React, { memo, useState } from "react";
import FillBtn from "../../../Buttons/FillBtn";
import { IoCloseSharp } from "react-icons/io5";
import LoadingScreen from "../../../LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import MultiEmailHandlerInput from "../MultiEmailHandlerInput";
import { Formik, Field, Form, FieldArray, setIn } from "formik";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { addAdopter } from "../../../../Redux/features/User/userApi";
import {
  INVALID_EMAIL_ADDRESS,
  INVALID_FIRSTNAME,
  INVALID_LASTNAME,
  LONG_FIRSTNAME,
  LONG_LASTNAME,
  REQUIRED_EMAIL_ADDRESS,
  SHORT_FIRSTNAME,
  SIGNUP_SHORT_LASTNAME,
} from "../../../../utils/staticMessages";

const AddAdopterForm = ({ toggleModal, fetchAllAdopters }) => {
  const [indexNumber, setIndexNumber] = useState();
  const [listOfEmails, setListOfEmails] = useState([]);
  const { loading } = useSelector((state) => state.user);
  const [singleEmailInput, setSingleEmailInput] = useState(true);
  const [disabledSubmitBtn, setDisabledSubmitBtn] = useState(false);
  const [multipleEmailInput, setMultipleEmailInput] = useState(false);
  const dispatch = useDispatch();

  const handleAddAdopter = async (values, resetForm) => {
    if (values.adopters.length > 10 || listOfEmails.length > 10) {
      Toaster.error("You can only add upto 10 adopters at once");
    } else if (
      (Array.isArray(values.adopters) &&
        values.adopters.filter((data) => data.email !== "").length > 0) ||
      listOfEmails.filter((email) => email !== "").length > 0
    ) {
      const data = {
        apiEndpoint: "adopter/addAdopter",
        requestData: singleEmailInput
          ? JSON.stringify({
              ...values,
              adopters: values.adopters.filter((data) => data.email !== ""),
            })
          : multipleEmailInput
          ? JSON.stringify({
              adopters: listOfEmails
                .filter((email) => email !== "")
                .map((email) => ({
                  firstName: "",
                  lastName: "",
                  email: email,
                })),
            })
          : "",
      };

      dispatch(addAdopter(data)).then((res) => {
        if (res.type === "addAdopter/fulfilled") {
          setTimeout(() => {
            fetchAllAdopters();
          }, 2000);
          resetForm();
          toggleModal();
        }
      });
    } else {
      Toaster.info("Please add atleast one adopter");
    }
  };

  const ADD_ADOPTER_VALIDATION_SCHEMA = Yup.object().shape({
    adopters: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string()
          .trim("Remove extra spaces")
          .strict(true)
          .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, INVALID_FIRSTNAME) // Only one space between words
          .min(2, SHORT_FIRSTNAME)
          .max(20, LONG_FIRSTNAME),
        lastName: Yup.string()
          .trim("Remove extra spaces")
          .strict(true)
          .matches(/^[A-Za-z]+( [A-Za-z]+)*$/, INVALID_LASTNAME)
          .min(2, SIGNUP_SHORT_LASTNAME)
          .max(20, LONG_LASTNAME),
        email: Yup.string()
          .trim("Remove extra spaces")
          .strict(true)
          .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            INVALID_EMAIL_ADDRESS
          )
          .required(REQUIRED_EMAIL_ADDRESS),
      })
    ),
  });

  const DisabledSubmitBtnFunc = (_emails, values) => {
    if (
      values.adopters.filter((adopter) => adopter.email !== "").length +
        _emails.length ===
      0
    ) {
      return setDisabledSubmitBtn(true);
    } else if (
      values.adopters.filter((adopter) => adopter.email !== "").length +
        _emails.length >
      10
    ) {
      return setDisabledSubmitBtn(true);
    }
    return setDisabledSubmitBtn(false);
  };

  const handleFormSenerioChange = () => {
    if (singleEmailInput) {
      setSingleEmailInput(false);
      setMultipleEmailInput(true);
    } else if (multipleEmailInput) {
      setMultipleEmailInput(false);
      setSingleEmailInput(true);
    }
  };

  const handleValues = (values, push, remove) => {
    if (singleEmailInput) {
      setListOfEmails(values.adopters.map((adopter) => adopter.email));
      values.adopters.forEach((adopter) => {
        remove(adopter);
      });
    } else if (multipleEmailInput) {

      listOfEmails
        .map((email) => email)
        .forEach((email) => {
          push({ email: email, firstName: "", lastName: "" });
        });
      setListOfEmails([]);
    }
  };

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      <Container className="">
        <Row style={{ overflow: "hidden" }}>
          <Col md={12} className="">
            <Formik
              initialValues={{
                adopters: [
                  {
                    firstName: "",
                    lastName: "",
                    email: "",
                  },
                ],
              }}
              validationSchema={ADD_ADOPTER_VALIDATION_SCHEMA}
              onSubmit={async (values, { resetForm }) => {
                handleAddAdopter(values, resetForm);
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <FieldArray name="adopters">
                    {({ insert, remove, push }) => (
                      <Row className="overflow-y-visible overflow-x-visible">
                        <Col xs={12} className="mt-1">
                          {singleEmailInput && (
                            <>
                              <div>
                                {values.adopters.map((user, index) => (
                                  <Card
                                    key={index}
                                    className="border-0 custom-shadow rounded-4 m-0 p-0 mb-3"
                                  >
                                    {setIndexNumber(index)}
                                    <CardBody className="">
                                      <Row key={index} className="">
                                        <Col md={12} className={" text-end"}>
                                          <IoCloseSharp
                                            className={
                                              values.adopters.length > 1
                                                ? ""
                                                : "d-none "
                                            }
                                            style={{ cursor: "pointer" }}
                                            size={24}
                                            color="red"
                                            onClick={() => remove(index)}
                                          />
                                        </Col>
                                        <Col md={6} className="py-2">
                                          <InputField
                                            type="email"
                                            autoComplete="off"
                                            name={`adopters.${index}.email`}
                                            label={
                                              <div>
                                                <span>Email </span>
                                                <span className="font-12">
                                                  ( Required )
                                                </span>
                                              </div>
                                            }
                                            onBlurHandle={handleBlur}
                                            value={values.adopters[index].email}
                                            onChangeHandle={handleChange}
                                            className="py-2 ps-5"
                                            icon={
                                              <MdEmail
                                                size={20}
                                                className="mt-1"
                                              />
                                            }
                                          />
                                          <p className="errorField text-danger">
                                            {errors.adopters?.[index]?.email &&
                                            touched.adopters?.[index]?.email ? (
                                              <div>
                                                {errors.adopters[index].email}
                                              </div>
                                            ) : null}
                                          </p>
                                        </Col>
                                        <Col md={6} className="py-2">
                                          <InputField
                                            type="text"
                                            name={`adopters.${index}.firstName`}
                                            label={
                                              <div>
                                                <span>First Name </span>
                                                <span className="font-12">
                                                  ( Optional )
                                                </span>
                                              </div>
                                            }
                                            onBlurHandle={handleBlur}
                                            value={
                                              values.adopters[index].firstName
                                            }
                                            onChangeHandle={handleChange}
                                            className="py-2 ps-5"
                                            icon={<IoMdPerson size={20} />}
                                          />
                                          <p className="errorField text-danger">
                                            {errors.adopters?.[index]
                                              ?.firstName &&
                                            touched.adopters?.[index]
                                              ?.firstName ? (
                                              <div>
                                                {
                                                  errors.adopters[index]
                                                    .firstName
                                                }
                                              </div>
                                            ) : null}
                                          </p>
                                        </Col>
                                        <Col md={6} className="py-2">
                                          <InputField
                                            type="text"
                                            name={`adopters.${index}.lastName`}
                                            autoComplete="off"
                                            label={
                                              <div>
                                                <span>Last Name </span>
                                                <span className="font-12">
                                                  ( Optional )
                                                </span>
                                              </div>
                                            }
                                            onBlurHandle={handleBlur}
                                            value={
                                              values.adopters[index].lastName
                                            }
                                            onChangeHandle={handleChange}
                                            className="py-2 ps-5"
                                            icon={<IoMdPerson size={20} />}
                                          />
                                          <p className="errorField text-danger">
                                            {errors.adopters?.[index]
                                              ?.lastName &&
                                            touched.adopters?.[index]
                                              ?.lastName ? (
                                              <div>
                                                {
                                                  errors.adopters[index]
                                                    .lastName
                                                }
                                              </div>
                                            ) : null}
                                          </p>
                                        </Col>
                                      </Row>
                                    </CardBody>
                                  </Card>
                                ))}
                              </div>
                              <FillBtn
                                type="button"
                                text={
                                  <span className="d-flex justify-content-center align-items-center">
                                    <MdAdd size={15} className="me-1" />
                                    <p className="p-0 m-0 fw-normal">
                                      Add More
                                    </p>
                                  </span>
                                }
                                className="mt-0 badge  py-2"
                                handleOnClick={() => {
                                  if (values.adopters.length < 10) {
                                    push({
                                      email: "",
                                      lastName: "",
                                      firstName: "",
                                    });
                                  } else {
                                    Toaster.info(
                                      "You can only add up to 10 adopters."
                                    );
                                  }
                                }}
                              />
                            </>
                          )}
                        </Col>

                        <Col xs={12} className="mb-3">
                          {multipleEmailInput && (
                            <MultiEmailHandlerInput
                              listOfEmails={listOfEmails}
                              setListOfEmails={setListOfEmails}
                            />
                          )}
                        </Col>

                        <Col md={6} className="d-flex gap-4">
                          <FillBtn
                            type="button"
                            text={
                              <span className="d-flex justify-content-center align-items-center">
                                <MdAdd size={15} className="me-1 fw-bold" />
                                <p className="p-0 m-0 fw-normal">
                                  {singleEmailInput
                                    ? "Switch to Multiple Emails Form"
                                    : "Switch to Single Email Form"}
                                </p>
                              </span>
                            }
                            className="my-1 badge py-2 py-2"
                            handleOnClick={() => (
                              handleValues(values, push, remove),
                              handleFormSenerioChange()
                            )}
                          />
                        </Col>
                      </Row>
                    )}
                  </FieldArray>

                  <Col md={12} className="text-center py-3">
                    <FillBtn
                      type="submit"
                      text="Submit"
                      disabled={disabledSubmitBtn}
                      className="w-50 py-2 fw-bold "
                    />
                  </Col>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center"></Col>
        </Row>
      </Container>
    </>
  );
};

export default memo(AddAdopterForm);
