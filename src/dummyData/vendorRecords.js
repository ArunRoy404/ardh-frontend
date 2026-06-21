export const vendorRecords = [
    {
        id: 1,
        name: "QuickFix Plumbing",
        company: "Quick FIX",
        phone: "+91 9988776655",
        service: "Plumbing",
        status: "Active"
    },
    {
        id: 2,
        name: "Spark Electricals",
        company: "Spark Corp",
        phone: "+91 9988776655",
        service: "Electrical",
        status: "Active"
    },
    {
        id: 3,
        name: "CleanPro Services",
        company: "Clean pro",
        phone: "+91 9988776655",
        service: "Electrical",
        status: "Active"
    },
    {
        id: 4,
        name: "A-1 Elevators",
        company: "KONE Services",
        phone: "+91 9988776656",
        service: "Elevator Maintenance",
        status: "Active"
    },
    {
        id: 5,
        name: "Secure Eye Security",
        company: "Secure Guard Co.",
        phone: "+91 9988776657",
        service: "Security Services",
        status: "Active"
    },
    {
        id: 6,
        name: "Green Field Landscaping",
        company: "Green Lands",
        phone: "+91 9988776658",
        service: "Garden & Lawn",
        status: "Active"
    },
    {
        id: 7,
        name: "Apex Pest Control",
        company: "Apex Pest",
        phone: "+91 9988776659",
        service: "Pest Management",
        status: "Active"
    },
    {
        id: 8,
        name: "Water-Flow Services",
        company: "Water Flow Corp",
        phone: "+91 9988776660",
        service: "Water System",
        status: "Pending"
    },
    {
        id: 9,
        name: "BuildStrong Contractors",
        company: "BuildStrong Inc",
        phone: "+91 9988776661",
        service: "Masonry & Repairs",
        status: "Active"
    },
    {
        id: 10,
        name: "Paint-It Services",
        company: "Paint It Ltd",
        phone: "+91 9988776662",
        service: "Painting & Decorating",
        status: "Active"
    },
    {
        id: 11,
        name: "Fast-Line Waste",
        company: "Fast Line",
        phone: "+91 9988776663",
        service: "Waste Disposal",
        status: "Inactive"
    },
    {
        id: 12,
        name: "Chill-Out AC Repair",
        company: "Chill Out",
        phone: "+91 9988776664",
        service: "HVAC Maintenance",
        status: "Active"
    }
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "active":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        case "pending":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "inactive":
            return "bg-slate-100 border border-slate-300 text-slate-500"
        default:
            return ""
    }
}
