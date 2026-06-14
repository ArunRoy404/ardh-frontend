import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, EyeOff, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean(),
});

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log('Sign in data:', data);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#f4f7ff] text-[#1a202c] antialiased">
      
      {/* Left Side: Hero Image Section (Hidden on mobile) */}
      <div 
        className="relative hidden w-1/2 flex-col justify-between bg-cover bg-center p-12 lg:flex" 
        style={{ backgroundImage: "url('/images/ardh.png')" }}
      >
        {/* Overlay gradient to blend the building image into the white bottom area smoothly */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent pointer-events-none" />

        {/* Brand Logo Top Left */}
        <div className="relative z-10 flex items-center">
          <img 
            src="/logo/ardh_logo.png" 
            alt="ARDH Logo" 
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Bottom Hero Text */}
        <div className="relative z-10 max-w-lg space-y-3 pb-4">
          <h2 className="font-serif text-4xl font-bold text-slate-900 leading-tight">
            Property Management & Financial
            <span className="block text-blue-600 mt-1">Tracking Platform</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
            Manage buildings, apartments, tenants, income, expenses and maintenance — all in one unified ERP for modern property businesses.
          </p>
        </div>
      </div>

      {/* Right Side: Authentication Form */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-20 xl:px-24 bg-[#f4f7ff]">
        <div className="mx-auto w-full max-w-md space-y-8">
          
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            {/* Form Logo */}
            <div className="mb-4">
              <img 
                src="/logo/ardh_logo.png" 
                alt="ARDH Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>

            <h2 className="flex items-center gap-1.5 font-serif text-3xl font-semibold text-slate-900">
              Welcome Back <span className="text-blue-600 text-2xl">✦</span>
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Sign in to your ARDH workspace
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-500">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 z-10 flex items-center pl-4 text-slate-400 pointer-events-none">
                  <Mail size={18} />
                </span>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm shadow-sm placeholder:text-slate-400 h-auto"
                      aria-invalid={errors.email ? "true" : "false"}
                      {...field}
                    />
                  )}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-semibold text-slate-500">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 z-10 flex items-center pl-4 text-slate-400 pointer-events-none">
                  <Lock size={18} />
                </span>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      className="w-full rounded-xl border bg-white py-3.5 pl-11 pr-11 text-sm shadow-sm placeholder:text-slate-400 h-auto"
                      aria-invalid={errors.password ? "true" : "false"}
                      {...field}
                    />
                  )}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600"
                >
                  <EyeOff size={18} />
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
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
              <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="mt-2 w-full rounded-xl bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 h-auto cursor-pointer"
            >
              Sign in
            </Button>
          </form>

          {/* Footer Security Badge */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 pt-4">
            <ShieldCheck size={14} />
            <span>Secure access · Role-based permissions</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SignInPage;