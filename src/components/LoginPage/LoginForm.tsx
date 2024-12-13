import React from "react";
import { useGlobalContext } from "../../hooks/globalContext";

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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col relative">
        <label htmlFor="email">Digite seu E-mail: </label>
        <input
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={({ target }) => setLocalEmail(target.value)}
          className="peer focus:outline-none border-b border-black w-full"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
      </div>

      <div className="flex flex-col mt-3 relative">
        <label htmlFor="password">Digite sua senha: </label>
        <input
          placeholder="Senha"
          type="password"
          id="password"
          name="password"
          onChange={({ target }) => setLocalPassword(target.value)}
          className="peer focus:outline-none border-b border-black w-full"
        />
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
      </div>
      <div className="mt-2">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="mr-2" id="lembrar" />
          <span className="select-none">Lembrar Senha</span>
        </label>
      </div>
      <button className="bg-green-500 mt-2">Enviar</button>
    </form>
  );
}
