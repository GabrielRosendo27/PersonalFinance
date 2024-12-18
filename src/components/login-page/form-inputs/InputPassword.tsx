interface InputPasswordProps {
  register: any;
  error?: string;
}

export function InputPassword({ register, error }: InputPasswordProps) {
  return (
    <>
      <div className="relative">
        <label htmlFor="password">Password: </label>

        <input type="password" name="password" id="password" className="peer focus:outline-none border-b border-black w-full" {...register("password")} />

        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 ease-in-out peer-focus:w-full"></span>
      </div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </>
  );
}
