import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "@layouts/default/Default.layout";
import Home from "@pages/home/Home";
import { NotFoundPage } from "@pages/404/404";
import SignIn from "@pages/auth/sign-in/SignIn";
import SignUp from "@pages/auth/sign-up/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                element: <Home />
            }
        ]
    },
    {
        path: '/sign-up',
        element: <SignUp />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/sign-in',
        element: <SignIn />,
        errorElement: <NotFoundPage />
    },
]);

export const Router = () => <RouterProvider router={router} />;
