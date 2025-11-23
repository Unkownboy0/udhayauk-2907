import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { BugReportLogo } from "@shared/schema";

export function BugReports() {
  const { data: companies, isLoading, error } = useQuery<BugReportLogo[]>({
    queryKey: ["/api/bug-reports"],
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-background/50 overflow-hidden" data-testid="section-bug-reports">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Bug Reports / Hall of Fame</h2>
          </div>
          <div className="flex gap-12 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="flex-shrink-0 w-32 h-24" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !companies) {
    return (
      <section className="py-24 bg-background/50 overflow-hidden" data-testid="section-bug-reports">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load bug report logos.</p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
