import AuthLayout from "@/components/AuthLayout/AuthLayout";
import SignInPage from "@/pages/auth/SignInPage";

const authRoutes = {
  element: <AuthLayout />,
  children: [
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
  ],
};

export { authRoutes };
export default authRoutes;
