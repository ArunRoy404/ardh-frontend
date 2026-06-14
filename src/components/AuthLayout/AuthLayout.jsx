import { Outlet } from "react-router";
import AuthHeader from "@/components/AuthLayout/AuthHeader";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-[linear-gradient(180deg,_#E4ECFF_0%,_#E9F0FF_100%)] text-[#1a202c] antialiased">
      <AuthHeader
        title={
          <span>
            Property Management & Financial
            <span className="block text-secondary mt-1">
              Tracking Platform
            </span>
          </span>
        }
        subtitle="Manage buildings, apartments, tenants, income, expenses and maintenance — all in one unified ERP for modern property businesses."
      />

      {/* Right Side: Outlet renders the active auth page */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-20 xl:px-24">
        <Outlet />
      </div>
    </div>
  );
}

export { AuthLayout };
export default AuthLayout;
