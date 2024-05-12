import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "@layouts/default/Default.layout";
import Home from "@pages/home/Home";
import { NotFoundPage } from "@pages/404/404";
import SignIn from "@pages/auth/sign-in/SignIn";
import SignUp from "@pages/auth/sign-up/SignUp";
import Recover from "@/pages/auth/recover-password/Recover";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <DefaultLayout />
            </PrivateRoute>
        ),
        errorElement: <NotFoundPage />,
        children: [
            {
                element: <Home />,
            },
        ],
    },
    {
        path: "/sign-up",
        element: <SignUp />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/recover-password",
        element: <Recover />,
        errorElement: <NotFoundPage />,
    },
]);

export const Router = () => <RouterProvider router={router} />;
