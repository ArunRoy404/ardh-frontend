import { z } from "zod";

/* ───────────────────────────────────────────
 * Owner Schema
 * ─────────────────────────────────────────── */
export const ownerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  idType: z.string().min(1, "ID Type is required"),
  idNumber: z.string().min(1, "ID Number is required"),
  bankName: z.string().min(1, "Bank name is required"),
  accountNo: z.string().min(1, "Account number is required"),
  ifscCode: z.string().min(1, "IFSC Code is required"),
  properties: z.string().min(1, "At least one property must be selected"),
});

export const ownerDefaultValues = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  address: "",
  idType: "Aadhar",
  idNumber: "",
  bankName: "",
  accountNo: "",
  ifscCode: "",
  properties: "101",
};
