export const openMaintenance = [
    { title: "Water Leakage in bathroom", location: "Sunrise Tower • 101", priority: "High", status: "InProgress" },
    { title: "Ac Not cooling", location: "Skyline Residency • 301", priority: "High", status: "InProgress" },
    { title: "Parking lot lights broken", location: "Sunrise Tower", priority: "Medium", status: "Open" },
    { title: "Common area painting", location: "Green Valley Apartments", priority: "Low", status: "Open" },
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
