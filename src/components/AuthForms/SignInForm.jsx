import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Lock, EyeOff, Eye, ShieldCheck } from "lucide-react";
import FormContainer from "@/components/shared/Form/FormContainer/FormContainer";
import CommonInput from "@/components/shared/Form/CommonInput/CommonInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Sign in data:", data);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      <FormContainer
        title={
          <>
            Welcome Back <span className="text-blue-600 text-2xl">✦</span>
          </>
        }
        subtitle="Sign in to your ARDH workspace"
      />

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <CommonInput
          name="email"
          control={control}
          label="Email Address"
          icon={Mail}
          type="email"
          placeholder="Enter your Email"
          error={errors.email?.message}
        />

        <CommonInput
          name="password"
          control={control}
          label="Password"
          icon={Lock}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          error={errors.password?.message}
          rightElement={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          }
        />

        <div className="flex items-center justify-between pt-1">
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
                Remember me
              </label>
            )}
          />
          <a
            href="#"
            className="text-sm font-semibold text-blue-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <Button
          type="submit"
          className="mt-2 w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 h-auto cursor-pointer"
        >
          Sign in
        </Button>
      </form>

      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-4">
        <ShieldCheck size={14} />
        <span>Secure access · Role-based permissions</span>
      </div>
    </div>
  );
}

export { SignInForm };
export default SignInForm;
