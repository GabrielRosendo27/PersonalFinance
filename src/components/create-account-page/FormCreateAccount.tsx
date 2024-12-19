import { InputCreateAccount } from "./InputCreateAccount";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  user: z.string().min(3, "Usuário Inválido"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export function FormCreateAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    console.log("Dados do formulário:", data);
  }
  return (
    <form className="flex flex-col">
      <InputCreateAccount />
    </form>
  );
}
