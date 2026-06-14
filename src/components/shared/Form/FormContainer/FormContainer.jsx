import { FormProvider } from "react-hook-form";
import Logo from "@/components/shared/Logo/Logo";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

/**
 * FormContainer
 *
 * Provides a consistent auth-form wrapper containing:
 *   1. Logo + title / subtitle header
 *   2. <FormProvider> + <form> (react-hook-form context and DOM form element)
 *   3. Optional footer (security hints, etc.)
 *
 * Each page form just passes its useForm methods + onSubmit + children.
 *
 * Props:
 *   title         – heading text or JSX
 *   subtitle      – optional description text or JSX
 *   methods       – return value of useForm()
 *   onSubmit      – callback invoked with validated form data
 *   footer        – optional node rendered below the form
 *   formClassName – additional classes for the <form> element (default: "space-y-5")
 *   children      – form fields and buttons
 */
function FormContainer({
  title,
  subtitle,
  methods,
  onSubmit,
  footer,
  formClassName,
  children,
}) {
  return (
    <div className="mx-auto w-full max-w-md space-y-8">
      {/* ── Header: Logo + Title / Subtitle ── */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Logo size="lg" />
        </div>
        <h2 className="flex items-center gap-1.5 font-serif text-3xl font-semibold text-dark-accent">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-dark-gray">{subtitle}</p>
        )}
      </div>

      {/* ── Form with react-hook-form context ── */}
      <FormProvider {...methods}>
        <form
          className={cn("space-y-5", formClassName)}
          onSubmit={methods.handleSubmit(onSubmit)}
          noValidate
        >
          {children}
        </form>
      </FormProvider>

      {/* ── Footer (security hints, etc.) ── */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-dark-gray pt-4">
        <ShieldCheck size={14} />
        {footer}
      </div>
    </div>
  );
}

export { FormContainer };
export default FormContainer;
