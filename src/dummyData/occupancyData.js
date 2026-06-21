export const occupancyData = [
    { status: "occupied", value: 3, fill: "var(--success-tag-text)" },
    { status: "vacant", value: 2, fill: "var(--progress-tag-text)" },
    { status: "maintenance", value: 2, fill: "var(--accent)" },
    { status: "reserved", value: 1, fill: "var(--primary)" },
]

export const occupancyConfig = {
    value: {
        label: "Value",
    },
    occupied: {
        label: "Occupied",
        color: "var(--success-tag-text)",
    },
    vacant: {
        label: "Vacant",
        color: "var(--progress-tag-text)",
    },
    maintenance: {
        label: "Maintenance",
        color: "var(--accent)",
    },
    reserved: {
        label: "Reserved",
        color: "var(--primary)",
    },
}
