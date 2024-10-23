import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useLayoutEffect } from "react";

export function PublicRoute({ Component, props }) {
  const { isGuest, user } = useSelector((state) => state.user);

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!pathname.includes("/shoppingPage")) {
      if (user) {
        user?.role === "ADMIN"
          ? navigate("/admin/dashboard")
          : navigate("/adopters");
      }
    }
  }, [dispatch, isGuest, navigate, props.role, user]);

  return <Component {...props} />;
}
