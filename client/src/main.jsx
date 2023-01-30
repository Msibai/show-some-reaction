import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import EventPage from "./Components/EventPage.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import BookingPage from "./Components/BookingPage.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="eventpage" element={<EventPage />} />
      <Route path="bookingpage" element={<BookingPage />} />
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
