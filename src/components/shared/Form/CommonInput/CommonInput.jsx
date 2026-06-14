import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function CommonInput({
  name,
  control,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  error,
  rightElement,
  className,
  ...props
}) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={name} className="text-xs font-semibold text-dark-gray">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 z-10 flex items-center pl-4 text-dark-gray pointer-events-none">
            <Icon size={16} />
          </span>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              className={cn(
                "w-full py-3 pl-11 pr-4 text-sm placeholder:text-dark-gray h-auto",
                "!bg-white !shadow-none !border-none rounded-md",
                rightElement && "pr-11",
                className
              )}
              aria-invalid={error ? "true" : "false"}
              {...field}
              {...props}
            />
          )}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export { CommonInput };
export default CommonInput;
