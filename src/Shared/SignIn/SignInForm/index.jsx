import React from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import InputField from "../../InputField";
import { IoMdLock } from "react-icons/io";
import FillBtn from "../../Buttons/FillBtn";
import { SIGNIN_SCHEMA } from "../../ValidationData/validation";
import { SIGNIN_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Redux/features/User/userApi";
import LoadingScreen from "../../LoadingScreen";
import { Col } from "reactstrap";

const ShelterSignInForm = () => {
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdminSignInSubmit = async (values) => {
    const data = {
      apiEndpoint: "shelter/shelterLogin",
      requestData: JSON.stringify({ ...values }),
    };

    dispatch(login(data)).then((res) => {
      if (res.type === "login/fulfilled") {
        if (res.payload.shelter.firstLoginDone) {
          navigate("/newPassword");
        } else {
          navigate("/adopters");
        }
      }
    });
  };

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={{ ...SIGNIN_INITIAL_VALUES }}
        validationSchema={SIGNIN_SCHEMA}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(true);
            await handleAdminSignInSubmit(values);
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
          <Form onSubmit={handleSubmit} className="">
            <InputField
              type="email"
              autoComplete="off"
              name="email"
              label="Email"
              onBlurHandle={handleBlur}
              value={values.email}
              icon={<MdEmail size={20} />}
              onChangeHandle={handleChange}
              placeholder="Enter email"
              className="form-control-lg py-3 px-5"
            />
            <p className="errorField text-danger">
              {errors.email && touched.email && errors.email}
            </p>

            <InputField
              type="password"
              name="password"
              label="Password"
              autoComplete="off"
              value={values.password}
              onBlurHandle={handleBlur}
              onChangeHandle={handleChange}
              icon={<IoMdLock size={20} />}
              placeholder="Enter your password"
              className="form-control-lg py-3 px-5"
            />
            <p className="errorField text-danger">
              {errors.password && touched.password && errors.password}
            </p>
            <p className="text-end text-green  fs-6 mb-4">
              <Link
                to="/forgotPassword"
                className="text-decoration-none fw-bold text-green"
              >
                Forgot Password?
              </Link>
            </p>
            <center>
              <FillBtn
                className="w-50 fw-bold py-2"
                text="SIGN IN"
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

export default ShelterSignInForm;
