import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"



const CommonSelect = ({ defaultValue, placeholder, options, onValueChange, value, triggerClassname, ...props }) => {
    return (
        <Select value={value} onValueChange={onValueChange} defaultValue={defaultValue} {...props}>
            <SelectTrigger className={cn(
                "min-w-[120px] text-xs font-sans border-border bg-white text-[#1A1A1A]",
                triggerClassname
            )}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent >
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default CommonSelect