import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Event from "./Components/Event.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import BookingPage from "./Components/EventSelectionPage.jsx";
import SignIn from "./Components/SignIn.jsx";
import SignUp from "./Components/SignUp.jsx";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import PaymentPage from "./components/PaymentPage.jsx";
import ForgotPasswordForm from "./Components/ForgotPasswordForm.jsx";
import EventList from "./Components/EventList.jsx";
import ShoppingCart from "./Components/ShoppingCart.jsx";
import BookingCard from "./Components/BookingCard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="eventlist" element={<EventList />} />
      <Route path=":name" element={<Event />} />
      <Route path="bookingpage" element={<BookingPage />}>
        <Route path=":name" element={<BookingCard />} />
      </Route>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="paymentpage" element={<PaymentPage />} />
      <Route path="forgotpassword" element={<ForgotPasswordForm />} />
      <Route path="cart" element={<ShoppingCart />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
