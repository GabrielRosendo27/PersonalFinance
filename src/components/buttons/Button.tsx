import { NavigateFunction } from "react-router-dom";
interface ButtonProps {
  className: string;
  navigate?: NavigateFunction;
  handleClick?: () => void;
  children: React.ReactNode;
}

export function Button({ children, className, handleClick }: ButtonProps) {
  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
