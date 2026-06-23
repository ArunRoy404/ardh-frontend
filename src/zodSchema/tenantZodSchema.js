import { z } from "zod";

/* ───────────────────────────────────────────
 * Tenant Schema
 * ─────────────────────────────────────────── */
export const tenantSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  idType: z.string().min(1, "ID Type is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  buildingName: z.string().min(1, "Building is required"),
  apartment: z.string().min(1, "Apartment is required"),
  moveInDate: z.string().min(1, "Move in date is required"),
  leaseStart: z.string().min(1, "Lease start date is required"),
  leaseEnd: z.string().optional(),
  securityDeposit: z.string().min(1, "Security deposit is required"),
  emergencyContact: z.string().min(1, "Emergency contact name is required"),
  emergencyPhone: z.string().min(1, "Emergency phone number is required"),
});

export const tenantDefaultValues = {
  fullName: "",
  phone: "",
  email: "",
  idType: "Aadhar",
  idNumber: "",
  buildingName: "",
  apartment: "",
  moveInDate: "",
  leaseStart: "",
  leaseEnd: "",
  securityDeposit: "0",
  emergencyContact: "",
  emergencyPhone: "",
};
