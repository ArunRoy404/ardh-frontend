import { useFormContext, Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

/**
 * CommonOTPInput
 *
 * A reusable OTP (one-time password) input that integrates with react-hook-form
 * via useFormContext. Displays a row of individual digit slots with automatic
 * error handling from the parent form schema.
 *
 * Props:
 *   name       – field name in the form schema
 *   label      – optional label shown above the input
 *   numDigits  – number of digit slots (default 6)
 */
function CommonOTPInput({
  name,
  label,
  numDigits = 6,
  ...props
}) {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div className="space-y-3">
      {label && (
        <p className="text-xs font-semibold text-dark-gray text-center">{label}</p>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputOTP
            maxLength={numDigits}
            value={field.value}
            onChange={field.onChange}
            containerClassName="justify-center"
            {...props}
          >
            <InputOTPGroup className="gap-3">
              {Array.from({ length: numDigits }).map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="size-10 rounded-md border border-input bg-white text-sm font-semibold shadow-none"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {error && (
        <p className="text-xs text-red-500 text-center">{error}</p>
      )}
    </div>
  );
}

export { CommonOTPInput };
export default CommonOTPInput;
