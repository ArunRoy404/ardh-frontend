import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck } from "lucide-react";
import {
  otpVerificationSchema,
  otpVerificationDefaultValues,
} from "@/zodSchema/authZodSchema";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonOTPInput from "@/components/shared/Form/FormInput/CommonOTPInput";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

/**
 * OtpVerificationForm
 *
 * Displays a 6-digit OTP input where the user enters the code received via email.
 * Includes a "Verify Now" button and a "Resend Code" action below it.
 */
function OtpVerificationForm() {
  const methods = useForm({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: otpVerificationDefaultValues,
  });

  /* ── Placeholder: replace with actual verification API call ── */
  const onSubmit = (data) => {
    console.log("OTP submitted:", data.otp);
  };

  /* ── Placeholder: replace with actual resend API call ── */
  const handleResend = (e) => {
    e.preventDefault();
    console.log("Resending OTP…");
  };

  return (
    <FormContainer
      title="OTP Verification"
      subtitle={
        <>
          Please check your email and enter the 6-digit verification code to continue. The code will expire shortly for security reasons.
        </>
      }
      methods={methods}
      onSubmit={onSubmit}
      formClassName="space-y-6"
      footer="Secure verification · OTP expires in 10 minutes"
    >
      {/* ── 6-digit OTP input ── */}
      <CommonOTPInput
        name="otp"
        label="Verification Code"
        numDigits={6}
      />

      {/* ── Verify button ── */}
      <Button type="submit" className="w-full" isNotImplemented>
        Verify Now
      </Button>

      {/* ── Resend code link ── */}
      <div className="flex items-center justify-center gap-1 text-sm pt-1">
        <span className="text-dark-gray">Didn't receive the code?</span>
        <button
          type="button"
          onClick={handleResend}
          className="font-semibold text-secondary hover:underline transition-colors cursor-pointer"
        >
          Resend Code
        </button>
      </div>

      {/* ── Back to Forgot Password ── */}
      <div className="text-center pt-2">
        <LinkButton to="/forgot-password" variant="link">
          Change email
        </LinkButton>
      </div>
    </FormContainer>
  );
}

export { OtpVerificationForm };
export default OtpVerificationForm;
