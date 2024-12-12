import React, { ReactNode } from "react";

interface GlobalContextProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}
const GlobalContext = React.createContext<GlobalContextProps | null>(null);

export function useGlobalContext() {
  const context = React.useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext deve ser usado dentro de um GlobalProvider");
  }
  return context;
}

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return <GlobalContext.Provider value={{ email, setEmail, password, setPassword }}>{children}</GlobalContext.Provider>;
}
