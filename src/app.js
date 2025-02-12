import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../components/header";
import Body from "../components/Body";
import About from "../components/About";
import Contact from "../components/contact";
import Error from "../components/Error";
import RestrauntMenu from "../components/RestrautMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


// App Layout
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
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            { 
                path: "/about",
                element: < About />,
            },
            {
                path: "/contact",
                element: < Contact />,
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
