import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import { signInSchema, authDefaultValues } from "@/zodSchema/authZodSchema";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import CommonCheckbox from "@/components/shared/Form/FormInput/CommonCheckbox";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/shared/LinkButton/LinkButton";

/**
 * SignInForm
 *
 * Primary authentication form. Validates email + password against a Zod schema,
 * provides a "Remember me" toggle and navigates to the forgot-password flow.
 *
 * All form inputs auto-resolve errors from the Zod schema via useFormContext,
 * and the password field automatically renders its own eye-toggled visibility.
 */
function SignInForm() {
  /* ── Initialise react-hook-form with Zod validation ── */
  const methods = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: authDefaultValues,
  });

  /* ── Placeholder: replace with actual sign-in API call ── */
  const onSubmit = (data) => {
    console.log("Sign in data:", data);
  };

  return (
    <FormContainer
      title={
        <>
          Welcome Back <span className="text-dark-accent text-2xl">✦</span>
        </>
      }
      subtitle="Sign in to your ARDH workspace"
      methods={methods}
      onSubmit={onSubmit}
      footer="Secure access · Role-based permissions"
    >
      {/* ── Email field ── */}
      <CommonInput
        name="email"
        label="Email Address"
        icon={Mail}
        type="email"
        placeholder="Enter your Email"
      />

      {/* ── Password field (eye toggle is auto-handled inside CommonInput) ── */}
      <CommonInput
        name="password"
        label="Password"
        icon={Lock}
        type="password"
        placeholder="Password"
      />

      {/* ── Remember me + Forgot Password link ── */}
      <div className="flex items-center justify-between pt-1">
        <CommonCheckbox
          name="rememberMe"
          label="Remember me"
          className="data-checked:text-secondary!"
        />
        <LinkButton to="/forgot-password" variant="link">
          Forgot Password?
        </LinkButton>
      </div>

      {/* ── Submit button (marked isNotImplemented for demo purposes) ── */}
      <Button type="submit" className="w-full" isNotImplemented>
        Sign in
      </Button>
    </FormContainer>
  );
}

export { SignInForm };
export default SignInForm;
