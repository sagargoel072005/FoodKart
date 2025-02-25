import React, { lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "../components/Header";
import Body from "../components/Body"; 
import Error from "../components/Error";
import AboutUs from "../components/About"
import RestrauntMenu from "../components/RestrautMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import HelpSupport from "../components/help";
import Cart from "../components/Cart";
import UserContext from "../components/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../components/utils/AppStore";
import RestaurantDetail from "../components/RestaurantDetail";

const About = lazy(() => import("../components/About"));

const AppLayout = () => {
const [userName,setUserName] = useState();
useEffect(()=>{
    const data = {
        name: "Sagar Goel" ,
    };
    setUserName(data.name);
},[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
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
                element: (
                    <Suspense fallback={<h2>Loading About...</h2>}>
                      <AboutUs />
                    </Suspense>
                  ),
            },
            {
                path: "/help",
                element: < HelpSupport />,
            },
            {
                path: "/cart",    
                element:< Cart />,
            },
            {
                path: "/restraunts/:resId",
                element: < RestrauntMenu />,
            },
            {
                path: "/restaurant/:id",
                element: < RestaurantDetail  />,
            }
        ],
        errorElement: < Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
