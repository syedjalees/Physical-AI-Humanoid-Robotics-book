import React, { useState } from "react";
import { authClient } from "../../lib/betterAuthClient";

export default function SignupModal({ open, onClose }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    software_experience: "",
    hardware_robotics_experience: "",
    education_background: "",
  });

  const handleSubmit = async () => {
    try {
      const res = await authClient.signup(form);
      console.log("Signup success:", res);
      onClose();
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  if (!open) return null;

  return (
    <div className="auth-modal">
      <h2>Create Account</h2>

      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <input placeholder="Software Experience" onChange={(e) => setForm({ ...form, software_experience: e.target.value })} />
      <input placeholder="Robotics Experience" onChange={(e) => setForm({ ...form, hardware_robotics_experience: e.target.value })} />
      <input placeholder="Education Background" onChange={(e) => setForm({ ...form, education_background: e.target.value })} />

      <button onClick={handleSubmit}>Sign Up</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
