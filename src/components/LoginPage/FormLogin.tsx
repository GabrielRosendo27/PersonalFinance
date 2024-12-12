import React from "react";
import { useGlobalContext } from "../../hooks/globalContext";
export function FormLogin() {
  const [localEmail, setLocalEmail] = React.useState("");
  const [localPassword, setLocalPassword] = React.useState("");
  const { setEmail } = useGlobalContext();
  const { setPassword } = useGlobalContext();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail(localEmail);
    setPassword(localPassword);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">email: </label>
          <input name="email" id="email" onChange={({ target }) => setLocalEmail(target.value)} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">senha: </label>
          <input type="password" id="password" name="password" onChange={({ target }) => setLocalPassword(target.value)} />
        </div>
        <button className="bg-green-500">Enviar</button>
      </form>
    </div>
  );
}
