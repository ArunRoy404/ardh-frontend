import { z } from "zod";

/* ───────────────────────────────────────────
 * General Settings Schema
 * ─────────────────────────────────────────── */
export const generalSettingsSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyEmail: z.string().min(1, "Company email is required").email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
});

export const generalSettingsDefaultValues = {
  companyName: "ARDH Properties",
  companyEmail: "admin@ardh.com",
  phone: "+91 987543210",
  address: "Hyderabad, India",
};

/* ───────────────────────────────────────────
 * Change Password Schema
 * ─────────────────────────────────────────── */
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(1, "New password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmNewPassword: z.string().min(1, "Confirm new password is required"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

export const changePasswordDefaultValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

