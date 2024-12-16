import React from "react";
export function InputPassword() {
  const [localPassword, setLocalPassword] = React.useState("");
  return (
    <div className="relative">
      <label htmlFor="Password">Password: </label>
      <input
        type="password"
        name="Password"
        id="Password"
        onChange={({ target }) => setLocalPassword(target.value)}
        className="peer focus:outline-none border-b border-black w-full"
      />
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
    </div>
  );
}