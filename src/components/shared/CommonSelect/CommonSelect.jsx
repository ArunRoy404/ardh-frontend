import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"



const CommonSelect = ({ defaultValue, placeholder, options }) => {
    return (
        <Select defaultValue={defaultValue}>
            <SelectTrigger className="min-w-[120px] text-xs font-sans border-border bg-white text-[#1A1A1A]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
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