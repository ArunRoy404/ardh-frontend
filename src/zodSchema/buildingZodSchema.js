import { z } from "zod";

/* ───────────────────────────────────────────
 * Building Schema
 * ─────────────────────────────────────────── */
export const buildingSchema = z.object({
  buildingName: z.string().min(1, "Building name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  googleMapLink: z.string().min(1, "Google Map Link is required"),
  totalFloors: z.string().min(1, "Total floors is required"),
  parkingDetails: z.string().min(1, "Parking details is required"),
  status: z.string().min(1, "Status is required"),
});

export const buildingDefaultValues = {
  buildingName: "",
  address: "",
  city: "",
  state: "",
  country: "",
  googleMapLink: "",
  totalFloors: "",
  parkingDetails: "",
  status: "active",
};
