import React from "react";
import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import InputField from "../../InputField";
import { IoMdLock } from "react-icons/io";
import FillBtn from "../../Buttons/FillBtn";
import { ADMIN_SIGNIN_SCHEMA } from "../../ValidationData/validation";
import { ADMIN_SIGNIN_INITIAL_VALUES } from "../../ValidationData/initialValue";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../Redux/features/User/userApi";
import LoadingScreen from "../../LoadingScreen";
// import { Card, CardBody, Col, Container, Row } from "reactstrap";

const AdminSignInForm = () => {
  const { loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdminSignInSubmit = async (values) => {
    const data = {
      apiEndpoint: "/admin/login",
      requestData: JSON.stringify({ ...values }),
    };

    dispatch(adminLogin(data)).then((res) => {
      if (res.type === "adminLogin/fulfilled") {
        navigate("/admin/dashboard");
      }
    });
  };

  return (
    <>
      {loading === "pending" && <LoadingScreen />}
      <Formik
        initialValues={{ ...ADMIN_SIGNIN_INITIAL_VALUES }}
        validationSchema={ADMIN_SIGNIN_SCHEMA}
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
              label="Contact Email"
              onBlurHandle={handleBlur}
              value={values.email}
              icon={<MdEmail size={20} />}
              onChangeHandle={handleChange}
              placeholder="Enter contact email"
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
            <Link
              to="/forgotPassword"
              className="text-decoration-none fw-bold  "
            >
              <p className="text-end text-green  fs-6 pb-4 ">
                Forgot Password?
              </p>
            </Link>
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

export default AdminSignInForm;
