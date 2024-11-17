import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function HeaderAuth() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  return session ? (
    <div className="flex items-center gap-4">
      <Link href="/account">
        <Button variant="ghost" size="sm">
          Account
        </Button>
      </Link>
      <form action="/auth/sign-out" method="post">
        <Button size="sm" variant="ghost">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <Link href="/login">
      <Button size="sm" variant="ghost">
        Login
      </Button>
    </Link>
  );
}
