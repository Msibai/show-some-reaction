import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import EventPage from "./EventPage.jsx";
import Footer from "./Footer.jsx";
import ErrorPage from "./ErrorPage.jsx";
import BookingPage from "./BookingPage.jsx";
import Register from "./Register.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} errorElement={<ErrorPage />} />,
    <Route path="EventPage" element={<EventPage />} />,
      <Route path ="BookingPage" element={<BookingPage />}/>,
      <Route path ="Register" element={<Register />}/>

  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
