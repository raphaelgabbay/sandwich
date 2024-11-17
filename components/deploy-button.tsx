import { Button } from "@/components/ui/button";

export default function DeployButton() {
  return (
    <Button
      asChild
      className="h-8 border-foreground/20 bg-background hover:bg-foreground/5"
      variant="outline"
    >
      <a
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=sandwich&repository-name=sandwich&demo-title=Sandwich&demo-description=A%20SaaS%20starter%20kit%20with%20Next.js%20and%20Supabase&demo-url=https%3A%2F%2Fsandwich-starter.vercel.app&integration-ids=oac_jUduyjQgOyzev1fjrW83NYOv"
        target="_blank"
        rel="noreferrer"
      >
        Deploy
      </a>
    </Button>
  );
}
