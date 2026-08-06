import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "light";
  className?: string;
};

const base =
  "cta-arrow group inline-flex items-center gap-3 rounded-full pl-7 pr-2 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300";

export function CtaButton({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-dark hover:text-dark-foreground"
      : "bg-card text-foreground hover:bg-primary hover:text-primary-foreground";

  const inner = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
          variant === "primary"
            ? "bg-primary-foreground/20 group-hover:bg-primary"
            : "bg-primary text-primary-foreground group-hover:bg-card group-hover:text-foreground",
        )}
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(base, styles, className)}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cn(base, styles, className)}>
      {inner}
    </button>
  );
}
