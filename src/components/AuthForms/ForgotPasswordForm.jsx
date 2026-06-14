import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ShieldCheck } from "lucide-react";
import { forgotPasswordSchema, forgotPasswordDefaultValues } from "@/zodSchema/authZodSchema";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

/**
 * ForgotPasswordForm
 *
 * Collects the user's email address to send a password-reset OTP.
 * Validates that a well-formed email is provided before submission.
 */
function ForgotPasswordForm() {
  const methods = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: forgotPasswordDefaultValues,
  });

  /* ── Placeholder: replace with actual API call ── */
  const onSubmit = (data) => {
    console.log("Forgot password request for:", data.email);
  };

  return (
    <FormContainer
      title="Forgot your password?"
      subtitle="Enter your email to receive the OTP"
      methods={methods}
      onSubmit={onSubmit}
      footer="We'll send a secure OTP to your email"
    >
      {/* ── Email field ── */}
      <CommonInput
        name="email"
        label="Email Address"
        icon={Mail}
        type="email"
        placeholder="Enter your email"
      />

      {/* ── Submit button ── */}
      <Button type="submit" className="w-full" isNotImplemented>
        Send OTP
      </Button>

      {/* ── Back to Sign In ── */}
      <div className="text-center pt-2">
        <LinkButton to="/sign-in" variant="link">
          Back to Sign In
        </LinkButton>
      </div>
    </FormContainer>
  );
}

export { ForgotPasswordForm };
export default ForgotPasswordForm;
