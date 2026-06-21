export const expenseRecords = [
    {
        id: 1,
        category: "Utilities",
        description: "Electricity bill - May",
        amount: "₹45000",
        building: "Sunrise Building",
        vendor: "-",
        date: "May 5, 2026",
        status: "Paid"
    },
    {
        id: 2,
        category: "Supplies",
        description: "Garden maintenance",
        amount: "₹5000",
        building: "Sunrise Building",
        vendor: "Meera Iyer",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 3,
        category: "Maintenance",
        description: "Plumbing repairs",
        amount: "₹8500",
        building: "Sunrise Building",
        vendor: "QuickFix Plumbing",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 4,
        category: "Repair",
        description: "Lift motor replacement",
        amount: "₹8500",
        building: "Sunrise Building",
        vendor: "CleanPro Services",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 5,
        category: "Cleaning",
        description: "Monthly common area cleaning",
        amount: "₹8500",
        building: "Sunrise Building",
        vendor: "CleanPro Services",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 6,
        category: "Salary",
        description: "Security guard salary",
        amount: "₹25,500",
        building: "Sunrise Building",
        vendor: "-",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 7,
        category: "Insurance",
        description: "Building insurance premium",
        amount: "₹125,500",
        building: "Sunrise Building",
        vendor: "-",
        date: "May 7, 2026",
        status: "Pending"
    },
    {
        id: 8,
        category: "Utilities",
        description: "Water bill - May",
        amount: "₹12,000",
        building: "Skyline Residency",
        vendor: "-",
        date: "May 8, 2026",
        status: "Paid"
    },
    {
        id: 9,
        category: "Supplies",
        description: "Office stationery",
        amount: "₹3,500",
        building: "Green Valley",
        vendor: "Meera Iyer",
        date: "May 9, 2026",
        status: "Paid"
    },
    {
        id: 10,
        category: "Repair",
        description: "CCTV camera repair",
        amount: "₹6,200",
        building: "Skyline Residency",
        vendor: "QuickFix Plumbing",
        date: "May 10, 2026",
        status: "Overdue"
    },
    {
        id: 11,
        category: "Cleaning",
        description: "Waste disposal service",
        amount: "₹4,500",
        building: "Green Valley",
        vendor: "CleanPro Services",
        date: "May 11, 2026",
        status: "Paid"
    },
    {
        id: 12,
        category: "Salary",
        description: "Janitor salary",
        amount: "₹15,000",
        building: "Skyline Residency",
        vendor: "-",
        date: "May 12, 2026",
        status: "Pending"
    }
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "paid":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        case "pending":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "overdue":
            return "bg-warning-tag-bg border border-warning-tag-border text-warning-tag-text"
        default:
            return ""
    }
}
