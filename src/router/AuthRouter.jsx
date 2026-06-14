import AuthLayout from "@/components/AuthLayout/AuthLayout";
import SignInPage from "@/pages/auth/SignInPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import OtpVerificationPage from "@/pages/auth/OtpVerificationPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";

/*
 * Auth Routes
 *
 * All routes share the AuthLayout which provides:
 *   - Left panel (hero image + branding)
 *   - Right panel (<Outlet /> renders the active page)
 *
 * The order of children defines the navigation flow:
 *   /sign-in  →  /forgot-password  →  /otp-verification  →  /reset-password
 */
const authRoutes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/otp-verification",
      element: <OtpVerificationPage />,
    },
    {
      path: "/reset-password",
      element: <ResetPasswordPage />,
    },
  ],
};

export { authRoutes };
export default authRoutes;
