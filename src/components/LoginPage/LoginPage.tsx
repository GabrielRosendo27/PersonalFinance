import React from "react";
import { FormLogin } from "./FormLogin";

export function LoginPage() {
  return (
    <div className="h-screen flex flex-row justify-center items-center bg-blue-200 gap-20">
      <div>1</div>
      <div>
        <FormLogin />
      </div>
    </div>
  );
}
