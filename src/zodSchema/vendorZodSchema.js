import { z } from "zod";

/* ───────────────────────────────────────────
 * Vendor Schema
 * ─────────────────────────────────────────── */
export const vendorSchema = z.object({
  name: z.string().min(1, "Vendor name is required"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  vendorType: z.string().min(1, "Vendor type is required"),
  gstNumber: z.string().min(1, "GST number is required"),
  address: z.string().min(1, "Address is required"),
});

export const vendorDefaultValues = {
  name: "",
  phone: "",
  company: "",
  email: "",
  vendorType: "",
  gstNumber: "",
  address: "",
};
