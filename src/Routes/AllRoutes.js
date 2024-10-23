import { lazy } from "react";
import adminRoutes from "./AdminRoutes.js";
import shelterRoutes from "./ShelterRoute.js";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../Pages/Auth/ShelterSignIn/index.jsx")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/shelterLogin",
    component: lazy(() => import("../Pages/Auth/ShelterSignIn/index.jsx")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/adminLogIn",
    component: lazy(() => import("../Pages/Auth/AdminSigIn/Index.jsx")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/signUp",
    component: lazy(() => import("../Pages/Auth/SignUp/index.jsx")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/forgotpassword",
    component: lazy(() => import("../Pages/Auth/ForgotPassword")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/otp",
    component: lazy(() => import("../Pages/Auth/Otp")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/newpassword",
    component: lazy(() => import("../Pages/Auth/NewPassword")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/shoppingPage/:userCode",
    component: lazy(() => import("../Pages/Auth/ShoppingPage")),
    isPublic: true,
    exact: true,
  },
]
  .concat(shelterRoutes)
  .concat(adminRoutes);

export default routes;
