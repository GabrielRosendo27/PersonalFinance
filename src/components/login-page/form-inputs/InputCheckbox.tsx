interface InputCheckboxProps {
  register: any;
}

export function InputCheckbox({ register }: InputCheckboxProps) {
  return (
    <div className="mt-2">
      <label className="flex items-center cursor-pointer">
        <input type="checkbox" className="mr-2" {...register("rememberMe")} />
        <span className="select-none">Remember Password</span>
      </label>
    </div>
  );
}
