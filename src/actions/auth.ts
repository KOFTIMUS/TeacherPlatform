"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { deleteSession } from "@/lib/session";


export async function registerUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Bu email zaten kayıtlı.");
  }


  const hashedPassword = await hashPassword(data.password);


  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    },
  });


  return {
    id: user.id,
    email: user.email,
    name: user.name,
  };
}



export async function logoutUser() {
  await deleteSession();
}