import { lazy } from "react";

const shelterRoutes = [
  {
    path: "/adopters",
    component: lazy(() => import("../Pages/Shelter/Shelter/Index.jsx")),
    isPublic: false,
    exact: true,
  },
  {
    path: "/shelter/profile",
    component: lazy(() => import("../Pages/Shelter/Profile/index.jsx")),
    isPublic: false,
    exact: true,
  },

];

export default shelterRoutes;
