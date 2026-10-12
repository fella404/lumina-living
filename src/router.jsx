import { createBrowserRouter } from "react-router";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import SoonPage from "./components/shared/SoonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <SoonPage title="About" /> },
      { path: "properties", element: <PropertiesPage /> },
      { path: "properties/:slug", element: <SoonPage title="Property Detail" /> },
      { path: "regions", element: <SoonPage title="Regions" /> },
      { path: "regions/:slug", element: <SoonPage title="Region" /> },
      { path: "blogs", element: <SoonPage title="Blogs" /> },
      { path: "blogs/:slug", element: <SoonPage title="Blog" /> },
      { path: "contact", element: <SoonPage title="Contact" /> },
    ],
  },
]);
