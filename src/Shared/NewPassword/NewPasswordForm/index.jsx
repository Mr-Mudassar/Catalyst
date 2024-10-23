import React, { memo } from "react";
import { Formik, Form } from "formik";
import InputField from "../../InputField";
import { IoMdLock } from "react-icons/io";
import FillBtn from "../../Buttons/FillBtn";
import { NEW_PASSWORD_SCHEMA } from "../../ValidationData/validation";
import { NEW_PASSWORD_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPassword } from "../../../Redux/features/User/userApi";
import LoadingScreen from "../../LoadingScreen";
import { Col } from "reactstrap";
const NewPasswordForm = () => {
  const location = useLocation();
  const email = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, email: forgotPasswordEmail } = useSelector(
    (state) => state.user
  );

  const handleNewPasswordSubmit = async (values) => {
    const data = {
      apiEndpoint: "shelter/setPassword",
      requestData: JSON.stringify({
        ...values,
        email: email ?? forgotPasswordEmail,
      }),
    };
    dispatch(setPassword(data)).then((res) => {
      if (res.type === "setPassword/fulfilled") {
        navigate("/shelterLogin");
      }
    });
  };

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={{ ...NEW_PASSWORD_INITIAL_VALUES }}
        validationSchema={NEW_PASSWORD_SCHEMA}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            setSubmitting(true);
            await handleNewPasswordSubmit(values, { resetForm });
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
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputField
              type="password"
              autoComplete="off"
              name="newPassword"
              label="New Password"
              onBlurHandle={handleBlur}
              value={values.newPassword}
              onChangeHandle={handleChange}
              icon={<IoMdLock size={20} />}
              className="form-control-lg py-3 px-5"
              placeholder="Enter your new password"
            />
            <p className="errorField text-danger">
              {errors.newPassword && touched.newPassword && errors.newPassword}
            </p>

            <InputField
              type="password"
              autoComplete="off"
              label="Confirm Password"
              name="confirmPassword"
              onBlurHandle={handleBlur}
              onChangeHandle={handleChange}
              icon={<IoMdLock size={20} />}
              value={values.confirmPassword}
              placeholder="Confirm your password"
              className="form-control-lg py-3 px-5"
            />
            <p className="errorField text-danger">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>

            <center>
              <FillBtn
                className="w-50 fw-bold py-2 mt-4"
                text="SAVE"
                type="submit"
                disabled={isSubmitting}
              />
            </center>

          </Form>
        )}
      </Formik>
    </>
  );
};

export default memo(NewPasswordForm);
