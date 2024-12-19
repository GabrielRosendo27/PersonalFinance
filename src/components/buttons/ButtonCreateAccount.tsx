import { useNavigate } from "react-router-dom";

export function ButtonCreateAccount() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  return (
    <>
      <button onClick={handleClick} className="bg-blue-400 rounded px-4 py-2 text-center hover:bg-blue-600 cursor-pointer">
        Create Account
      </button>
    </>
  );
}
