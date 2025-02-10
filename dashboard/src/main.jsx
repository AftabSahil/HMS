import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});

  return (
    <context.Provider
      value={{ isAuthenticated, setIsAuthenticated, admin, setAdmin }}
    >
      <App />
    </context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);