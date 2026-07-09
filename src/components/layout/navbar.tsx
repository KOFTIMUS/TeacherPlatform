import Link from "next/link";
import { getSessionUser } from "@/lib/session";
import { logout } from "@/actions/logout";

export async function Navbar() {
  const user = await getSessionUser();

  return (
    <nav className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        <Link href="/" className="font-bold text-xl">
          Teacher Platform
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/teachers">
            Öğretmenler
          </Link>

          {user ? (
            <>
              <span>
                Merhaba, {user.name}
              </span>

              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-md border px-3 py-1"
                >
                  Çıkış
                </button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login">
                Giriş Yap
              </Link>

              <Link href="/register">
                Kayıt Ol
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}