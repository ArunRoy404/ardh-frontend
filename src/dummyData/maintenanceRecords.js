export const maintenanceRecords = [
    { title: "Water leakage in bathroom", category: "Plumbing", building: "Sunrise Building", flat: "A1", priority: "High", vendor: "Quick Fix Plumbing", status: "In progress" },
    { title: "AC not cooling", category: "HVAC", building: "Skyline Residency", flat: "301", priority: "High", vendor: "Cool Air Services", status: "In progress" },
    { title: "Parking lot lights broken", category: "Electrical", building: "Sunrise Building", flat: "-", priority: "Medium", vendor: "Spark Electricals", status: "Open" },
    { title: "Common area painting needed", category: "Painting", building: "Green Valley Apartments", flat: "-", priority: "Low", vendor: "Prime Painters", status: "Open" },
    { title: "CCTV camera malfunction", category: "Security", building: "Sunrise Building", flat: "301", priority: "High", vendor: "SecureTech Solutions", status: "Open" },
    { title: "Kitchen sink replacement", category: "Plumbing", building: "Skyline Residency", flat: "102", priority: "Medium", vendor: "Quick Fix Plumbing", status: "In progress" },
    { title: "Main door lock repair", category: "Carpentry", building: "Green Valley Apartments", flat: "203", priority: "Medium", vendor: "Master Crafts", status: "Open" },
    { title: "Water heater not working", category: "Plumbing", building: "Skyline Residency", flat: "402", priority: "High", vendor: "Quick Fix Plumbing", status: "In progress" },
    { title: "Window glass cracked", category: "Glazing", building: "Sunrise Building", flat: "303", priority: "Medium", vendor: "Glass Masters", status: "Open" },
    { title: "Power socket not working", category: "Electrical", building: "Green Valley Apartments", flat: "104", priority: "Low", vendor: "Spark Electricals", status: "Complete" },
    { title: "Toilet flush broken", category: "Plumbing", building: "Skyline Residency", flat: "203", priority: "High", vendor: "Quick Fix Plumbing", status: "Open" },
    { title: "Kitchen cabinet hinge loose", category: "Carpentry", building: "Sunrise Building", flat: "302", priority: "Low", vendor: "Master Crafts", status: "Complete" },
    { title: "Intercom not functioning", category: "Electrical", building: "Green Valley Apartments", flat: "101", priority: "Medium", vendor: "Spark Electricals", status: "In progress" },
    { title: "Paint peeling off walls", category: "Painting", building: "Skyline Residency", flat: "201", priority: "Low", vendor: "Prime Painters", status: "Open" },
    { title: "Geyser leaking water", category: "Plumbing", building: "Sunrise Building", flat: "401", priority: "High", vendor: "Quick Fix Plumbing", status: "Complete" },
    { title: "Smoke detector beeping", category: "Safety", building: "Green Valley Apartments", flat: "301", priority: "Medium", vendor: "SecureTech Solutions", status: "Open" },
    { title: "Mosquito mesh torn", category: "General", building: "Skyline Residency", flat: "204", priority: "Low", vendor: "HandyMan Services", status: "Open" },
    { title: "Balcony railing loose", category: "Structural", building: "Sunrise Building", flat: "402", priority: "High", vendor: "SteelFix Constructions", status: "In progress" },
]

export const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
        case "high":
            return "bg-warning-tag-bg border border-warning-tag-border text-warning-tag-text"
        case "medium":
            return "bg-medium-tag-bg border border-medium-tag-border text-medium-tag-text"
        case "low":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "in progress":
        case "inprogress":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "open":
            return "bg-open-tag-bg border border-open-tag-border text-open-tag-text"
        case "complete":
        case "paid":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}
