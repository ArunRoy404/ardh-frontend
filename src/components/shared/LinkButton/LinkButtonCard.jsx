import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";


function LinkButtonCard({ to = '/', children, className, variant = 'link', hideIcon = false, ...props }) {
  return (
    <Link to={to}>
      <Button variant={variant} {...props} className={cn(
        "text-sm font-semibold text-secondary hover:underline",
        className
      )}>
        {children} {!hideIcon && <ArrowRight className="size-3.5" />}
      </Button>
    </Link>
  );
}

export { LinkButtonCard };