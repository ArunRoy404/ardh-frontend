export const openMaintenance = [
    { title: "Water leakage in...", category: "Electrical", building: "Sunrise Building", flat: "A1", priority: "Low", vendor: "Spark electricals", equipment: "Water Pump", status: "Complete" },
    { title: "AC not cooling", category: "Plumbing", building: "Sunrise Building", flat: "101", priority: "Low", vendor: "Quick Fix Plumbing", equipment: "Main Elevator", status: "Complete" },
    { title: "Parking lot lights...", category: "Electrical", building: "Sunrise Building", flat: "101", priority: "Low", vendor: "Quick Fix Plumbing", equipment: "Corridor Lights", status: "Complete" },
    { title: "Common area p...", category: "Plumbing", building: "Sunrise Building", flat: "301", priority: "High", vendor: "-", equipment: "Corridor Lights", status: "Open" },
    { title: "CCTV camera m...", category: "painting", building: "Sunrise Building", flat: "301", priority: "High", vendor: "-", equipment: "CCTV DVR", status: "Open" },
    { title: "Kitchen sink rep...", category: "Electrical", building: "Sunrise Building", flat: "-", priority: "Medium", vendor: "Spark Electricals", equipment: "Water Pump", status: "In progress" },
    { title: "Water leakage in...", category: "Electrical", building: "Sunrise Building", flat: "-", priority: "Medium", vendor: "Spark Electricals", equipment: "Water Pump", status: "In progress" }
];

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
        case "inprogress":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "open":
            return "bg-open-tag-bg border border-open-tag-border text-open-tag-text"
        case "paid":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}
