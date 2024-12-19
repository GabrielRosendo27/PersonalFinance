import { forwardRef, HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  children: React.ReactNode;
  type?: string;
  label: string;
  styles?: {
    container?: string;
    input?: string;
    span?: string;
  };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, styles, children, error, ...props }, ref) => {
  return (
    <>
      <div className={styles?.container}>
        <label htmlFor={label}>{children}</label>
        <input className={styles?.input} id={label} ref={ref} {...props} />
        <span className={styles?.span}></span>
      </div>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </>
  );
});
