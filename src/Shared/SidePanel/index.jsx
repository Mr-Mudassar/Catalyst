import "./sidePanel.scss";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import Images from "../../Assets/Images/ImageHelper/index";
const SidePanel = ({
  imageSrc = Images.SIDE_PANEL_IMG,
  title = "Let's create your",
  highlightText = "account",
  description = "Already have an account?",
  linkText = "Login",
  linkHref = "/login",
}) => {
  return (
    <div className="sidePanel d-flex flex-column align-items-center justify-content-center">
      <center>
        <div className="p-5">
          <img src={imageSrc} alt="Side-Panel" className="img-fluid" />
        </div>

        <h1 className="fw-bold fs-1 text-white">
          {title} <br />
          <span className="  text-yellow">{highlightText}</span>
        </h1>

        <p className="text-white fs-6 px-5">
          {description}{" "}
          <Link
            className="  text-yellow text-decoration-none fw-bold"
            to={linkHref}
          >
            {linkText}
          </Link>
        </p>
      </center>
    </div>
  );
};

export default memo(SidePanel);
