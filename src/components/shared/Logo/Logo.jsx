import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
};

function Logo({ className, size = "md", collapsed = false }) {
  return (
    <img
      src={collapsed ? "/logo/ardh_logo_single.png" : "/logo/ardh_logo.png"}
      alt="ARDH Logo"
      className={cn("w-auto object-contain", sizeMap[size], className)}
    />
  );
}

export { Logo };
export default Logo;
