import React from "react";
import { LoginForm } from "../LoginRight/Form/FormItens/LoginForm";
import { LoginPageText } from "../LoginLeft/LoginText";
import { LoginTextForm } from "../LoginRight/LoginTextForm";

export function LoginPage() {
  return (
    <>
      <div className="container h-screen w-screen flex justify-center items-center mx-auto gap-4">
        <div>
          <LoginPageText />
        </div>
        <div className="flex flex-col gap-5">
          <LoginTextForm />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
