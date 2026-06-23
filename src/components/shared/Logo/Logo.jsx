import { cn } from "@/lib/utils";
import { Link } from "react-router";

const sizeMap = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
};

function Logo({ className, size = "md", collapsed = false }) {
  return (
    <Link to="/" className="cursor-pointer max-w-max mx-auto">
      <img
        src={collapsed ? "/logo/ardh_logo_single.png" : "/logo/ardh_logo.png"}
        alt="ARDH Logo"
        className={cn("w-auto object-contain", sizeMap[size], className)}
      />
    </Link>
  );
}

export { Logo };
export default Logo;
