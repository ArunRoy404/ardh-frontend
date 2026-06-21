export const ownerRecords = [
    {
        id: 1,
        name: "Rajesh Kumar",
        phone: "+91 9876543210",
        email: "rajesh@example.com",
        city: "Bangalore",
        properties: 3,
        status: "Active"
    },
    {
        id: 2,
        name: "Priya Sharma",
        phone: "+91 9876543211",
        email: "priya@example.com",
        city: "Bangalore",
        properties: 2,
        status: "Active"
    },
    {
        id: 3,
        name: "Amit Patel",
        phone: "+91 9876543211",
        email: "amit@example.com",
        city: "Mumbai",
        properties: 4,
        status: "Active"
    },
    {
        id: 4,
        name: "Sunita Rao",
        phone: "+91 9876543213",
        email: "sunita@example.com",
        city: "Delhi",
        properties: 1,
        status: "Active"
    },
    {
        id: 5,
        name: "Vikram Shah",
        phone: "+91 9876543214",
        email: "vikram@example.com",
        city: "Pune",
        properties: 5,
        status: "Pending"
    },
    {
        id: 6,
        name: "Anil Mehta",
        phone: "+91 9876543215",
        email: "anil@example.com",
        city: "Chennai",
        properties: 2,
        status: "Active"
    },
    {
        id: 7,
        name: "Karan Johar",
        phone: "+91 9876543216",
        email: "karan@example.com",
        city: "Mumbai",
        properties: 6,
        status: "Active"
    },
    {
        id: 8,
        name: "Ritu Kapoor",
        phone: "+91 9876543217",
        email: "ritu@example.com",
        city: "Delhi",
        properties: 3,
        status: "Active"
    },
    {
        id: 9,
        name: "Sanjay Dutt",
        phone: "+91 9876543218",
        email: "sanjay@example.com",
        city: "Mumbai",
        properties: 8,
        status: "Inactive"
    },
    {
        id: 10,
        name: "Neha Kakkar",
        phone: "+91 9876543219",
        email: "neha@example.com",
        city: "Kolkata",
        properties: 1,
        status: "Active"
    },
    {
        id: 11,
        name: "Arjun Rampal",
        phone: "+91 9876543220",
        email: "arjun@example.com",
        city: "Goa",
        properties: 3,
        status: "Pending"
    },
    {
        id: 12,
        name: "Kiran Mazumdar",
        phone: "+91 9876543221",
        email: "kiran@example.com",
        city: "Bangalore",
        properties: 10,
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
