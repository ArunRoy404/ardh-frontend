export const userRecords = [
    {
        id: 1,
        name: "Rajesh Kumar",
        phone: "+91 9876543210",
        email: "rajesh@example.com",
        city: "Bangalore",
        role: "Property Manager",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        name: "Priya Sharma",
        phone: "+91 9876543211",
        email: "priya@example.com",
        city: "Bangalore",
        role: "Admin",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        name: "Amit Patel",
        phone: "+91 9876543211",
        email: "amit@example.com",
        city: "Mumbai",
        role: "Accountant",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 4,
        name: "Sunita Rao", 
        phone: "+91 9876543213",
        email: "sunita@example.com",
        city: "Delhi",
        role: "Property Manager",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 5,
        name: "Vikram Shah",
        phone: "+91 9876543214",
        email: "vikram@example.com",
        city: "Pune",
        role: "Security",
        status: "Pending",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 6,
        name: "Anil Mehta",
        phone: "+91 9876543215",
        email: "anil@example.com",
        city: "Chennai",
        role: "Technician",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 7,
        name: "Karan Johar",
        phone: "+91 9876543216",
        email: "karan@example.com",
        city: "Mumbai",
        role: "Property Manager",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1489980508314-941910ded1f4?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 8,
        name: "Ritu Kapoor",
        phone: "+91 9876543217",
        email: "ritu@example.com",
        city: "Delhi",
        role: "Admin",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 9,
        name: "Sanjay Dutt",
        phone: "+91 9876543218",
        email: "sanjay@example.com",
        city: "Mumbai",
        role: "Accountant",
        status: "Inactive",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 10,
        name: "Neha Kakkar",
        phone: "+91 9876543219",
        email: "neha@example.com",
        city: "Kolkata",
        role: "Property Manager",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 11,
        name: "Arjun Rampal",
        phone: "+91 9876543220",
        email: "arjun@example.com",
        city: "Goa",
        role: "Technician",
        status: "Pending",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 12,
        name: "Kiran Mazumdar",
        phone: "+91 9876543221",
        email: "kiran@example.com",
        city: "Bangalore",
        role: "Admin",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
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
