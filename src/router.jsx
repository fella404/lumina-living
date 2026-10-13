import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import RegionsPage from "./pages/RegionsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";
import SoonPage from "./components/shared/SoonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <SoonPage title="About" /> },
      { path: "properties", element: <PropertiesPage /> },
      { path: "properties/:slug", element: <PropertyDetailPage /> },
      { path: "regions", element: <RegionsPage /> },
      { path: "regions/:slug", element: <SoonPage title="Region" /> },
      { path: "blogs", element: <BlogsPage /> },
      { path: "blogs/:slug", element: <BlogDetailPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
