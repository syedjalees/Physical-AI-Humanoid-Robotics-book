import React, { useState } from "react";
import { authClient } from "../../lib/betterAuthClient";

export default function SigninModal({ open, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    try {
      const res = await authClient.signin(form);
      console.log("Signin success:", res);
      onClose();
    } catch (err) {
      alert("Signin failed: " + err.message);
    }
  };

  if (!open) return null;

  return (
    <div className="auth-modal">
      <h2>Sign In</h2>

      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <button onClick={handleSubmit}>Sign In</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
