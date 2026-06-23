import { z } from "zod";

/* ───────────────────────────────────────────
 * Income Schema
 * ─────────────────────────────────────────── */
export const incomeSchema = z.object({
  incomeEntity: z.string().min(1, "Income entity type is required"),
  type: z.string().min(1, "Income type is required"),
  amount: z.string().min(1, "Amount is required"),
  tenantName: z.string().min(1, "Tenant name is required"),
  buildingName: z.string().min(1, "Building is required"),
  apartment: z.string().min(1, "Apartment is required"),
  period: z.string().min(1, "Period is required"),
  paymentDate: z.string().min(1, "Payment date is required"),
  method: z.string().min(1, "Payment method is required"),
  reference: z.string().min(1, "Reference is required"),
  status: z.string().min(1, "Status is required"),
});

export const incomeDefaultValues = {
  incomeEntity: "",
  type: "",
  amount: "0",
  tenantName: "",
  buildingName: "",
  apartment: "",
  period: "",
  paymentDate: "",
  method: "",
  reference: "",
  status: "Paid",
};
