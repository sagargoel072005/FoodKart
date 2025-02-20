import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../components/Header";
import Body from "../components/Body"; 
import Error from "../components/Error";
import AboutUs from "../components/About"
import RestrauntMenu from "../components/RestrautMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import HelpSupport from "../components/help";


const Grocery = lazy(() => import("../components/grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: < AppLayout />,
        children: [
            {
                path: "/",
                element: < Body />,
            },
            {
                path: "/about",
                element: < AboutUs />,
            },
            {
                path: "/help",
                element: < HelpSupport />,
            },
            {
                path: "/grocery",    
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restraunts/:resId",
                element: < RestrauntMenu />,
            }
        ],
        errorElement: < Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
