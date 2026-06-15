import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const DashboardBuildingFilter = () => {
    return (
        <div className="flex items-center gap-2">
            <span
                className="text-sm text-dark-gray font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                Filter by Building:
            </span>
            <Select defaultValue="all">
                <SelectTrigger className="w-[140px] text-xs font-sans border-border bg-white text-[#1A1A1A]">
                    <SelectValue placeholder="All Buildings" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Buildings</SelectItem>
                    <SelectItem value="sunrise">Sunrise Tower</SelectItem>
                    <SelectItem value="skyline">Skyline Residency</SelectItem>
                    <SelectItem value="greenvalley">Green Valley</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default DashboardBuildingFilter