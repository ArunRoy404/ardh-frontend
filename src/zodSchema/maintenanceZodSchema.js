import { z } from "zod";

/* ───────────────────────────────────────────
 * Maintenance Schema
 * ─────────────────────────────────────────── */
export const maintenanceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  priority: z.string().min(1, "Priority is required"),
  status: z.string().min(1, "Status is required"),
  vendor: z.string().min(1, "Vendor is required"),
  equipment: z.string().min(1, "Equipment is required"),
  buildingName: z.string().min(1, "Building is required"),
  apartment: z.string().min(1, "Apartment is required"),
  estimatedCost: z.string().min(1, "Estimated cost is required"),
  annualCost: z.string().min(1, "Annual cost is required"),
  scheduledDate: z.string().min(1, "Scheduled date is required"),
});

export const maintenanceDefaultValues = {
  title: "",
  description: "",
  category: "",
  priority: "",
  status: "",
  vendor: "",
  equipment: "",
  buildingName: "",
  apartment: "",
  estimatedCost: "0",
  annualCost: "0",
  scheduledDate: "",
};
