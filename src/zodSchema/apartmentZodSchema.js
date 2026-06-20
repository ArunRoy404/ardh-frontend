import { z } from "zod";

/* ───────────────────────────────────────────
 * Apartment Schema
 * ─────────────────────────────────────────── */
export const apartmentSchema = z.object({
  buildingName: z.string().min(1, "Building name is required"),
  flatNumber: z.string().min(1, "Flat number is required"),
  nestawayId: z.string().min(1, "Nestaway ID is required"),
  flatNumber2: z.string().min(1, "Flat number 2 is required"),
  floor: z.string().min(1, "Floor is required"),
  apartmentType: z.string().min(1, "Apartment type is required"),
  area: z.string().min(1, "Area is required"),
  bedrooms: z.string().min(1, "Bedrooms is required"),
  bathrooms: z.string().min(1, "Bathrooms is required"),
  parkingSlot: z.string().min(1, "Parking slot is required"),
  hasBalcony: z.boolean().default(false),
  expectedRent: z.string().min(1, "Expected rent is required"),
  maintenanceCharge: z.string().min(1, "Maintenance charge is required"),
  waterCharge: z.string().min(1, "Water charge is required"),
  owner: z.string().min(1, "Owner is required"),
});

export const apartmentDefaultValues = {
  buildingName: "",
  flatNumber: "",
  nestawayId: "",
  flatNumber2: "",
  floor: "0",
  apartmentType: "2BHK",
  area: "",
  bedrooms: "2",
  bathrooms: "2",
  parkingSlot: "",
  hasBalcony: false,
  expectedRent: "0",
  maintenanceCharge: "2",
  waterCharge: "",
  owner: "",
};
