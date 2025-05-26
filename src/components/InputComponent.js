import React from "react";
import useInput from "../hooks/useInput";

const InputComponent = () => {
  const name = useInput("");
  const email = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${name.value}\nEmail: ${email.value}`);
    name.reset();
    email.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-center">useInput Hook Example</h2>

      <input
        type="text"
        value={name.value}
        onChange={name.onChange}
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="email"
        value={email.value}
        onChange={email.onChange}
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded"
      />

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default InputComponent;
