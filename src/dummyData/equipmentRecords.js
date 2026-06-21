export const equipmentRecords = [
    {
        id: 1,
        name: "Main Elevator",
        type: "Lift",
        building: "Sunrise Tower",
        brand: "KONE",
        nextService: "Jul 15, 2026",
        status: "Operational"
    },
    {
        id: 2,
        name: "Water Pump",
        type: "CCTV",
        building: "Sunrise Tower",
        brand: "Hikvision",
        nextService: "Aug 20, 2026",
        status: "Operational"
    },
    {
        id: 3,
        name: "Water Pump",
        type: "CCTV",
        building: "Sunrise Tower",
        brand: "Hikvision",
        nextService: "Aug 20, 2026",
        status: "Operational"
    },
    {
        id: 4,
        name: "Backup Generator",
        type: "pump",
        building: "Sunrise Tower",
        brand: "Compton",
        nextService: "Sep 10, 2026",
        status: "Under Maintenance"
    },
    {
        id: 5,
        name: "Backup Generator",
        type: "pump",
        building: "Sunrise Tower",
        brand: "Compton",
        nextService: "Sep 10, 2026",
        status: "Under Maintenance"
    },
    {
        id: 6,
        name: "Fire Extinguisher",
        type: "Safety",
        building: "Sunrise Tower",
        brand: "Minimax",
        nextService: "Oct 5, 2026",
        status: "Operational"
    },
    {
        id: 7,
        name: "CCTV DVR",
        type: "Security",
        building: "Sunrise Tower",
        brand: "CP PLUS",
        nextService: "Jul 28, 2026",
        status: "Operational"
    },
    {
        id: 8,
        name: "Corridor Lights",
        type: "Electrical",
        building: "Skyline Residency",
        brand: "Philips",
        nextService: "Sep 15, 2026",
        status: "Operational"
    },
    {
        id: 9,
        name: "Main Elevator",
        type: "Lift",
        building: "Skyline Residency",
        brand: "OTIS",
        nextService: "Jul 10, 2026",
        status: "Under Maintenance"
    },
    {
        id: 10,
        name: "Water Pump",
        type: "Pump",
        building: "Green Valley",
        brand: "Kirloskar",
        nextService: "Nov 12, 2026",
        status: "Operational"
    },
    {
        id: 11,
        name: "Backup Generator",
        type: "Generator",
        building: "Green Valley",
        brand: "Cummins",
        nextService: "Dec 1, 2026",
        status: "Operational"
    },
    {
        id: 12,
        name: "Access Control System",
        type: "Security",
        building: "Skyline Residency",
        brand: "Honeywell",
        nextService: "Aug 5, 2026",
        status: "Out of Order"
    }
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "operational":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        case "under maintenance":
        case "undermaintenance":
            return "bg-medium-tag-bg border border-medium-tag-border text-medium-tag-text"
        case "out of order":
        case "outoforder":
            return "bg-warning-tag-bg border border-warning-tag-border text-warning-tag-text"
        default:
            return ""
    }
}
