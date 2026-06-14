import Logo from "@/components/shared/Logo/Logo";

function FormContainer({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">
        <Logo size="lg" />
      </div>
      <h2 className="flex items-center gap-1.5 font-serif text-3xl font-semibold text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}

export { FormContainer };
export default FormContainer;
