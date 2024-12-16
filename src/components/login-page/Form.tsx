import React from "react";
import { useGlobalContext } from "../../hooks/globalContext";
import { InputEmail } from "./form-inputs/InputEmail";
import { InputPassword } from "./form-inputs/InputPassword";
import { InputCheckbox } from "./form-inputs/InputCheckbox";
import { ButtonLogIn } from "./form-items/ButtonLogIn";
import { ButtonCreateAccount } from "./form-items/ButtonCreateAccount";

export function Form() {
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
        <InputEmail setLocalEmail={setLocalEmail} />
        <InputPassword setLocalPassword={setLocalPassword} />
        <InputCheckbox />
        <div className="flex flex-col">
          <ButtonLogIn handleSubmit={handleSubmit} />
          <ButtonCreateAccount />
        </div>
      </form>
    </>
  );
}
