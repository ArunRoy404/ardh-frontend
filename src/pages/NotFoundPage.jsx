import { useEffect, useRef } from "react"
import { Link } from "react-router"
import { SearchX } from "lucide-react"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import Logo from "@/components/shared/Logo/Logo"

const NotFoundPage = () => {
  const containerRef = useRef(null)
  const numberRef = useRef(null)
  const zeroRef = useRef(null)
  const lineRef = useRef(null)
  const iconRef = useRef(null)
  const textRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

      // Animate from a subtle zoom + fade on the entire content block
      tl.fromTo(
        container,
        { scale: 0.97, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6 }
      )
      // Cascade in: 404 number
      tl.fromTo(
        numberRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      // Decorative line
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.4, transformOrigin: "center" },
        "-=0.25"
      )
      // Icon circle
      tl.fromTo(
        iconRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.7)" },
        "-=0.2"
      )
      // Title + description
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.15"
      )
      // Button
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35 },
        "-=0.1"
      )
    })

    return () => ctx.revert()
  }, [])

  // Hover effect on the "0" — fast and responsive
  useEffect(() => {
    const zero = zeroRef.current
    if (!zero) return

    let hoverTween

    const onEnter = () => {
      if (hoverTween) hoverTween.kill()
      hoverTween = gsap.to(zero, {
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const onLeave = () => {
      if (hoverTween) hoverTween.kill()
      hoverTween = gsap.to(zero, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    zero.addEventListener("mouseenter", onEnter)
    zero.addEventListener("mouseleave", onLeave)

    return () => {
      zero.removeEventListener("mouseenter", onEnter)
      zero.removeEventListener("mouseleave", onLeave)
      if (hoverTween) hoverTween.kill()
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      {/* Header with Logo */}
      <div className="w-full px-6 py-5 sm:px-10">
        <Link to="/">
          <Logo size="sm" />
        </Link>
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-16">
        <div
          ref={containerRef}
          className="flex flex-col items-center text-center max-w-md"
        >
          {/* Large 404 */}
          <h1
            ref={numberRef}
            className="text-[140px] sm:text-[180px] font-bold leading-none tracking-tighter text-primary select-none"
          >
            4
            <span
              ref={zeroRef}
              className="text-secondary inline-block -mx-1 sm:-mx-2 cursor-default transition-colors"
            >
              0
            </span>
            4
          </h1>

          {/* Decorative line */}
          <div
            ref={lineRef}
            className="w-16 h-[3px] bg-secondary/60 rounded-full mt-2 mb-6"
          />

          {/* Icon */}
          <div
            ref={iconRef}
            className="mb-4 bg-muted size-14 rounded-full flex items-center justify-center"
          >
            <SearchX className="size-6 text-dark-gray" />
          </div>

          {/* Title + Description */}
          <div ref={textRef}>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
              Page Not Found
            </h2>
            <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-8 max-w-sm">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Check the URL or head back to the dashboard.
            </p>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Link to="/">
              <Button variant="default" size="lg" className="!px-8">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
