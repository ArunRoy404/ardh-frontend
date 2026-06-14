import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "@/components/shared/Logo/Logo";

function AuthHeader({ title, subtitle }) {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image: subtle cinematic zoom from 1.08 → 1 over 3s
      gsap.fromTo(
        imgRef.current,
        { scale: 1.08 },
        { scale: 1, duration: 2, ease: "power2.out" }
      );

      // Title: fades in and slides up over 1.5s
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.5 }
      );

      // Subtitle: fades in slightly after title, over 1.5s
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1 }
      );
    });

    // Hover effect for the image — fast and responsive
    const img = imgRef.current;
    let hoverTween;

    const onEnter = () => {
      if (hoverTween) hoverTween.kill();
      hoverTween = gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      if (hoverTween) hoverTween.kill();
      hoverTween = gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    img?.addEventListener("mouseenter", onEnter);
    img?.addEventListener("mouseleave", onLeave);

    return () => {
      ctx.revert();
      img?.removeEventListener("mouseenter", onEnter);
      img?.removeEventListener("mouseleave", onLeave);
      if (hoverTween) hoverTween.kill();
    };
  }, []);


  return (
    <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden p-12 lg:flex">
      {/* Background Image with slow zoom + hover effect */}
      <img
        ref={imgRef}
        src="/images/ardh.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay gradient to blend the building image into the white bottom area smoothly */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent pointer-events-none" />

      {/* Brand Logo Top Left */}
      <div className="relative z-10 flex items-center">
        <Logo size="md" />
      </div>

      {/* Bottom Hero Text */}
      <div className="relative z-10 space-y-3 pb-4 max-w-2xl">
        {!!title && (
          <h2
            ref={titleRef}
            className="font-serif text-4xl font-bold text-dark-accent leading-tight opacity-0"
          >
            {title}
          </h2>
        )}
        {!!subtitle && (
          <p
            ref={subtitleRef}
            className="text-sm text-dark-gray leading-relaxed opacity-0"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export { AuthHeader };
export default AuthHeader;
