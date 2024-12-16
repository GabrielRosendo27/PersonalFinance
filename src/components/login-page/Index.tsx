import React from "react";
import { Form } from "./Form";
import { TextPersonalFinance } from "./TextPersonalFinance";
import { TextWelcome } from "./TextWelcome";

export function LoginPage() {
  return (
    <>
      <div className="container h-screen w-screen flex justify-center items-center mx-auto gap-4">
        <div>
          <TextPersonalFinance />
        </div>
        <div className="flex flex-col gap-5">
          <TextWelcome />
          <Form />
        </div>
      </div>
    </>
  );
}
