import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminDestinations from "./pages/admin/AdminDestinations";
import AdminExperiences from "./pages/admin/AdminExperiences";
import AdminAbout from "./pages/admin/AdminAbout";
import AdminContact from "./pages/admin/AdminContact";
import AdminTheme from "./pages/admin/AdminTheme";
import AdminHome from "./pages/admin/AdminHome";
import AdminGlobal from "./pages/admin/AdminGlobal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "destinations", Component: Destinations },
      { path: "experiences", Component: Experiences },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "home", Component: AdminHomePage },
      { path: "destinations", Component: AdminDestinations },
      { path: "experiences", Component: AdminExperiences },
      { path: "about", Component: AdminAbout },
      { path: "contact", Component: AdminContact },
      { path: "theme", Component: AdminTheme },
      { path: "home", Component: AdminHome },
      { path: "global", Component: AdminGlobal }
    ],
  }
]);
