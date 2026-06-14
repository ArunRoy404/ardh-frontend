import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, ShieldCheck } from "lucide-react";
import {
  resetPasswordSchema,
  resetPasswordDefaultValues,
} from "@/zodSchema/authZodSchema";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";
import FormAction from "../shared/Form/FormAction/FormAction";

/**
 * ResetPasswordForm
 *
 * Lets the user set a new password after OTP verification.
 * Includes a new-password field + confirm-password field with a
 * zod .refine() ensuring both values match.
 */
function ResetPasswordForm() {
  const methods = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: resetPasswordDefaultValues,
  });

  /* ── Placeholder: replace with actual password-reset API call ── */
  const onSubmit = (data) => {
    console.log("Password reset payload:", {
      newPassword: data.newPassword,
    });
  };

  return (
    <FormContainer
      title="Reset your Password"
      subtitle={
        <>
          Please enter a new password for your account. Use a strong password to keep your account secure.
        </>
      }
      methods={methods}
      onSubmit={onSubmit}
      footer="Secure reset · encrypted connection"
    >
      {/* ── New password ── */}
      <CommonInput
        name="newPassword"
        label="New Password"
        icon={Lock}
        type="password"
        placeholder="Enter new password"
      />

      {/* ── Confirm new password ── */}
      <CommonInput
        name="confirmPassword"
        label="Confirm New Password"
        icon={Lock}
        type="password"
        placeholder="Confirm new password"
      />

      {/* ── Back to Sign In ── */}
      <FormAction
        label="Back to Sign In"
        to="/sign-in"
      />
      
      {/* ── Submit button ── */}
      <Button type="submit" className="w-full" isNotImplemented>
        Reset Password
      </Button>


    </FormContainer>
  );
}

export { ResetPasswordForm };
export default ResetPasswordForm;
