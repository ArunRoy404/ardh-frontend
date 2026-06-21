import { z } from "zod";

/* ───────────────────────────────────────────
 * Equipment Schema
 * ─────────────────────────────────────────── */
export const equipmentSchema = z.object({
  name: z.string().min(1, "Equipment name is required"),
  type: z.string().min(1, "Equipment type is required"),
  buildingName: z.string().min(1, "Building is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  serial: z.string().min(1, "Serial is required"),
  installDate: z.string().min(1, "Install date is required"),
  warrantyExpiryDate: z.string().min(1, "Warranty expiry date is required"),
  amcVendor: z.string().min(1, "AMC Vendor is required"),
  amcExpiryDate: z.string().min(1, "AMC Expiry date is required"),
  lastServiceDate: z.string().min(1, "Last service date is required"),
  nextServiceDate: z.string().min(1, "Next service date is required"),
  status: z.string().min(1, "Status is required"),
});

export const equipmentDefaultValues = {
  name: "",
  type: "",
  buildingName: "",
  brand: "",
  model: "",
  serial: "",
  installDate: "",
  warrantyExpiryDate: "",
  amcVendor: "",
  amcExpiryDate: "",
  lastServiceDate: "",
  nextServiceDate: "",
  status: "",
};
