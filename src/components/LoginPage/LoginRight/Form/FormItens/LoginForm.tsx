import React from "react";
import { useGlobalContext } from "../../../../../hooks/globalContext";
import { LoginEmailInput } from "../FormInputs/LoginEmailInput";
import { LoginPasswordInput } from "../FormInputs/LoginPasswordInput";
import { LoginCheckbox } from "./LoginCheckbox";

export function LoginForm() {
  const [localEmail, setLocalEmail] = React.useState("");
  const [localPassword, setLocalPassword] = React.useState("");
  const { setEmail, setPassword } = useGlobalContext();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail(localEmail);
    setPassword(localPassword);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LoginEmailInput />
        <LoginPasswordInput />
        <LoginCheckbox />

        <button className="bg-green-500 mt-2">Enviar</button>
      </form>
    </>
  );
}
