import React from "react";
interface InputCreateAccountProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}

export function InputCreateAccount() {
  return (
    <>
      <label>Username</label>
      <input />
    </>
  );
}
