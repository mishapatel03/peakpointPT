import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import BasicForm from "./components/basic-form";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <BasicForm />,
        }
    ]);


    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
