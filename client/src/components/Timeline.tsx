import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { TimelineEvent } from "@shared/schema";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export function Timeline() {
  const { data: events, isLoading, error } = useQuery<TimelineEvent[]>({
    queryKey: ["/api/timeline"],
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const newParticles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setParticles(newParticles);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      newParticles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.fillStyle = `rgba(0, 206, 209, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < newParticles.length; i++) {
        for (let j = i + 1; j < newParticles.length; j++) {
          const dx = newParticles[i].x - newParticles[j].x;
          const dy = newParticles[i].y - newParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(0, 206, 209, ${0.2 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(newParticles[i].x, newParticles[i].y);
            ctx.lineTo(newParticles[j].x, newParticles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-24 bg-background" data-testid="section-timeline">
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            data-generated="true"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Time Line</h2>
            <p className="text-muted-foreground">Short description about the talk or the awareness programs</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <Skeleton className="w-16 h-16 rounded-full" />
                <Skeleton className="h-24 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !events) {
    return (
      <section className="relative py-24 bg-background" data-testid="section-timeline">
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            data-generated="true"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load timeline events.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-background" data-testid="section-timeline">
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          data-generated="true"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Time Line</h2>
          <p className="text-muted-foreground">Short description about the talk or the awareness programs</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.number}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-testid={`timeline-event-${index}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <Card className="p-6 inline-block hover-elevate border-card-border">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-1">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.participants}</p>
                  </Card>
                </div>

                {/* Number Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold relative z-10">
                  {event.number}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
