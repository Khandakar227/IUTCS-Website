import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Achievement from './pages/Achievement.tsx';
import Activities from './pages/Activities.tsx';
import Layout from './components/Layout.tsx';
import ExecutiveCommittee from './pages/ExecutiveCommittee.tsx';
import './styles/index.css'
import Contact from './pages/Contact.tsx';
import CodeRush from './pages/CodeRush/index.tsx';
import CodeRushLayout from './components/CodeRush/CodeRushLayout.tsx';
import CodeRushRegister from './pages/CodeRush/Register.tsx';
import CodeRushLogin from './pages/CodeRush/Login.tsx';
import { EVENT_URL_PATH } from "./libs/urlPaths.ts";
import EventRegistraton from "./pages/CodeRush/EventRegistraton.tsx";
import NotFound from "./pages/NotFound.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { SERVER_API } from "./assets/api.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><Home /></Layout>,
    },
    {
        path: "/about",
        element: <Layout><About /></Layout>,
    },
    {
        path: "/activities",
        element: <Layout><Activities /></Layout>,
    },
    {
        path: "/achievements",
        element: <Layout><Achievement /></Layout>,
    },
    {
        path: "/executives",
        element: <Layout><ExecutiveCommittee /></Layout>,
    },
    {
        path: "/contact",
        element: <Layout><Contact /></Layout>,
    },
    {
        path: EVENT_URL_PATH.home,
        element: <CodeRushLayout><CodeRush /></CodeRushLayout>,
    },
    {
        path: EVENT_URL_PATH.register,
        element: <CodeRushLayout><CodeRushRegister /></CodeRushLayout>,
    },
    {
        path: EVENT_URL_PATH.login,
        element: <CodeRushLayout><CodeRushLogin /></CodeRushLayout>,
    },
    {
        path: `${EVENT_URL_PATH.home}/event/registration/:eventId`,
        element: <CodeRushLayout><EventRegistraton /></CodeRushLayout>,
    },
    {
        path: "*",
        element: <CodeRushLayout><NotFound /></CodeRushLayout>,
    }
]);
export default function App() {

    useEffect(() => {
        fetch(SERVER_API)
        .then((res)=> res.text());
    })

    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={false}
                limit={5}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
            />
        </>
    )
}
