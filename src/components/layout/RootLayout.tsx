import { Outlet } from "react-router";
import Navbar from "./Navbar";

const RootLayout = () => (
  <div className="min-h-dvh">
    <Navbar />
    <Outlet />
  </div>
);

export default RootLayout;
