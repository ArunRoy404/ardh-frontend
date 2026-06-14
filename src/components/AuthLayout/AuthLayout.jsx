import { Outlet } from "react-router";
import AuthHeader from "@/components/AuthLayout/AuthHeader";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-[#f4f7ff] text-[#1a202c] antialiased">
      <AuthHeader
        title={
          <h2 className="font-serif text-4xl font-bold text-slate-900 leading-tight">
            Property Management & Financial
            <span className="block text-blue-600 mt-1">
              Tracking Platform
            </span>
          </h2>
        }
        subtitle="Manage buildings, apartments, tenants, income, expenses and maintenance — all in one unified ERP for modern property businesses."
      />

      {/* Right Side: Outlet renders the active auth page */}
      <div className="flex w-full flex-col justify-center px-6 py-12 sm:px-12 lg:w-1/2 lg:px-20 xl:px-24 bg-[#f4f7ff]">
        <Outlet />
      </div>
    </div>
  );
}

export { AuthLayout };
export default AuthLayout;
