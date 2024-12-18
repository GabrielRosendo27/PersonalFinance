import { useNavigate } from "react-router-dom";

export function CreateAccount() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <div>Create Account - Register</div>
      <button onClick={handleClick} className="bg-blue-400 rounded px-4 py-2 text-center hover:bg-blue-600 cursor-pointer">
        Voltar
      </button>
    </>
  );
}
