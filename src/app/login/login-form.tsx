"use client";

import { useState } from "react";

export function LoginForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    setMessage("Giriş sistemi hazırlanıyor...");
  }

  return (
    <form
      action={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4"
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="rounded border p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Şifre"
        className="rounded border p-3"
      />

      <button
        type="submit"
        className="rounded bg-black p-3 text-white"
      >
        Giriş Yap
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}