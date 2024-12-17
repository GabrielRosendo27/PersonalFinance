import React from "react";
import { GlobalProvider } from "./hooks/globalContext";
import { AppRoutes } from "./routes/Routes";
export function App() {
  return (
    <>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </>
  );
}
