import React from "react";

export function LoginCheckbox() {
  return (
    <div className="mt-2">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="mr-2" id="lembrar" />
        <span className="select-none">Lembrar Senha</span>
      </label>
    </div>
  );
}
