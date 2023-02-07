import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext.jsx";
import { ShoppingCartProvider } from "../context/ShoppingCartContext.jsx";

export default function Root() {
  return (
      <GlobalProvider>
        <ShoppingCartProvider>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </ShoppingCartProvider>
      </GlobalProvider>
  );
}
