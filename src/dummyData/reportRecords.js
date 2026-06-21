export const incomeReportRecords = [
    {
        id: 1,
        type: "Rent",
        amount: "₹45,000",
        tenant: "Meera Iyer",
        building: "Sunrise Building",
        flat: "101",
        date: "May 5, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 2,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        flat: "102",
        date: "May 4, 2026",
        method: "Cash",
        status: "Pending"
    },
    {
        id: 3,
        type: "Maintenance",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        flat: "302",
        date: "May 4, 2026",
        method: "Cash",
        status: "Overdue"
    },
    {
        id: 4,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        flat: "301",
        date: "May 4, 2026",
        method: "Cash",
        status: "Pending"
    },
    {
        id: 5,
        type: "Rent",
        amount: "₹15,000",
        tenant: "Neha Singh",
        building: "Sunrise Tower",
        flat: "102",
        date: "May 3, 2026",
        method: "Online",
        status: "Paid"
    },
    {
        id: 6,
        type: "Maintenance",
        amount: "₹7,000",
        tenant: "Ravi Gupta",
        building: "Skyline Residency",
        flat: "204",
        date: "May 2, 2026",
        method: "Cash",
        status: "Paid"
    },
    {
        id: 7,
        type: "Rent",
        amount: "₹30,000",
        tenant: "Suresh Nair",
        building: "Green Valley",
        flat: "105",
        date: "May 2, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 8,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Vikram Shah",
        building: "Sunrise Tower",
        flat: "201",
        date: "May 1, 2026",
        method: "Online",
        status: "Paid"
    },
    {
        id: 9,
        type: "Maintenance",
        amount: "₹8,000",
        tenant: "Amit Patel",
        building: "Skyline Residency",
        flat: "101",
        date: "May 1, 2026",
        method: "Cash",
        status: "Paid"
    }
]

export const expenseReportRecords = [
    {
        id: 1,
        category: "Utilities",
        description: "Electricity bill - May",
        amount: "₹45,000",
        building: "Sunrise Building",
        vendor: "Spark Electricals",
        date: "May 5, 2026",
        status: "Paid"
    },
    {
        id: 2,
        category: "Supplies",
        description: "Garden maintenance",
        amount: "₹5,000",
        building: "Sunrise Building",
        vendor: "Meera Iyer",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 3,
        category: "Maintenance",
        description: "Plumbing repairs",
        amount: "₹8,500",
        building: "Sunrise Building",
        vendor: "QuickFix Plumbing",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 4,
        category: "Repair",
        description: "Lift motor replacement",
        amount: "₹8,500",
        building: "Sunrise Building",
        vendor: "CleanPro Services",
        date: "May 7, 2026",
        status: "Paid"
    },
    {
        id: 5,
        category: "Cleaning",
        description: "Monthly common area cleaning",
        amount: "₹8,500",
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
        category: "Utilities",
        description: "Water bill - May",
        amount: "₹12,000",
        building: "Skyline Residency",
        vendor: "-",
        date: "May 8, 2026",
        status: "Paid"
    },
    {
        id: 8,
        category: "Supplies",
        description: "Office stationery",
        amount: "₹3,500",
        building: "Green Valley",
        vendor: "Meera Iyer",
        date: "May 9, 2026",
        status: "Paid"
    },
    {
        id: 9,
        category: "Cleaning",
        description: "Waste disposal service",
        amount: "₹4,500",
        building: "Green Valley",
        vendor: "CleanPro Services",
        date: "May 11, 2026",
        status: "Paid"
    },
    {
        id: 10,
        category: "Renovation",
        description: "Sunrise lobby upgrade",
        amount: "₹49,500",
        building: "Sunrise Building",
        vendor: "BuildStrong Contractors",
        date: "May 5, 2026",
        status: "Paid"
    },
    {
        id: 11,
        category: "Insurance",
        description: "Building insurance premium",
        amount: "₹125,500",
        building: "Sunrise Building",
        vendor: "-",
        date: "May 7, 2026",
        status: "Pending"
    },
    {
        id: 12,
        category: "Repair",
        description: "CCTV camera repair",
        amount: "₹6,200",
        building: "Skyline Residency",
        vendor: "QuickFix Plumbing",
        date: "May 10, 2026",
        status: "Overdue"
    },
    {
        id: 13,
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
