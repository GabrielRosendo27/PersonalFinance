import { Form } from "./Form";
import { TextPersonalFinance } from "./TextPersonalFinance";
import { TextWelcome } from "./TextWelcome";

export function LoginPage() {
  return (
    <>
      <div className="container h-screen w-screen flex justify-around items-center mx-auto ">
        <div className="max-sm:hidden">
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
