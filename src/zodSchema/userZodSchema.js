import { z } from "zod";

/* ───────────────────────────────────────────
 * User Schema
 * ─────────────────────────────────────────── */
export const userSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    address: z.string().min(1, "Address is required"),
    password: z
      .string()
      .min(1, "User Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(1, "Confirm User Password is required"),
    role: z.string().min(1, "Role is required"),
    permissions: z.string().min(1, "Permissions are required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const userDefaultValues = {
  name: "",
  phone: "",
  email: "",
  address: "",
  password: "",
  confirmPassword: "",
  role: "",
  permissions: "",
};
