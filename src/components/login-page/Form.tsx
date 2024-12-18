import { useGlobalContext } from "../../hooks/globalContext";
import { InputEmail } from "./form-inputs/InputEmail";
import { InputPassword } from "./form-inputs/InputPassword";
import { InputCheckbox } from "./form-inputs/InputCheckbox";
import { Button } from "../buttons/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Input } from "./Input";
const schema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  rememberMe: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export function Form() {
  const { setEmail, setPassword } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log("Dados do formulário:", data);
    setEmail(data.email);
    setPassword(data.password);
  }

  const navigate = useNavigate();
  function handleClick() {
    navigate("/register");
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="email"
          id="email"
          error={errors.email?.message}
          {...register("email")}
          styles={{
            container: "relative",
            input: "peer focus:outline-none border-b border-black w-full",
            span: "absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full",
          }}
        >
          E-mail:
        </Input>
        <Input
          label="password"
          id="password"
          error={errors.password?.message}
          {...register("password")}
          type="password"
          styles={{
            container: "relative",
            input: "peer focus:outline-none border-b border-black w-full",
            span: "absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full",
          }}
        >
          Password:
        </Input>
        <Input
          styles={{
            container: "cursor-pointer select-none relative flex flex-row-reverse items-center gap-1 justify-end",
          }}
          label="checkbox"
          {...register("rememberMe")}
          id="checkbox"
          error={errors.rememberMe?.message}
          type="checkbox"
        >
          Remember Password
        </Input>
        {/* <InputCheckbox register={register} /> */}
        <Button className="bg-green-400 rounded px-4 py-2 text-center hover:bg-green-600 cursor-pointer w-full">Log In</Button>
      </form>

      <Button className="bg-blue-400 rounded px-4 py-2 text-center hover:bg-blue-600 cursor-pointer" handleClick={handleClick}>
        Create Account
      </Button>
    </>
  );
}
