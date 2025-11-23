import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { TechLogo } from "@shared/schema";

export function LogoCarousel() {
  const { data: logos, isLoading, error } = useQuery<TechLogo[]>({
    queryKey: ["/api/tech-logos"],
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-background/50 border-y border-border" data-testid="section-logo-carousel">
        <div className="flex gap-12 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="flex-shrink-0 w-32 h-20" />
          ))}
        </div>
      </section>
    );
  }

  if (error || !logos) {
    return (
      <section className="py-12 bg-background/50 border-y border-border" data-testid="section-logo-carousel">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">Failed to load technology logos.</p>
        </div>
      </section>
    );
  }

  return null;
}
