import React from "react";
import { LoginPage } from "./components/LoginPage/LoginPage";
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
