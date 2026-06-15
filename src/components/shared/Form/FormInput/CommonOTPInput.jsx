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
  numDigits = 6,
  ...props
}) {
  const { control, formState: { errors } } = useFormContext();
  const error = errors[name]?.message;

  return (
    <div className="space-y-3 relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputOTP
            maxLength={numDigits}
            value={field.value}
            onChange={field.onChange}
            containerClassName="justify-center w-full"
            {...props}
          >
            <InputOTPGroup className="flex justify-between w-full">
              {Array.from({ length: numDigits }).map((_, i) => (
                <InputOTPSlot
                  key={i}
                  index={i}
                  className="size-14 rounded-md border border-dark-gray bg-input-bg! text-sm font-semibold shadow-none"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        )}
      />

      {error && (
        <p className="absolute -bottom-6 text-xs text-red-500 text-center w-full">{error}</p>
      )}
    </div>
  );
}

export { CommonOTPInput };
export default CommonOTPInput;
