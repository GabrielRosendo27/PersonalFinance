import { useGlobalContext } from "../../hooks/globalContext";
import { InputEmail } from "./form-inputs/InputEmail";
import { InputPassword } from "./form-inputs/InputPassword";
import { InputCheckbox } from "./form-inputs/InputCheckbox";
import { ButtonLogIn } from "./form-items/ButtonLogIn";
import { ButtonCreateAccount } from "./form-items/ButtonCreateAccount";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <InputEmail register={register} error={errors.email?.message} />
        <InputPassword register={register} error={errors.password?.message} />
        <InputCheckbox register={register} />
        <div className="flex flex-col">
          <ButtonLogIn />
        </div>
      </form>
      <ButtonCreateAccount />
    </>
  );
}
