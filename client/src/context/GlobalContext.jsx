import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {
  // useState for all variables
  const [auth, setAuth] = useState({ loggedIn: false });
  const [showList, setShowList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to run methods upon load
  useEffect(() => {
    void loadTidbits();
    void checkAuth();
  }, []);

  // methods, could be for on load, or just called from elsewhere

  const checkAuth = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/login");
    // console.log('loading auth')
    const result = await response.json();
    // console.log('auth state: ', result)
    setAuth(result);
    setIsLoading(false);
  };
  const register = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("/rest/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    // console.log(result)
    setIsLoading(false);
    void checkAuth();
  };

  const submitLogin = async (email, password) => {
    setIsLoading(true);
    const response = await fetch("/rest/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const result = await response.json();
    console.log(result);
    setIsLoading(false);
    void checkAuth();
  };

  const logout = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/login", {
      method: "delete",
    });
    const result = await response.json();
    // console.log(result)
    setIsLoading(false);
    setAuth({ loggedIn: false });
  };

  const loadTidbits = async () => {
    setIsLoading(true);
    const response = await fetch("/rest/reaction");
    const result = await response.json();
    // console.log(result);
    setShowList(result);
    setIsLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        auth,
        showList,
        isLoading,
        submitLogin,
        logout,
        register,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
