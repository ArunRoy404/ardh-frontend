import { useFormContext, Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

function CommonCheckbox({
  name,
  label,
  className,
  ...props
}) {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <label className="flex items-center gap-2 text-sm text-dark-accent cursor-pointer select-none">
            <Checkbox
              checked={field.value}
              onCheckedChange={(checked) => field.onChange(checked)}
              className={className}
              {...props}
            />
            {label}
          </label>
        )}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}

export { CommonCheckbox };
export default CommonCheckbox;
