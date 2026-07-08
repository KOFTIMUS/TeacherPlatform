"use server";

import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/auth";

export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Kullanıcı bulunamadı.");
  }

  const passwordMatch = await comparePassword(
    data.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Şifre hatalı.");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}