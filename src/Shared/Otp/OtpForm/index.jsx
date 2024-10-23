import React, { memo, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./style.module.scss";
import { Col } from 'reactstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import FillBtn from "../../Buttons/FillBtn";
import { useDispatch, useSelector } from "react-redux";
import { resendOTP, verifyOTP } from "../../../Redux/features/User/userApi";
import LoadingScreen from "../../LoadingScreen";
import PageHeading from "../../Headings/PageHeading";

const OtpForm = () => {
  const location = useLocation();
  const email = location.state;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("otp-timer");
    return savedTime ? parseInt(savedTime) : 120;
  });

  const [isOtpSent, setIsOtpSent] = useState(true);

  useEffect(() => {
    if (timeLeft > 0 && isOtpSent) {
      localStorage.setItem("otp-timer", timeLeft);
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timeLeft === 0) {
      localStorage.removeItem("otp-timer");
      setIsOtpSent(false);
    }
  }, [timeLeft, isOtpSent]);

  const handleResendOtp = (values) => {
    const data = {
      apiEndpoint: "/shelter/resendOTP",
      requestData: JSON.stringify(values),
    };
    dispatch(resendOTP(data)).then((res) => {
      if (res.type === "resendOTP/fulfilled") {
        setIsOtpSent(true);
        setTimeLeft(120);
        localStorage.setItem("otp-timer", 120);
      }
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const verifyOtp = () => {
    const data = {
      apiEndpoint: "/shelter/verifyOTP",
      requestData: JSON.stringify({ token: otp, email }),
    };
    dispatch(verifyOTP(data)).then((res) => {
      if (res.type === "verifyOTP/fulfilled") {
        navigate("/newpassword", { state: email });
      }
    });
  };

  return (
    <div className="">
      {loading === "pending" && <LoadingScreen />}
      <center>
      <PageHeading headingText={"Enter OTP Code Here"} />
        <p className="mb-0 fs-4 text-green fw-bold mb-5">
          {/* Please enter the OTP sent to your email */}
        </p>
        <Col className="p-0">
          <OtpInput
            name="token"
            value={otp}
            numInputs={6}
            onChange={setOtp}
            inputStyle={styles.otpInput}
            containerStyle={styles.otpContainer}
            renderInput={(props) => <input {...props} />}
            renderSeparator={<span>&#160;&#160;&#160;</span>}
          />
          {/* <div className="text-center mt-3">
            <span className="clock text-green">{formatTime(timeLeft)}</span>
          </div> */}
        </Col>
        {/* <p className="text-success fs-6 mt-3">Didn't receive an OTP?</p>
        <Link onClick={handleResendOtp}>
          <p className="text-success fs-4 fw-bold text-decoration-underline">
        <Link
          onClick={timeLeft === 0 ? handleResendOtp : null}
          style={{ pointerEvents: timeLeft === 0 ? "auto" : "none", color: timeLeft === 0 ? "green" : "gray" }}
        >
            Resend OTP
          </p>
        </Link> */}
        <FillBtn
           className="w-50 fw-bold py-2 my-5"
          disabled={otp.length < 6}
          text={"DONE"}
          handleOnClick={verifyOtp}
        />
      </center>
    </div>
  );
};

export default memo(OtpForm);
