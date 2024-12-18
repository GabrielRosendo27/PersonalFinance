/* eslint-disable @typescript-eslint/no-explicit-any */

interface InputCreateAccountProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  error?: string;
}
export function InputCreateAccount({ ...props }: InputCreateAccountProps) {
  return (
    <>
      <label>usuario</label>
      <input {...props} />
    </>
  );
}
