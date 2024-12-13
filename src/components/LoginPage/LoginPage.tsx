import React from "react";
import { LoginForm } from "./LoginForm";

export function LoginPage() {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div>
        <h1 className="text-5xl">Personal Finance</h1>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
