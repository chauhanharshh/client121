import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomizeTrip from "./pages/CustomizeTrip";

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
      { path: "customize", Component: CustomizeTrip },
    ],
  },
]);
