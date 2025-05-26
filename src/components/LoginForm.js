import React from "react";
import useInput from "../hooks/useInput";

const LoginForm = () => {
  const email = useInput("", "email");
  const password = useInput("", "password");

  const handleSubmit = (e) => {
    e.preventDefault();

    // manually trigger validation on submit
    const emailError = email.error || email.onChange({ target: { value: email.value } });
    const passwordError = password.error || password.onChange({ target: { value: password.value } });

    if (!email.error && !password.error && email.value && password.value) {
      alert("✅ Login Successful");
      email.reset();
      password.reset();
    } else {
      alert("❌ Invalid fields. Fix errors to submit.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow p-6 rounded space-y-4">
      <h2 className="text-xl font-semibold text-center">Login</h2>

      <div>
        <input
          type="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        {email.error && <p className="text-red-600 text-sm mt-1">{email.error}</p>}
      </div>

      <div>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
        />
        {password.error && <p className="text-red-600 text-sm mt-1">{password.error}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
