import { Button } from "@/components/ui/button";

export function EnvVarWarning() {
  return (
    <Button
      variant="destructive"
      size="sm"
      className="h-8"
    >
      Missing Environment Variables
    </Button>
  );
}
