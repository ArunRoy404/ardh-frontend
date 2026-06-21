import { useFormContext, Controller } from "react-hook-form";
import CommonSelect from "./CommonSelect";

const FormSelect = ({
  name,
  label,
  options,
  placeholder,
  triggerClassname = "w-full py-5.5 border-none",
  ...props
}) => {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div className="space-y-1.5 relative">
      {label && (
        <label htmlFor={name} className="text-xs font-semibold text-dark-gray">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CommonSelect
            options={options}
            value={field.value}
            onValueChange={field.onChange}
            placeholder={placeholder}
            triggerClassname={triggerClassname}
            {...props}
          />
        )}
      />
      {error && (
        <p className="absolute -bottom-2.5 text-[10px] text-destructive font-semibold">{error}</p>
      )}
    </div>
  );
};

export default FormSelect;