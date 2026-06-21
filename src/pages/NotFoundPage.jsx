import { Link } from "react-router"
import { SearchX } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/shared/Logo/Logo"

const NotFoundPage = () => {
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
        <div className="flex flex-col items-center text-center max-w-md">
          {/* Large 404 */}
          <h1 className="text-[140px] sm:text-[180px] font-bold leading-none tracking-tighter text-primary select-none">
            4
            <span className="text-secondary inline-block -mx-1 sm:-mx-2">0</span>
            4
          </h1>

          {/* Decorative line */}
          <div className="w-16 h-[3px] bg-secondary/60 rounded-full mt-2 mb-6" />

          {/* Icon */}
          <div className="mb-4 bg-muted size-14 rounded-full flex items-center justify-center">
            <SearchX className="size-6 text-dark-gray" />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-8 max-w-sm">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Check the URL or head back to the dashboard.
          </p>

          {/* CTA Button */}
          <Link to="/">
            <Button variant="default" size="lg" className="!px-8">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
