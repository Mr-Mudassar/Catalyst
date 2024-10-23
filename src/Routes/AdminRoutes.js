import { lazy } from "react";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../Pages/Admin/Dashboard/Index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/shelter",
    component: lazy(() => import("../Pages/Admin/Shelter/index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/shelter/adopters/:id",
    component: lazy(() => import("../Pages/Admin/Abopters/index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/settings",
    component: lazy(() => import("../Pages/Admin/Package_Limits/index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/pendingShelters",
    component: lazy(() => import("../Pages/Admin/PendingShelters/index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/orderHistory/",
    component: lazy(() => import("../Pages/Admin/Order_History/index")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/admin/orderHistory/:id",
    component: lazy(() => import("../Pages/Admin/Order_History/index")),
    isPublic: false,
    exact: true,
  },
];

export default adminRoutes;
