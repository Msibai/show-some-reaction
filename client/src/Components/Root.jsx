import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext.jsx";

export default function Root() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </GlobalProvider>
    </>
  );
}
