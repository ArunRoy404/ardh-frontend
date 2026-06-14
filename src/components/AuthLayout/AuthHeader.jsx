import Logo from "@/components/shared/Logo/Logo";

function AuthHeader({ title, subtitle }) {
  return (
    <div
      className="relative hidden w-1/2 flex-col justify-between bg-cover bg-center p-12 lg:flex"
      style={{ backgroundImage: "url('/images/ardh.png')" }}
    >
      {/* Overlay gradient to blend the building image into the white bottom area smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent pointer-events-none" />

      {/* Brand Logo Top Left */}
      <div className="relative z-10 flex items-center">
        <Logo size="md" />
      </div>

      {/* Bottom Hero Text */}
      <div className="relative z-10 space-y-3 pb-4 max-w-2xl">
        {!!title && <h2 className="font-serif text-4xl font-bold text-dark-accent leading-tight">{title}</h2>}
        {!!subtitle && (
          <p className="text-sm text-dark-gray  leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div> 
  );
}

export { AuthHeader };
export default AuthHeader;
 