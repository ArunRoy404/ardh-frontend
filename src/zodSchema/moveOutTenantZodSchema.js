import { z } from "zod";

/* ───────────────────────────────────────────
 * Move Out Tenant Schema
 * ─────────────────────────────────────────── */
export const moveOutTenantSchema = z.object({
  moveOutDate: z.string().min(1, "Move out date is required"),
  pendingRent: z.string().min(1, "Pending rent is required"),
  damage: z.string().min(1, "Damage amount is required"),
  refund: z.string().min(1, "Refund amount is required"),
  idNumber: z.string().min(1, "ID Number is required"),
});

export const moveOutTenantDefaultValues = {
  moveOutDate: "",
  pendingRent: "0",
  damage: "0",
  refund: "0",
  idNumber: "",
};
