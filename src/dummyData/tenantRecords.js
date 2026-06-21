export const tenantRecords = [
    {
        id: 1,
        name: "Ankit Varma",
        phone: "+91 9876543210",
        building: "Sunrise Tower",
        flat: "101",
        moveIn: "Jun 1, 2025",
        rent: "₹30,000",
        status: "Active"
    },
    {
        id: 2,
        name: "Neha Singh",
        phone: "+91 9876543211",
        building: "Sunrise Tower",
        flat: "102",
        moveIn: "Mar 15, 2025",
        rent: "₹20,000",
        status: "Active"
    },
    {
        id: 3,
        name: "Ravi Gupta",
        phone: "+91 9876543212",
        building: "Sunrise Tower",
        flat: "A1",
        moveIn: "Jan 10, 2025",
        rent: "₹20,000",
        status: "Active"
    },
    {
        id: 4,
        name: "Meera Iyer",
        phone: "+91 9876543213",
        building: "Sunrise Tower",
        flat: "301",
        moveIn: "aug 1, 2025",
        rent: "₹20,000",
        status: "Active"
    },
    {
        id: 5,
        name: "Suresh Nair",
        phone: "+91 9876543214",
        building: "Sunrise Tower",
        flat: "V3",
        moveIn: "Jun 1, 2024",
        rent: "₹20,000",
        status: "Moved Out"
    },
    {
        id: 6,
        name: "Amit Sharma",
        phone: "+91 9876543215",
        building: "Skyline Residency",
        flat: "204",
        moveIn: "Jul 10, 2025",
        rent: "₹25,000",
        status: "Active"
    },
    {
        id: 7,
        name: "Preeti Singh",
        phone: "+91 9876543216",
        building: "Green Valley",
        flat: "B3",
        moveIn: "May 1, 2025",
        rent: "₹18,000",
        status: "Active"
    },
    {
        id: 8,
        name: "Vikram Malhotra",
        phone: "+91 9876543217",
        building: "Skyline Residency",
        flat: "501",
        moveIn: "Oct 15, 2024",
        rent: "₹32,000",
        status: "Moved Out"
    },
    {
        id: 9,
        name: "Suresh Kumar",
        phone: "+91 9876543218",
        building: "Green Valley",
        flat: "105",
        moveIn: "Jan 20, 2025",
        rent: "₹15,000",
        status: "Active"
    },
    {
        id: 10,
        name: "Rahul Gupta",
        phone: "+91 9876543219",
        building: "Sunrise Tower",
        flat: "202",
        moveIn: "Dec 1, 2025",
        rent: "₹22,000",
        status: "Pending"
    },
    {
        id: 11,
        name: "Pooja Patel",
        phone: "+91 9876543220",
        building: "Green Valley",
        flat: "V1",
        moveIn: "Feb 15, 2025",
        rent: "₹16,000",
        status: "Active"
    },
    {
        id: 12,
        name: "Ananya Sen",
        phone: "+91 9876543221",
        building: "Skyline Residency",
        flat: "402",
        moveIn: "Nov 5, 2025",
        rent: "₹28,000",
        status: "Active"
    }
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "active":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        case "pending":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "moved out":
        case "movedout":
            return "bg-slate-100 border border-slate-300 text-slate-500"
        default:
            return ""
    }
}
