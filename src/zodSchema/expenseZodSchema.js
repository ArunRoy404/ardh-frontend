import { z } from "zod";

/* ───────────────────────────────────────────
 * Expense Schema
 * ─────────────────────────────────────────── */
export const expenseSchema = z.object({
  category: z.string().min(1, "Expenses category is required"),
  expenseHead: z.string().min(1, "Expenses head is required"),
  specificItem: z.string().min(1, "Specific item is required"),
  nature: z.string().min(1, "Expense nature is required"),
  amount: z.string().min(1, "Amount is required"),
  entity: z.string().min(1, "Expense entity is required"),
  buildingName: z.string().min(1, "Building is required"),
  expenseDate: z.string().min(1, "Expense date is required"),
  financeMethod: z.string().min(1, "Finance method is required"),
  status: z.string().min(1, "Status is required"),
  reference: z.string().min(1, "Reference is required"),
});

export const expenseDefaultValues = {
  category: "Operational",
  expenseHead: "Watchman Salary",
  specificItem: "Monthly Salary",
  nature: "",
  amount: "0",
  entity: "Building level",
  buildingName: "",
  expenseDate: "",
  financeMethod: "",
  status: "",
  reference: "",
};
