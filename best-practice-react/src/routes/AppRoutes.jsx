import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Parent Layout
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "services", element: <Services /> },
            { path: "contact", element: <Contact /> },
            { path: "product/:id", element: <ProductDetails /> },
        ],
    },
    { path: "*", element: <h1>404 Not Found</h1> }
]);
export default AppRoutes;