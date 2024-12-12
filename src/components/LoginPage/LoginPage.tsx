import React from "react";
import { FormLogin } from "./FormLogin";
import { useGlobalContext } from "../../hooks/globalContext";

export function LoginPage() {
  const { email, password } = useGlobalContext();
  return (
    <div className="h-screen flex justify-center items-center bg-blue-300 gap-20">
      <div>1</div>
      <div>
        <FormLogin />
        {email && password && (
          <div>
            Email ---- {email} <br />
            senha ---- {password}
          </div>
        )}
      </div>
    </div>
  );
}
