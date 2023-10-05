import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home/></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About/></Layout>,
  },
  {
    path: "/activities",
    element: <Layout><Activities/></Layout>,
  },
  {
    path: "/achievements",
    element: <Layout><Achievement/></Layout>,
  },
  {
    path: "/executives",
    element: <Layout><ExecutiveCommittee/></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact/></Layout>,
  },
  {
    path: "/coderush",
    element: <CodeRushLayout><CodeRush/></CodeRushLayout>,
  },
  {
    path: "/coderush/register",
    element: <CodeRushLayout><CodeRushRegister/></CodeRushLayout>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
