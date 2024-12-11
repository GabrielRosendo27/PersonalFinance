import React from "react";
export function FormLogin() {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <label htmlFor="email">email: </label>
          <input name="email" id="email" />
        </div>
        <div className="flex flex-col">
          <label>senha: </label>
          <input />
        </div>
        <button className="bg-green-500">Enviar</button>
      </form>
    </div>
  );
}
