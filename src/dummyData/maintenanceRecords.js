export const maintenanceRecords = [
    { id: 101, ticketId: "MNT-701", issue: "Leaking water pipe in kitchen", type: "Plumbing", floor: 1, tenant: "Ankit Varma", status: "Open", flat: "101" },
    { id: 102, ticketId: "MNT-702", issue: "AC not cooling", type: "HVAC", floor: 3, tenant: "Preeti Singh", status: "Open", flat: "303" },
    { id: 103, ticketId: "MNT-703", issue: "Broken ceiling fan", type: "Electrical", floor: 2, tenant: "Ravi Gupta", status: "In Progress", flat: "202" },
    { id: 104, ticketId: "MNT-704", issue: "Main door lock jammed", type: "Carpentry", floor: 1, tenant: "Meera Iyer", status: "Open", flat: "102" },
    { id: 105, ticketId: "MNT-705", issue: "Water heater not working", type: "Plumbing", floor: 4, tenant: "Vikram Malhotra", status: "In Progress", flat: "402" },
    { id: 106, ticketId: "MNT-706", issue: "Window glass cracked", type: "Glazing", floor: 3, tenant: "Preeti Singh", status: "Open", flat: "303" },
    { id: 107, ticketId: "MNT-707", issue: "Power socket not working", type: "Electrical", floor: 1, tenant: "Neha Singh", status: "Resolved", flat: "104" },
    { id: 108, ticketId: "MNT-708", issue: "Toilet flush broken", type: "Plumbing", floor: 2, tenant: "Pooja Patel", status: "Open", flat: "203" },
    { id: 109, ticketId: "MNT-709", issue: "Kitchen cabinet hinge loose", type: "Carpentry", floor: 3, tenant: "Suresh Kumar", status: "Open", flat: "302" },
    { id: 110, ticketId: "MNT-710", issue: "Intercom not functioning", type: "Electrical", floor: 1, tenant: "Ankit Varma", status: "In Progress", flat: "101" },
    { id: 111, ticketId: "MNT-711", issue: "Paint peeling off walls", type: "Painting", floor: 2, tenant: "Rahul Gupta", status: "Open", flat: "201" },
    { id: 112, ticketId: "MNT-712", issue: "Geyser leaking water", type: "Plumbing", floor: 4, tenant: "Vikram Malhotra", status: "Resolved", flat: "401" },
    { id: 113, ticketId: "MNT-713", issue: "Smoke detector beeping", type: "Safety", floor: 3, tenant: "Preeti Singh", status: "Open", flat: "301" },
    { id: 114, ticketId: "MNT-714", issue: "Mosquito mesh torn", type: "General", floor: 2, tenant: "Pooja Patel", status: "Open", flat: "203" },
    { id: 115, ticketId: "MNT-715", issue: "TV cable port damaged", type: "Electrical", floor: 1, tenant: "Meera Iyer", status: "In Progress", flat: "102" },
    { id: 116, ticketId: "MNT-716", issue: "Balcony railing loose", type: "Structural", floor: 4, tenant: "Vikram Malhotra", status: "Open", flat: "402" },
    { id: 117, ticketId: "MNT-717", issue: "Doorbell not working", type: "Electrical", floor: 2, tenant: "Ravi Gupta", status: "Resolved", flat: "202" },
    { id: 118, ticketId: "MNT-718", issue: "Cracks in wall plaster", type: "Painting", floor: 3, tenant: "Suresh Kumar", status: "Open", flat: "302" },
]

export const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
        case "open":
            return "bg-open-tag-bg border border-open-tag-border text-open-tag-text"
        case "in progress":
            return "bg-progress-tag-bg border border-progress-tag-border text-progress-tag-text"
        case "resolved":
            return "bg-success-tag-bg border border-success-tag-border text-success-tag-text"
        default:
            return ""
    }
}
