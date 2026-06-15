import CommonSelect from "@/components/shared/CommonSelect/CommonSelect"


const dummyBuildings = [
    { value: "all", label: "All Buildings" },
    { value: "sunrise", label: "Sunrise Tower" },
    { value: "skyline", label: "Skyline Residency" },
    { value: "greenvalley", label: "Green Valley" },
]


const DashboardBuildingFilter = () => {
    return (
        <div className="flex items-center gap-2">
            <span
                className="text-sm text-dark-gray font-sans"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
                Filter by Building:
            </span>
            <CommonSelect
                defaultValue="all"
                placeholder="Choose Building"
                options={dummyBuildings}
            />
        </div>
    )
}

export default DashboardBuildingFilter