import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const RootLayout = () => (
  <div className="flex min-h-dvh flex-col">
    <ScrollToTop />
    <Navbar />
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default RootLayout;
