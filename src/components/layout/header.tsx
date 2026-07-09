import { getSessionUser } from "@/lib/session";

import { HeaderAuth } from "./header-auth";
import { HeaderClient } from "./header-client";

async function Header() {
  const user = await getSessionUser();

  return (
    <HeaderClient>
      <HeaderAuth user={user} />
    </HeaderClient>
  );
}

export { Header };