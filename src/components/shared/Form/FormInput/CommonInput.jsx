import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function CommonInput({
  name,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  className,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;
  const isPasswordType = type === "password";
  const resolvedType = isPasswordType ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5 relative">
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
              type={resolvedType}
              placeholder={placeholder}
              className={cn(
                "w-full py-3 pl-11 pr-4 text-sm placeholder:text-dark-gray h-auto",
                "!bg-input-bg !shadow-none !border-none rounded-md",
                isPasswordType && "pr-11",
                className
              )}
              aria-invalid={error ? "true" : "false"}
              {...field}
              {...props}
            />
          )}
        />
        {isPasswordType && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4">
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        )}
      </div>
      {error && (
        <p className="px-1 bg-background absolute bottom-1.5 translate-y-full text-[10px] text-destructive font-semibold">{error}</p>
      )}
    </div>
  );
}

export { CommonInput };
export default CommonInput;
