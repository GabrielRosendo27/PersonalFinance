import React from "react";
import { LoginPage } from "./components/login-page/Index";
import { GlobalProvider, useGlobalContext } from "./hooks/globalContext";

export function App() {
  return (
    <>
      <GlobalProvider>
        <LoginPage />
      </GlobalProvider>
    </>
  );
}
