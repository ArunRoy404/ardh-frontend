export const incomeRecords = [
    {
        id: 1,
        type: "Rent",
        amount: "₹45,000",
        tenant: "Meera Iyer",
        building: "Sunrise Building",
        date: "May 5, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 2,
        type: "Maintenance",
        amount: "₹35,000",
        tenant: "Meera Iyer",
        building: "Sunrise Building",
        date: "May 7, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 3,
        type: "Parking",
        amount: "₹25,000",
        tenant: "Meera Iyer",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Paid"
    },
    {
        id: 4,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Neha Singh",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Paid"
    },
    {
        id: 5,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ravi Gupta",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Paid"
    },
    {
        id: 6,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Pending"
    },
    {
        id: 7,
        type: "Maintenance",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Overdue"
    },
    {
        id: 8,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Overdue"
    },
    {
        id: 9,
        type: "Rent",
        amount: "₹25,000",
        tenant: "Ankit Varma",
        building: "Sunrise Building",
        date: "May 4, 2026",
        method: "Cash",
        status: "Pending"
    },
    {
        id: 10,
        type: "Rent",
        amount: "₹30,000",
        tenant: "Amit Sharma",
        building: "Skyline Residency",
        date: "May 3, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 11,
        type: "Maintenance",
        amount: "₹12,000",
        tenant: "Amit Sharma",
        building: "Skyline Residency",
        date: "May 3, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
    {
        id: 12,
        type: "Parking",
        amount: "₹8,000",
        tenant: "Preeti Singh",
        building: "Green Valley",
        date: "May 2, 2026",
        method: "UPI",
        status: "Paid"
    },
    {
        id: 13,
        type: "Rent",
        amount: "₹28,000",
        tenant: "Suresh Kumar",
        building: "Green Valley",
        date: "May 1, 2026",
        method: "Bank Transfer",
        status: "Pending"
    },
    {
        id: 14,
        type: "Late Fee",
        amount: "₹2,500",
        tenant: "Suresh Kumar",
        building: "Green Valley",
        date: "May 1, 2026",
        method: "Bank Transfer",
        status: "Pending"
    },
    {
        id: 15,
        type: "Rent",
        amount: "₹32,000",
        tenant: "Vikram Malhotra",
        building: "Skyline Residency",
        date: "April 30, 2026",
        method: "Cheque",
        status: "Overdue"
    },
    {
        id: 16,
        type: "Rent",
        amount: "₹22,000",
        tenant: "Rahul Gupta",
        building: "Sunrise Building",
        date: "April 28, 2026",
        method: "UPI",
        status: "Paid"
    },
    {
        id: 17,
        type: "Maintenance",
        amount: "₹8,500",
        tenant: "Pooja Patel",
        building: "Green Valley",
        date: "April 25, 2026",
        method: "Cash",
        status: "Paid"
    },
    {
        id: 18,
        type: "Rent",
        amount: "₹35,000",
        tenant: "Preeti Singh",
        building: "Green Valley",
        date: "April 25, 2026",
        method: "Bank Transfer",
        status: "Paid"
    },
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
