import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import { signInSchema, authDefaultValues } from "@/zodSchema/authZodSchema";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonInput from "@/components/shared/Form/FormInput/CommonInput";
import CommonCheckbox from "@/components/shared/Form/FormInput/CommonCheckbox";
import { Button } from "@/components/ui/button";
import { LinkButton } from "../shared/LinkButton/LinkButton";



function SignInForm() {
  const methods = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: authDefaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log("Sign in data:", data);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <FormContainer
        title={
          <>
            Welcome Back <span className="text-dark-accent text-2xl">✦</span>
          </>
        }
        subtitle="Sign in to your ARDH workspace"
      />

      <FormProvider {...methods}>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
          <CommonInput
            name="email"
            label="Email Address"
            icon={Mail}
            type="email"
            placeholder="Enter your Email"
          />

          <CommonInput
            name="password"
            label="Password"
            icon={Lock}
            type="password"
            placeholder="Password"
          />

          <div className="flex items-center justify-between pt-1">
            <CommonCheckbox
              name="rememberMe"
              label="Remember me"
              className="data-checked:text-secondary!"
            />
          <LinkButton to='/forgot-password' variant='link'>Forgot Password?</LinkButton>
          </div>

          <Button
            type="submit"
            className={'w-full'}
          >
            Sign in
          </Button>
        </form>
      </FormProvider>

      <div className="flex items-center justify-center gap-1.5 text-xs text-dark-gray pt-4">
        <ShieldCheck size={14} />
        <span>Secure access · Role-based permissions</span>
      </div>
    </div>
  );
}

export { SignInForm };
export default SignInForm;
