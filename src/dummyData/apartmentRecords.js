export const apartmentRecords = [
    { id: 1, flat: "101", type: "2BHK", floor: 1, tenant: "Ankit Varma", rent: "₹30,000", status: "Occupied" },
    { id: 2, flat: "102", type: "3BHK", floor: 2, tenant: "Neha Singh", rent: "₹30,000", status: "Occupied" },
    { id: 3, flat: "103", type: "2BHK", floor: 1, tenant: "-", rent: "₹20,000", status: "Vacant" },
    { id: 4, flat: "104", type: "1BHK", floor: 1, tenant: "Amit Sharma", rent: "₹15,000", status: "Occupied" },
    { id: 5, flat: "201", type: "3BHK", floor: 2, tenant: "-", rent: "₹28,000", status: "Vacant" },
    { id: 6, flat: "202", type: "2BHK", floor: 2, tenant: "Rahul Gupta", rent: "₹22,000", status: "Occupied" },
    { id: 7, flat: "203", type: "2BHK", floor: 2, tenant: "Pooja Patel", rent: "₹23,000", status: "Occupied" },
    { id: 8, flat: "301", type: "4BHK", floor: 3, tenant: "-", rent: "₹45,000", status: "Vacant" },
    { id: 9, flat: "302", type: "3BHK", floor: 3, tenant: "Suresh Kumar", rent: "₹35,000", status: "Occupied" },
    { id: 10, flat: "303", type: "2BHK", floor: 3, tenant: "Preeti Singh", rent: "₹24,000", status: "Occupied" },
    { id: 11, flat: "401", type: "1BHK", floor: 4, tenant: "-", rent: "₹16,000", status: "Vacant" },
    { id: 12, flat: "402", type: "2BHK", floor: 4, tenant: "Vikram Malhotra", rent: "₹25,000", status: "Occupied" },
    { id: 13, flat: "501", type: "3BHK", floor: 5, tenant: "Meera Iyer", rent: "₹32,000", status: "Occupied" },
    { id: 14, flat: "502", type: "2BHK", floor: 5, tenant: "-", rent: "₹22,000", status: "Vacant" },
    { id: 15, flat: "601", type: "4BHK", floor: 6, tenant: "Ravi Gupta", rent: "₹48,000", status: "Occupied" },
    { id: 16, flat: "602", type: "2BHK", floor: 6, tenant: "-", rent: "₹24,000", status: "Vacant" },
    { id: 17, flat: "701", type: "1BHK", floor: 7, tenant: "Neha Singh", rent: "₹18,000", status: "Occupied" },
    { id: 18, flat: "702", type: "3BHK", floor: 7, tenant: "-", rent: "₹36,000", status: "Vacant" },
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "occupied":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        case "vacant":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        default:
            return ""
    }
}
