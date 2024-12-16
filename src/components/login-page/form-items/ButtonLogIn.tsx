import React from "react";

export function ButtonLogIn({ handleSubmit }) {
  return (
    <>
      <button onClick={handleSubmit} className="bg-green-400 mt-2 rounded px-4 py-2 text-center hover:bg-green-600 cursor-pointer">
        Log In
      </button>
    </>
  );
}
