import SignInPage from "@/pages/auth/SignInPage";
import { createBrowserRouter } from "react-router";


const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

export default router;