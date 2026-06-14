import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


function LinkButton({ to='/', children, className, ...props }) {
  return (
    <Link to={to}>
      <Button {...props} className={cn(
        "text-sm font-semibold text-secondary hover:underline",
        className
      )}>
        {children}
      </Button>
    </Link>
  );
}

export { LinkButton };