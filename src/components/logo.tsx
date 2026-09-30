import { cn } from "@/lib/utils";

export function DropMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-drop.jpg"
      alt=""
      className={cn("shrink-0 object-contain", className)}
    />
  );
}

export function Wordmark({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const h = size === "lg" ? "h-20 md:h-24" : size === "sm" ? "h-10" : "h-12";
  return (
    <img
      src="/images/logo-header.jpg"
      alt="RAAVI"
      className={cn("w-auto object-contain", h, className)}
    />
  );
}

export function BrandLockup({
  compact = false,
  invert = false,
}: {
  compact?: boolean;
  invert?: boolean;
}) {
  return (
    <img
      src="/images/logo-header.jpg"
      alt="RAAVI Purified Drinking Water"
      className={cn(
        "w-auto object-contain",
        compact ? "h-12 max-w-[220px] md:h-14 md:max-w-[280px]" : "h-16",
        invert && "rounded-lg bg-white p-1",
      )}
    />
  );
}

export function LogoBanner({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo-full.jpg"
      alt="RAAVI Purified Drinking Water — Pure, Safe, Healthy"
      className={cn("w-full rounded-2xl object-cover shadow-sm", className)}
    />
  );
}
