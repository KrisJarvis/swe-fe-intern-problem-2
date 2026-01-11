import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-slate-50 dark:bg-slate-950">
      <div className="text-center space-y-8 max-w-2xl px-4">
        <h1 className="text-5xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
          Public Package Scan Report
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-muted-foreground">Select a package to view the report:</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button asChild variant="default" size="lg">
              <Link href="/p/npm/express/4.10.5">express@4.10.5</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/p/npm/next/15.5.4">next@15.5.4</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/p/pypi/requests/2.31.0">requests@2.31.0</Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
