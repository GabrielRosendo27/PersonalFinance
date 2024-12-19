import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  register?: undefined;
  error?: string;
  styles?: {
    container: string;
    input: string;
    span: string;
  };
}

export function Input({ styles, ...props }: InputProps) {
  return (
    <div className={styles?.container}>
      <label>E-mail:</label>
      <input className={styles?.input} />
      <span className={styles?.span}></span>
    </div>
  );
}
