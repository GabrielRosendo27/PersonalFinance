/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputEmailProps {
  register: any;
  error?: string;
}

export function InputEmail({ register, error }: InputEmailProps) {
  return (
    <>
      <div className="relative">
        <label htmlFor="email">E-mail: </label>

        <input name="email" id="email" className="peer focus:outline-none border-b border-black w-full" type="email" {...register("email")} />

        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
}
