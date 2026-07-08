"use client";

import { useState } from "react";
import { registerUser } from "@/actions/auth";

export function RegisterForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    try {
      await registerUser({
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      });

      setMessage("Kayıt başarılı.");
    } catch {
      setMessage("Kayıt başarısız.");
    }
  }

  return (
    <form action={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
      <input
        name="name"
        placeholder="Ad Soyad"
        className="rounded border p-3"
      />

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
        Kayıt Ol
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}