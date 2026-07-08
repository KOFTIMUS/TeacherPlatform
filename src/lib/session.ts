import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

const SESSION_COOKIE = "teacher_platform_session";

export async function createSession(userId: string) {
  const token = crypto.randomUUID();

  await prisma.session.create({
    data: {
      id: token,
      userId,
    },
  });

  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}


export async function getSessionUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: {
      id: token,
    },
    include: {
      user: true,
    },
  });

  return session?.user ?? null;
}


export async function deleteSession() {
  const cookieStore = await cookies();

  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (token) {
    await prisma.session.delete({
      where: {
        id: token,
      },
    }).catch(() => {});
  }

  cookieStore.delete(SESSION_COOKIE);
}