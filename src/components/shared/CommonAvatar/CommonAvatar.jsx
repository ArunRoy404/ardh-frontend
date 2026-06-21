import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CommonAvatar = ({
    src,
    alt = "user",
    showText = true,
}) => {
    return (
        <div className="flex items-center gap-2">
            <Avatar className="size-8">
                <AvatarImage src={src} alt={alt} />
                <AvatarFallback>{alt.charAt(0)}</AvatarFallback>
            </Avatar>
            {!!showText && (
                <span className="text-primary font-semibold text-sm">
                    {alt}
                </span>
            )}
        </div>
    )
}

export default CommonAvatar 