import { z } from "zod";

/* ───────────────────────────────────────────
 * Sign In Schema
 * ─────────────────────────────────────────── */
export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

export const authDefaultValues = {
  email: "",
  password: "",
  rememberMe: false,
};

/* ───────────────────────────────────────────
 * Forgot Password Schema
 * ─────────────────────────────────────────── */
export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export const forgotPasswordDefaultValues = {
  email: "",
};

/* ───────────────────────────────────────────
 * OTP Verification Schema
 * ─────────────────────────────────────────── */
export const otpVerificationSchema = z.object({
  otp: z
    .string()
    .length(6, "Please enter the complete 6-digit code"),
});

export const otpVerificationDefaultValues = {
  otp: "",
};

/* ───────────────────────────────────────────
 * Reset Password Schema
 * ─────────────────────────────────────────── */
export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(1, "New password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(1, "Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const resetPasswordDefaultValues = {
  newPassword: "",
  confirmPassword: "",
};
