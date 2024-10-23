import React from "react";
import { IoMdPerson } from "react-icons/io";
import { Col, Form, Row } from "reactstrap";
import { SHELTER_RATIO_FORM_SCHEMA } from "../../../ValidationData/validation";
import { Formik } from "formik";
import LoadingScreen from "../../../LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../InputField";
import FillBtn from "../../../Buttons/FillBtn";
import { RxSlash } from "react-icons/rx";
import { IoGiftSharp } from "react-icons/io5";
import { updatedShelterData } from "../../../../Redux/features/User/userApi";

const ShelterRatioForm = ({apiEndpoint , methods ,initialValues }) => {
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleUpdateRatio = (values) => {
    const data = {
      apiEndpoint: apiEndpoint,
      requestData: JSON.stringify({ ...values }),
    };
    dispatch(updatedShelterData(data)).then((res) => {
      if (res.type === "updatedShelterData/fulfilled") {
        methods();
      }
    });
  };

  return (
    <Col md={12}>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={initialValues}
        validationSchema={SHELTER_RATIO_FORM_SCHEMA}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            await handleUpdateRatio(values, { resetForm });
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="p-0">
              <Col md={5}>
                <InputField
                  type="number"
                  name="numberOfAdopters"
                  label="Number of Adopters"
                  onBlurHandle={handleBlur}
                  value={values.numberOfAdopters}
                  onChangeHandle={handleChange}
                  className="py-3 ps-5 col-md-6"
                  icon={<IoMdPerson size={20} />}
                  placeholder="Abopters"
                />
                <p className="errorField text-danger">
                  {errors.numberOfAdopters &&
                    touched.numberOfAdopters &&
                    errors.numberOfAdopters}
                </p>
              </Col>
              <Col
                md={2}
                className="mt-3 p-0 d-flex justify-content-center align-items-center"
              >
                <RxSlash size={50} className="text-green" />
              </Col>

              <Col md={5} className="">
                <InputField
                  type="number"
                  name="numberOfPack"
                  label="Number of Packs"
                  value={values.numberOfPack}
                  onBlurHandle={handleBlur}
                  onChangeHandle={handleChange}
                  icon={<IoGiftSharp size={20} />}
                  placeholder="Packs"
                  className="form-control-lg py-3 ps-5 col-md-6"
                />
                <p className="errorField text-danger">
                  {errors.numberOfPack &&
                    touched.numberOfPack &&
                    errors.numberOfPack}
                </p>
              </Col>
            </Row>
            <center>
              <FillBtn
                type="submit"
                text={"SET RATIO"}
                disabled={isSubmitting}
                className="w-50 fw-bold py-2 my-4 "
              />
            </center>
          </Form>
        )}
      </Formik>
    </Col>
  );
};

export default ShelterRatioForm;