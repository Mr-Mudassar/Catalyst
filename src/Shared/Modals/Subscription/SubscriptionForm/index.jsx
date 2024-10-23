import React from "react";
import { IoMdPerson } from "react-icons/io";
import { Col, Form, Row } from "reactstrap";
import { ADD_SUBSCRIPTION_FORM_SCHEMA } from "../../../ValidationData/validation";
import { Formik } from "formik";
import LoadingScreen from "../../../LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import FillBtn from "../../../Buttons/FillBtn";
import MyDropdown from "../../../MyDropdown";
import {
  FrequencyOptions,
  monthsRange,
  productSubscription,
  QuantityOptions,
  weeksRange,
} from "../../../../utils/constants";
import { SUBSCRIPTION_FORM_InitialValues } from "../../../ValidationData/initialValue";
import {
  addShelterSubcription,
  editShelterSubcription,
} from "../../../../Redux/features/User/userApi";

const SubscriptionForm = ({ subscriptionData, toggle, fetchAllShelters }) => {
  const { loading } = useSelector((state) => state.user);
  const Dispatch = useDispatch();

  // **************  ADD subscription API call  ***************
  const handleSubscription = (values, resetForm) => {
    if (subscriptionData.mode === "add") {
      const data = {
        apiEndpoint: "/shelter/addSubscription",
        requestData: JSON.stringify({
          ...values,
          ShelterId: subscriptionData?.id,
        }),
      };
      Dispatch(addShelterSubcription(data)).then((res) => {
        if (res.type === "addShelterSubcription/fulfilled") {
          fetchAllShelters();
          resetForm();
          toggle();
        }
      });
    } else if (subscriptionData?.mode === "edit") {
      // **************  EDIT subscription API call  ***************
      const data = {
        apiEndpoint: `/shelter/updateSubscription/${subscriptionData?.ShelterSubscriptions[0]?.subscriptionId}`,
        requestData: JSON.stringify({
          ...values,
        }),
      };
      Dispatch(editShelterSubcription(data)).then((res) => {
        if (res.type === "editShelterSubcription/fulfilled") {
          fetchAllShelters();
          resetForm();
          toggle();
        }
      });
    }
  };

  return (
    <Col md={12}>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={
          subscriptionData?.mode === "add"
            ? {
                ...SUBSCRIPTION_FORM_InitialValues,
              }
            : {
                ...SUBSCRIPTION_FORM_InitialValues,
                productId: subscriptionData?.ShelterSubscriptions[0]?.productId,
                quantity: subscriptionData?.ShelterSubscriptions[0]?.quantity,
                duration: subscriptionData?.ShelterSubscriptions[0]?.duration,
                frequency: subscriptionData?.ShelterSubscriptions[0]?.frequency,
              }
        }
        validationSchema={ADD_SUBSCRIPTION_FORM_SCHEMA}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            handleSubscription(values, resetForm);
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
          isSubmitting,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit}>
            {/* {console.log(errors)} */}
            <Row className="p-0">
              <Col md={12}>
                <MyDropdown
                  label={"Select Product"}
                  labelClass={"text-green"}
                  name="productId"
                  Options={productSubscription.map((item) => item)}
                  onBlurHandle={handleBlur}
                  value={values?.productId}
                  onChangeHandle={handleChange}
                  placeholder="Select Product Type"
                  className="shadow-0 p-2 py-3 border rounded-4"
                />
                <p className="errorField text-danger">
                  {errors.productId && touched.productId && errors.productId}
                </p>
                <br />
              </Col>
              <Col md={12}>
                <MyDropdown
                  label={"Select Quantity"}
                  labelClass={"text-green"}
                  name="quantity"
                  Options={QuantityOptions.map((item) => item)}
                  onBlurHandle={handleBlur}
                  value={values?.quantity}
                  onChangeHandle={handleChange}
                  placeholder="Select Product Quantity"
                  className="shadow-0 p-2 py-3 border rounded-4"
                />
                <p className="errorField text-danger">
                  {errors.quantity && touched.quantity && errors.quantity}
                </p>
                <br />
              </Col>
              <Col md={12}>
                <MyDropdown
                  label={"Select Frequency"}
                  labelClass={"text-green"}
                  name="frequency"
                  Options={FrequencyOptions.map((item) => item)}
                  onBlurHandle={handleBlur}
                  value={values?.frequency}
                  onChangeHandle={(e) => {
                    handleChange(e);
                    setFieldValue("duration", "");
                  }}
                  placeholder="Select Frequency"
                  className="shadow-0 p-2 py-3 border rounded-4"
                />
                <p className="errorField text-danger">
                  {errors.frequency && touched.frequency && errors.frequency}
                </p>
                <br />
              </Col>

              <Col md={12}>
                <MyDropdown
                  label={"Select Duration"}
                  labelClass={"text-green"}
                  name="duration"
                  Options={
                    values.frequency === "month"
                      ? monthsRange.map((item) => item)
                      : values.frequency === "week"
                      ? weeksRange.map((item) => item)
                      // : values.frequency === "day"
                      // ? [{ label: "Daily", value: "day" }]
                      : []
                  }
                  onBlurHandle={handleBlur}
                  value={values.duration}
                  onChangeHandle={handleChange}
                  placeholder="Select Duration"
                  className="shadow-0 p-2 py-3 border rounded-4"
                  disabled={!values.frequency}
                />
                <p className="errorField text-danger">
                  {errors.duration && touched.duration && errors.duration}
                </p>
              </Col>
            </Row>
            <center>
              <FillBtn
                type="submit"
                text={subscriptionData?.buttonText}
                disabled={isSubmitting}
                className="w-50 fw-bold py-2 my-4"
              />
            </center>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default SubscriptionForm;
