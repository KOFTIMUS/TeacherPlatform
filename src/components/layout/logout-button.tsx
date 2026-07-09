"use client";

import { logoutUser } from "@/actions/auth";
import { buttonVariants } from "@/components/ui/button";


export function LogoutButton() {
  return (
    <form
      action={logoutUser}
    >
      <button
        className={buttonVariants({
          variant: "primary",
          size: "sm",
        })}
      >
        Çıkış Yap
      </button>
    </form>
  );
}