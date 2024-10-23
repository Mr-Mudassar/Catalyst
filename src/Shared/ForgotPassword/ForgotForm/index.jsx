import React, { memo } from "react";
import { Formik, Form } from "formik";
import { MdEmail } from "react-icons/md";
import InputField from "../../InputField";
import FillBtn from "../../Buttons/FillBtn";
import { FORGOT_PASSWORD_SCHEMA } from "../../ValidationData/validation";
import { FORGOT_PASSWORD_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Toaster from "../../Toaster";
import { forgetPassword } from "../../../Redux/features/User/userApi";
import LoadingScreen from "../../LoadingScreen/index";
import { Col } from "reactstrap";
const ForgotForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);

  const handleForgotSubmit = (values) => {
    const data = {
      apiEndpoint: "/shelter/forgetPasswordShelter",
      requestData: JSON.stringify(values),
    };
    dispatch(forgetPassword(data)).then((res) => {
      if (res.type === "forgetPassword/fulfilled") {
        navigate("/otp", { state: values.email });
      }
    });
  };

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={{ ...FORGOT_PASSWORD_INITIAL_VALUES }}
        validationSchema={FORGOT_PASSWORD_SCHEMA}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          handleForgotSubmit(values, { resetForm });
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputField
              type="email"
              name="email"
              value={values.email}
              autoComplete={"off"}
              label={"Email "}
              onBlurHandle={handleBlur}
              icon={<MdEmail size={20} />}
              onChangeHandle={handleChange}
              placeholder={"Enter email"}
              className={"form-control-lg py-3 px-5"}
            />
            <p className="errorField text-danger">
              {errors.email && touched.email && errors.email}
            </p>
            <center>
              <FillBtn
                text={"SENT"}
                type={"submit"}
                className="w-50 fw-bold py-2 mt-4"
              />
            </center>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default memo(ForgotForm);
