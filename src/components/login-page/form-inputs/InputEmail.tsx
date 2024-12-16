import React from "react";

interface InputEmailProps {
  setLocalEmail: React.Dispatch<React.SetStateAction<string>>;
}

export function InputEmail({ setLocalEmail }: InputEmailProps) {
  return (
    <div className="relative">
      <label htmlFor="email">E-mail: </label>

      <input name="email" id="email" onChange={({ target }) => setLocalEmail(target.value)} className="peer focus:outline-none border-b border-black w-full" />

      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
    </div>
  );
}
