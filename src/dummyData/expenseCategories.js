export const expenseCategories = [
    { name: "Utilities", percentage: 66 },
    { name: "Supplies", percentage: 10 },
    { name: "Maintenance", percentage: 20 },
    { name: "Repair", percentage: 75 },
    { name: "Cleaning", percentage: 15 },
    { name: "Salary", percentage: 30 },
    { name: "Insurance", percentage: 100 },
]

export const expenseData = expenseCategories.map((item) => ({
    name: item.name,
    value: Math.round((item.percentage / 100) * 120000),
}))

export const expenseConfig = {
    value: {
        label: "Expense",
        color: "var(--accent)",
    },
}
